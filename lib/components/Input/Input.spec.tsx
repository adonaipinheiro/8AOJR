import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from ".";
import React from "react";

describe("@components/Input", () => {
  it("should renders input with label", () => {
    render(<Input label="Username" id="username" />);

    const label = screen.getByText(/Username/i);
    expect(label).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should renders input with error message", () => {
    render(
      <Input
        label="Username"
        id="username"
        errorMessage="Username is required"
      />
    );

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent("Username is required");

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("should has aria-describedby when there is an error", () => {
    render(
      <Input
        label="Username"
        id="username"
        errorMessage="Username is required"
      />
    );

    const input = screen.getByRole("textbox");
    const errorMessage = screen.getByRole("alert");

    expect(input).toHaveAttribute("aria-describedby", errorMessage.id);
  });

  it("should not render error message when no error is passed", () => {
    render(<Input label="Username" id="username" />);

    const errorMessage = screen.queryByRole("alert");
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should match to snapshot", () => {
    const { asFragment } = render(<Input label="Username" id="username" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
