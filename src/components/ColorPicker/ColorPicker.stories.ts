import { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta = {
  title: 'ColorPicker',
  component: ColorPicker,
  argTypes: {
    size: {
      options: ['small', 'medium', 'full'],
      control: { type: 'select' },
      defaultValue: 'small',
    },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { color: '#6366F1' },
};

export const Popover: Story = {
  args: { color: '#6366F1', popover: true },
};
