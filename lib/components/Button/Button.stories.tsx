import React from "react";
import { Button, ButtonProps } from ".";
import { Meta, StoryFn } from "@storybook/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonStyle: {
      control: { type: "select" },
      options: ["primary", "outlined", "flat"],
    },
    disabled: { control: "boolean" },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  buttonStyle: "primary",
  onClick: action("button-click"),
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: "Outlined Button",
  buttonStyle: "outlined",
  onClick: action("button-click"),
};

export const Flat = Template.bind({});
Flat.args = {
  text: "Flat Button",
  buttonStyle: "flat",
  onClick: action("button-click"),
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  text: "Button with Icons",
  buttonStyle: "primary",
  leftIcon: <FaArrowLeft />,
  rightIcon: <FaArrowRight />,
  onClick: action("button-click"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  buttonStyle: "primary",
  disabled: true,
  onClick: action("button-click"),
};
