import React from 'react';
import { forwardRef, type ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../utils/index';

const checkboxStyles = cva(
  [
    'border',
    "border-primary",
  ],
  {
    variants: {
      color: {
        primary: 'accent-primary',
        secondary: 'accent-secondary',
        danger: 'accent-danger',
        success: 'accent-success',
        info: 'accent-info',
        warning: 'accent-warning',
      },
    },
  }
);

type CheckboxProps = ComponentProps<'input'> & VariantProps<typeof checkboxStyles>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(checkboxStyles({ color, className }))}
        {...props}
      />
    );
  }
);

export default Checkbox;
