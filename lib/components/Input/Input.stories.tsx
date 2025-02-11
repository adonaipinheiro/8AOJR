import React from "react";
import { Input, InputProps } from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    onChange: { action: "changed" },
    errorMessage: { control: "text" },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  id: "username",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Username",
  id: "username",
  errorMessage: "Username is required",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Username",
  id: "username",
  disabled: true,
};

export const WithLongLabel = Template.bind({});
WithLongLabel.args = {
  label:
    "This is a very long label for the input field to see how it behaves in different situations",
  id: "long-label",
};
