import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "360px",
          border: "1px solid red",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDark: {
      control: "boolean",
      description: "다크모드 여부",
      defaultValue: false,
    },
    title: {
      control: "text",
      description: "페이지 제목",
    },
    showBackButton: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "뒤로가기 버튼 표시 여부",
    },
    showCancelButton: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "닫기 버튼 표시 여부",
    },
    onBackButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCancelButtonClick: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
  args: {
    onBackButtonClick: fn(),
    onCancelButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    title: "타이틀",
    showBackButton: true,
    showCancelButton: true,
    showTitle: true,
  },
};
