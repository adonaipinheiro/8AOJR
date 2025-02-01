import styled from "styled-components";
import { commonFlexPageStyle } from "../../styles/globalStyles";

export const Container = styled.div`
  ${commonFlexPageStyle}

  user-select: none;
  gap: 12px;

  img {
    height: 100px;
    width: auto;
    pointer-events: none;
  }
`;

export const Button = styled.button`
  background-color: #FFF;
  min-width: 80px;
  padding: 10px;
  border-radius: 4px;

  font-weight: bold;
  font-size: 16px;
  transition: opacity .2s ease;

  &:hover {
    opacity: 0.75;
  }
`;
