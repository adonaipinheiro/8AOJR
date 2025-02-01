import styled from "styled-components";
import { commonFlexPageStyle } from "../../styles/globalStyles";

export const Container = styled.div`
  ${commonFlexPageStyle}
`

export const SignInArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 1em;
  border-radius: 8px;
  background-color: #FFF;
  gap: 1rem;

  label {
    margin-bottom: .5rem;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    margin-top: .5rem;
    font-size: 14px;
    font-weight: bold;
    color: red;
  }

  .input {
    display: flex;
    flex-direction: column;

    input {
      height: 44px;
      padding: 10px;
      border-radius: 4px;
      border-width: 1px;
    }
  }

  img {
    height: auto;
    width: 100px;
    user-select: none;
    pointer-events: none;
    align-self: center;
  }
`
export const Button = styled.button`
  background-color: #F21062;
  height: 44px;
  padding: 0.5em;
  border-radius: 4px;
  color: #000;
  transition: opacity .2s ease;
  font-weight: bold;

  &:hover {
    opacity: 0.75;
  }
`
