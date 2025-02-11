import styled from "styled-components";
import { DSColors, DSCornerRadius } from "../../utils";

export const Container = styled.div`
  background-color: ${DSColors.white[100]};
  border-radius: ${DSCornerRadius.r2};
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

export const CardInfo = styled.div`
  padding: 15px;

  h3 {
    margin-bottom: 10px;
    color: ${DSColors.black[100]};
  }

  p {
    color: ${DSColors.black[75]};
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-lines: 3;
  }
`
