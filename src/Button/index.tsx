import { Button as MUIButton} from "@mui/material";
import React from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: 'text' | 'outlined' | 'contained'
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * The color of the component.
   * It supports both default and custom theme colors.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string
  /**
   * The Icon component to be displayed before the label
   */
  startIcon?: React.ReactNode;
  /**
   * The Icon component to be displayed after the label
   */
  endIcon?: React.ReactNode;
}

export const Button: React.FC<Props> = (props) => {
  return <MUIButton {...props} />;
};