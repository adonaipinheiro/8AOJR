import styled from "styled-components";

export const Container = styled.div<{page: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;

    &:disabled {
      cursor:default;
    }
  }

  .prevButton {
    visibility: ${({page}) => page === 1 ? "hidden" : "visible"};
  }

  .nextButton {
    visibility: ${({page}) => page === 500 ? "hidden" : "visible"};
  }

  .prevButton, .nextButton {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.25rem;
  }
`
