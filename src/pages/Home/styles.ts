import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
`

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    background-color: #FFFFFF;
    height: 44px;
    padding: 0.5em;
    border-radius: 4px;
    color: #000;
    transition: opacity .2s ease;
    font-weight: bold;

    &:hover {
      opacity: 0.75;
    }
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  .menuTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  img {
    height: 36px;
    width: auto;
  }

  svg {
    cursor: pointer;
  }

  p {
    font-weight: bold;
  }
`
export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`
export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`

export const MovieInfo = styled.div`
  padding: 15px;

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 0.9em;
    color: #555;
    line-height: 1.5;
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-lines: 3;
  }
`

export const PaginationArea = styled.div<{page: number}>`
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

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
