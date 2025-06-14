import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-acumin-condensed-bold uppercase transition-colors duration-300 rounded-sm',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white hover:bg-[#4697D8] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black',
        secondary: 'bg-[#003664] text-white hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#003664]',
        tertiary: 'bg-[#5492C3] text-white hover:bg-[#003664] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#5492C3]',
        outline: 'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black',
      },
      size: {
        sm: 'text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2',
        md: 'text-lg sm:text-xl px-4 sm:px-6 py-2 sm:py-2.5',
        lg: 'text-xl sm:text-2xl px-5 sm:px-6 py-2.5 sm:py-3',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      icon,
      iconPosition = 'left',
      children,
      href,
      target,
      rel,
      download,
      onClick,
      type = 'button',
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(buttonVariants({ variant, size, fullWidth, className }));

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          onClick={onClick}
          className={buttonClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...props}
        >
          {icon && iconPosition === 'left' && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2">{icon}</span>
          )}
        </a>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 