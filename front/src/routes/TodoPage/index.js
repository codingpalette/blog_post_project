// TodoPage
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { TodoButton, TodoContainer, TodoInput } from './styles'
import ModalBox from '../../components/ModalBox'

const TodoPage = () => {
  // useState 상태의 기본값을 넣어주고 inputState 상태값이고 setInputState 으로 상태값을 설정해 준다.
  const [inputState, setInputState] = useState('')

  // 투두 리스트 값을 빈배열로 기본값을 셜정해 준다.
  const [todoList, setTodoList] = useState([])

  // 수정 모달창 열고 닫힘의 상태값
  const [modifyModalOpen, setModifyModalOpen] = useState(false)

  // 삭제 모달창 열고 닫힘의 상태값
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  // 수정 또는 삭제할 리스트의 아이디값
  const [listId, setListId] = useState(null)

  // 수정 모달창 인풋 상태값
  const [modifyInputState, setModifyInputState] = useState('')

  // 수정 모달창 인풋 변경될 때 이벤트
  const onChangeModifyInput = e => {
    setModifyInputState(e.target.value)
  }

  // 변경이벤트가 감지되면 그 값을 setInputState 에 넣어주고 인풋값을 변경시켜준다.
  const onChangeInput = e => {
    setInputState(e.target.value)
  }

  // 버튼 클릭 이벤트
  const onClickTodoSave = () => {
    console.log(inputState)
    // 불변성을 지키기위해 기존의 상태를 복사하고 수정한다. push, splice, sort 등의 함수 를 사용하면 오류가 발생한다.
    setTodoList([...todoList, { id: todoList.length + 1, content: inputState }])
    // 투두리스트에 값을 넣은 다음 인풋값을 초기화 시켜 준다.
    setInputState('')
  }

  // useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
  // 해당 코드는 처음 렌더링 될 때 console.log(todoList) 가 실행이 되고 그 다음 todoList 값이 변경이 될때 마다 이벤트를 다시 실행해 console.log(todoList)가 실행이 된다.
  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  // 수정 버튼을 눌렀을 때 실행되는 함수 수정할 리스트의 아이디를 저장하고 모달창을 열어준다.
  const onClickModifyModalOpen = id => {
    setListId(id)
    setModifyModalOpen(true)
  }

  // 수정 모달창을 닫을 때 실행되는 함수 수정할 리스트 아이디롤 초기화 해주고 모달창을 닫는다.
  const onClickModifyModalClose = () => {
    setModifyInputState('')
    setListId(null)
    setModifyModalOpen(false)
  }

  // 수정 모달창에서 수정버튼을 눌렀을때 실행되는 함수
  const onClickListModify = () => {
    // map 함수를 이용해서 불변성을 유지하고 새로운 배열을 만들어서 수정한다.
    setTodoList(
      todoList.map(todo => {
        if (todo.id === listId) {
          todo.content = modifyInputState
        }
        return todo
      }),
    )
    onClickModifyModalClose()
  }

  // 삭제 버튼을 눌렀을 때 실행되는 함수 삭제할 리스트의 아이디를 저장하고 모달창을 열어준다.
  const onClickDeleteModalOpen = id => {
    setListId(id)
    setDeleteModalOpen(true)
  }

  // 삭제 모달창을 닫을 때 실행되는 함수 삭제할 리스트 아이디롤 초기화 해주고 모달창을 닫는다.
  const onClickDeleteModalClose = () => {
    setListId(null)
    setDeleteModalOpen(false)
  }

  // 삭제 모달창에서 삭제 버튼을 눌렀을때 실행되는 이벤트
  const onClickListDelete = () => {
    setTodoList(todoList.filter(todo => todo.id !== listId))
    onClickDeleteModalClose()
  }

  return (
    <>
      <Header />
      <TodoContainer>
        <h1>Todo List</h1>
        <div className="todo_form_box">
          {/* 인풋의 상태값은 value 에 값을 넣어주고 onChange 가 일어났을때 변경을 시켜줘야 한다 안그러면 오류가 발생함  */}
          <TodoInput type="text" value={inputState} onChange={onChangeInput} />
          <TodoButton type="button" onClick={onClickTodoSave}>
            입력
          </TodoButton>
        </div>
        <div className="todo_list_box">
          <ul>
            {/* map 함수를 사용하여 반복되는 컴포넌트를 렌더링. 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 */}
            {todoList.map((v, i) => (
              <li key={v.id + i}>
                <div className="content">
                  <span>번호: {i + 1}</span>
                  <p>내용: {v.content}</p>
                </div>
                <div className="button_box">
                  {/* 함수에 인자값을 넘겨주는 방법은 화살표 함수를 이용하여 원래 부르려던 함수를 감싸고, 해당 함수의 호출부에서 인자를 넘겨준다. */}
                  <button type="button" className="modify_btn" onClick={() => onClickModifyModalOpen(v.id)}>
                    수정
                  </button>
                  <button type="button" className="delete_btn" onClick={() => onClickDeleteModalOpen(v.id)}>
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {modifyModalOpen && (
          <ModalBox title="리스트 수정">
            <TodoInput type="text" value={modifyInputState} onChange={onChangeModifyInput} />
            <div className="btn_box">
              <button type="button" className="modify_btn" onClick={onClickListModify}>
                수정
              </button>
              <button type="button" className="close_btn" onClick={onClickModifyModalClose}>
                닫기
              </button>
            </div>
          </ModalBox>
        )}

        {deleteModalOpen && (
          <ModalBox title="리스트 삭제">
            <div>리스트를 삭제 하시겠습니까?</div>
            <div className="btn_box">
              <button type="button" className="modify_btn" onClick={onClickListDelete}>
                삭제
              </button>
              <button type="button" className="close_btn" onClick={onClickDeleteModalClose}>
                닫기
              </button>
            </div>
          </ModalBox>
        )}
      </TodoContainer>
    </>
  )
}

export default TodoPage
