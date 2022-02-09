// TodoPage styles.js

import styled from 'styled-components'

export const TodoContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  h1 {
    text-align: center;
  }

  .todo_form_box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .todo_list_box {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      width: 100%;
      max-width: 750px;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .content {
        display: flex;
        align-items: center;
        padding: 7.5px 14px;
        background-color: #eee;
        box-sizing: border-box;
        border-radius: 4px;
        gap: 5px;
      }

      .button_box {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
          padding: 0.2rem 0.5rem;
          box-sizing: border-box;
          border-radius: 4px;
          color: #fff;
        }

        .modify_btn {
          background-color: #94a3b8;
        }

        .delete_btn {
          background-color: #ef4444;
        }
      }
    }
    li + li {
      margin-top: 15px;
    }
  }
`

export const TodoButton = styled.button`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #3b82f6;
  color: #fff;
`

export const TodoInput = styled.input`
  background-color: #eee;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`
