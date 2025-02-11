import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";
import { DSTypography_Button } from "../../utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  buttonStyle: "primary" | "outlined" | "flat";
}

export function Button({ text, leftIcon, rightIcon, ...props }: ButtonProps) {
  return (
    <Container aria-label={text} aria-disabled={props.disabled} {...props}>
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      <DSTypography_Button>{text}</DSTypography_Button>
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </Container>
  );
}
