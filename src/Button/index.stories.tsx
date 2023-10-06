import ArrowBack from '../Icons/ArrowBack';
import ArrowForward from '../Icons/ArrowForward';
import { Button } from './index';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the component',
    },
    color: {
      control: 'select',
    },
    disabled: {
      description: 'If `true`, the component is disabled',
      defaultValue: {
        summary: 'false'
      }
    },
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

const StartIcon = <ArrowBack />
const EndIcon = <ArrowForward />

export const Default = {
  args: {
    children: 'Click me!',
    variant: 'text',
    size: 'medium',
    color: 'primary',
    disabled: false,
    startIcon: StartIcon,
    endIcon: EndIcon,
  },
};
