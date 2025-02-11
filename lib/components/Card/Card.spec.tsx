import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from ".";
import React from "react";

describe("@components/Card", () => {
  const imagePath = "path/to/image.jpg";
  const title = "Card Title";
  const overview = "This is an overview of the card content.";

  it("should render the Card component correctly", () => {
    render(<Card title={title} imagePath={imagePath} overview={overview} />);

    const image = screen.getByAltText(`${title} image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", imagePath);

    const cardTitle = screen.getByRole("heading", { name: title });
    expect(cardTitle).toBeInTheDocument();

    const cardOverview = screen.getByText(overview);
    expect(cardOverview).toBeInTheDocument();
  });

  it("should check image has aria-hidden attribute", () => {
    render(<Card title={title} imagePath={imagePath} overview={overview} />);

    const image = screen.getByAltText(`${title} image`);
    expect(image).toHaveAttribute("aria-hidden", "true");
  });

  it("should check correct role and aria-labelledby attribute", () => {
    render(<Card title={title} imagePath={imagePath} overview={overview} />);

    const container = screen.getByRole("article");
    expect(container).toBeInTheDocument();

    expect(container).toHaveAttribute("aria-labelledby", title);
  });

  it("should render with a different title and overview", () => {
    const newTitle = "New Card Title";
    const newOverview = "This is a new overview for a different card.";

    render(
      <Card title={newTitle} imagePath={imagePath} overview={newOverview} />
    );

    const newCardTitle = screen.getByRole("heading", { name: newTitle });
    expect(newCardTitle).toBeInTheDocument();

    const newCardOverview = screen.getByText(newOverview);
    expect(newCardOverview).toBeInTheDocument();
  });

  it("should match to snapshot", () => {
    const { asFragment } = render(
      <Card title={title} imagePath={imagePath} overview={overview} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
