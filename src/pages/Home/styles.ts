import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
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
    cursor: pointer;
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

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
