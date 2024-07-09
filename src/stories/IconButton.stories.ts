import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: {
      control: "text",
      description: "icon path",
      defaultValue: "/icons/ic-cancel.svg",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "아이콘 크기",
      defaultValue: "small",
    },
    onClick: {
      action: "clicked",
      description: "아이콘 클릭 이벤트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import DeleteIcon from "../assets/icons/ic-cancel.svg";

export const SmallSize: Story = {
  args: {
    alt: "icon",
    size: "small",
    iconPath: DeleteIcon,
  },
};

export const MediumSize: Story = {
  args: {
    alt: "icon",
    size: "medium",
    iconPath: "/icons/ic-cancel.svg",
  },
};

export const LargeSize: Story = {
  args: {
    alt: "icon",
    size: "large",
    iconPath: "/icons/ic-cancel.svg",
  },
};
