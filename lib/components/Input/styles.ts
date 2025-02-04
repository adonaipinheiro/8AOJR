import styled from "styled-components";
import { InputProps } from ".";
import {DSColors, DSCornerRadius, DSSpacings} from "../../utils"

export const Container = styled.div<Pick<InputProps, "errorMessage">>`
  display: flex;
  flex-direction: column;
  gap: ${DSSpacings.s1};

  input {
    height: 44px;
    padding: ${DSSpacings.s2};
    border-radius: ${DSCornerRadius.r1};

    border: ${({errorMessage}) =>
      errorMessage ? `solid 2px ${DSColors.error.dark}`
        : `solid 1px ${DSColors.black[100]}`
    }
  }

  small {
    color: ${DSColors.error.dark};
  }
`
