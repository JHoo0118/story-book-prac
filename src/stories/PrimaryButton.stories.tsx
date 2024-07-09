import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from "../components/PrimiryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      //   control: {
      //     type: "select",
      //     options: ["dark", "light", "social", "text"],
      //   },
      control: "text",
      description: "버튼 테마",
      defaultValue: "dark",
    },
    children: {
      control: "text",
      description: "버튼 텍스트",
      defaultValue: "Button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "버튼 활성화 여부",
      defaultValue: false,
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    disabled: false,
    theme: "dark",
    children: "Button",
  },
};
export const Light: Story = {
  args: {
    disabled: false,
    theme: "light",
    children: "Button",
  },
};

export const Social: Story = {
  args: {
    disabled: false,
    theme: "social",
    children: "Button",
  },
};
export const Text: Story = {
  args: {
    disabled: false,
    theme: "text",
    children: "Button",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    theme: "dark",
    children: "Button",
  },
};
