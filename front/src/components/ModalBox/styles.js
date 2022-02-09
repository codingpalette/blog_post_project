// ModalBox styles.js

import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  .content_box {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal_card {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 1rem;

    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }

    .modal_content {
      display: flex;
      flex-direction: column;
    }

    .btn_box {
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        flex: 1;
        padding: 0.5rem;
        box-sizing: border-box;
        border-radius: 4px;
        color: #fff;
      }

      .modify_btn {
        background-color: #3b82f6;
      }

      .close_btn {
        background-color: #94a3b8;
      }
    }
  }

  .modal_back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`
