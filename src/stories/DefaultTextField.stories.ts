import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 경로",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드에 들어갈 문자열의 정보",
      defaultValue: "입력해주세요",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메시지",
      defaultValue: "",
    },
    onChange: {
      description: "입력 이벤트",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
    onIconClick: {
      action: "clicked",
      description: "아이콘 클릭 이벤트",
    },
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "",
    },
  },
  args: {
    onChange: fn(),
    onIconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: "/icons/ic-cancel.svg",
    placeholder: "텍스트를 입력해 주세요.",
    value: "",
    errorMessage: "텍스트를 확인해 주세요",
    isError: false,
  },
};
