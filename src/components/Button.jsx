import { tv } from 'tailwind-variants';

const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}) => {
  const button = tv({
    base: 'flex items-center justify-center gap-2 rounded-lg px-3 font-semibold transition hover:opacity-75',
    variants: {
      color: {
        primary: 'bg-brand-primary text-white',
        ghost: 'bg-transparent text-brand-dark-gray',
        secondary: 'text-brand-dark-blu bg-brand-light-gray',
      },
      size: {
        small: 'py-1 text-xs',
        large: 'py-3 text-sm',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'small',
    },
  });

  return (
    <button
      {...rest}
      className={button({ color: variant, size: size, className })}
    >
      {children}
    </button>
  );
};

export default Button;
