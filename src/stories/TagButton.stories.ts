import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagButton from "../components/TagButton";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 텍스트",
      defaultValue: "Button",
    },
    isChecked: {
      control: { type: "boolean" },
      description: "버튼의 옵션이 선택되었는지 여부",
      defaultValue: true,
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveButton: Story = {
  args: {
    children: "Button",
    isChecked: true,
  },
};

export const InactiveButton: Story = {
  args: {
    children: "Button",
    isChecked: false,
  },
};
