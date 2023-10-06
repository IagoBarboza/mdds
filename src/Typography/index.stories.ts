import { Typography } from "./index";

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
   align: { control: 'select' },
   variant: { control: 'select' },
  },
} satisfies Meta<typeof Typography>;

export default meta;

export const Default = {
  args: {
    align: 'inherit',
    children: 'Hello!',
    variant: 'body1',
  },
};