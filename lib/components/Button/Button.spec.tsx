import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button, ButtonProps } from ".";

const renderButton = (props?: Partial<ButtonProps>) => {
  return render(<Button text="Entrar" buttonStyle="primary" {...props} />);
};

describe("@components/Button", () => {
  it("should render the button with the correct text", () => {
    renderButton();
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
  });

  it("should render with left and right icons", () => {
    renderButton({
      leftIcon: <span data-testid="left-icon">L</span>,
      rightIcon: <span data-testid="right-icon">R</span>,
    });
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("should call onClick handler when clicked", () => {
    const onClick = vi.fn();
    renderButton({ onClick });
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when the disabled prop is set", () => {
    renderButton({ disabled: true });
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should have correct aria attributes", () => {
    renderButton({ disabled: true });
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("should match to snapshot", () => {
    const { asFragment } = renderButton();
    expect(asFragment()).toMatchSnapshot();
  });
});
