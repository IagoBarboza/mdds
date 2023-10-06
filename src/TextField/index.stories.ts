import { TextField } from './index';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select' },
    color: { control: 'select' },
    size: { control: 'select' },
    disabled: {
      description: 'If `true`, the component is disabled',
      defaultValue: {
        summary: 'false',
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

export const Default = {
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    label: 'Label',
    helperText: "",
    error: false,
    fullWidth: false,
    multiline: false,
    required: false,
    disabled: false,
    rows: 1,
    minRows: 1,
    maxRows: 1,
  },
};
