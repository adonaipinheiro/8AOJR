import React from "react";
import { Container } from "./styles";
import { InputHTMLAttributes } from "react";
import { DSTypography_Button, DSTypography_Small } from "../../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  errorMessage?: string;
}

export function Input({ label, errorMessage, id, ...props }: InputProps) {
  const errorId = errorMessage ? `${id}-error` : undefined;

  return (
    <Container errorMessage={errorMessage}>
      <label htmlFor={id}>
        <DSTypography_Button>{label}</DSTypography_Button>
      </label>
      <input
        id={id}
        name={id}
        aria-describedby={errorId}
        aria-invalid={!!errorMessage}
        {...props}
      />
      {errorMessage && (
        <DSTypography_Small id={errorId} role="alert">
          * {errorMessage}
        </DSTypography_Small>
      )}
    </Container>
  );
}
