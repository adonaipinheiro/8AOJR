import styled from "styled-components";
import { DSColors, DSCornerRadius, DSSpacings } from "../../utils";
import { ButtonProps } from ".";

export const Container = styled.button<Pick<ButtonProps, "buttonStyle">>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${DSColors.primary[900]};
  height: 44px;
  padding: ${DSSpacings.s2};
  border-radius: ${DSCornerRadius.r1};
  transition: opacity .2s ease;
  color: ${DSColors.black[100]};

  &:hover {
    opacity: 0.75;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
