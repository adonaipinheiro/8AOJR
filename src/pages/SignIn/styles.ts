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
`
export const Logo = styled.img`
  height: auto;
  width: 100px;
  user-select: none;
  pointer-events: none;
  align-self: center;
`;

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
