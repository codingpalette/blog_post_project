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
