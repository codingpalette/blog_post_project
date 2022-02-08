// TodoPage
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { TodoButton, TodoContainer, TodoInput } from './styles'

const TodoPage = () => {
  // useState 상태의 기본값을 넣어주고 inputState 상태값이고 setInputState 으로 상태값을 설정해 준다.
  const [inputState, setInputState] = useState('')

  // 투두 리스트 값을 빈배열로 기본값을 셜정해 준다.
  const [todoList, setTodoList] = useState([])

  // 변경이벤트가 감지되면 그 값을 setInputState 에 넣어주고 인풋값을 변경시켜준다.
  const onChangeInput = e => {
    setInputState(e.target.value)
  }

  // 버튼 클릭 이벤트
  const onClickTodoSave = () => {
    console.log(inputState)
    // 불변성을 지키기위해 기존의 상태를 복사하고 수정한다. push, splice, sort 등의 함수 를 사용하면 오류가 발생한다.
    setTodoList([...todoList, inputState])
    // 투두리스트에 값을 넣은 다음 인풋값을 초기화 시켜 준다.
    setInputState('')
  }

  // useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
  // 해당 코드는 처음 렌더링 될 때 console.log(todoList) 가 실행이 되고 그 다음 todoList 값이 변경이 될때 마다 이벤트를 다시 실행해 console.log(todoList)가 실행이 된다.
  useEffect(() => {
    console.log(todoList)
  }, [todoList])

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
      </TodoContainer>
    </>
  )
}

export default TodoPage
