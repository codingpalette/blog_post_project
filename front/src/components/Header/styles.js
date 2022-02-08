// header styles.js

import styled from 'styled-components'

export const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;

  header {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.75rem;
    box-sizing: border-box;

    a {
      display: block;
      padding: 0.5rem 1rem;
      box-sizing: border-box;
      background-color: #eee;
      font-weight: 600;
      border-radius: 10px;
    }
    a:hover {
      background-color: #ccc;
    }
    a.active {
      background-color: #3b82f6;
      color: #fff;
    }
  }
`
