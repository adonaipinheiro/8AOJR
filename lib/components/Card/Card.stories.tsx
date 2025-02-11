import React from "react";
import { Card, CardProps } from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    imagePath: { control: "text" },
    title: { control: "text" },
    overview: { control: "text" },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  imagePath: "https://image.tmdb.org/t/p/w342//342bly9MqveL65TnEFzx8TTUxcL.jpg",
  overview: "This is an overview of the card content.",
};

export const WithDifferentContent = Template.bind({});
WithDifferentContent.args = {
  title: "New Card Title",
  imagePath: "https://image.tmdb.org/t/p/w342//342bly9MqveL65TnEFzx8TTUxcL.jpg",
  overview: "Here is a new overview for a different card.",
};

export const LargeImage = Template.bind({});
LargeImage.args = {
  title: "Large Image Card",
  imagePath: "https://image.tmdb.org/t/p/w342//342bly9MqveL65TnEFzx8TTUxcL.jpg",
  overview: "This card features a larger image.",
};
