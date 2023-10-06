import { TextField as MUITextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'outlined' | 'standard' | 'filled';
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The label content.
   *
   */
  label?: React.ReactNode;
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode;
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error?: boolean;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline?: boolean;
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required?: boolean;
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: string | number;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: string | number;
}

export const TextField: React.FC<Props> = (props) => {
  return (
    <MUITextField
      {...props}
      onChange={
        props.onChange as ChangeEventHandler<
          HTMLInputElement | HTMLTextAreaElement
        >
      }
    />
  );
};
