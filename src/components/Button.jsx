const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00ADB5] text-white';
    }
    if (variant === 'secondary') {
      return 'bg-[#EEEEEE] text-[#35383E]';
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }
  };

  const getVariantSizeClasses = () => {
    if (size === 'small') {
      return 'py-1 text-xs';
    }
    if (size === 'large') {
      return 'py-3 text-sm';
    }
  };

  return (
    <button
      {...rest}
      className={`${className} flex items-center justify-center gap-2 rounded-lg px-3 font-semibold transition hover:opacity-70 ${getVariantClasses()} ${getVariantSizeClasses()}`}
    >
      {children}
    </button>
  );
};

export default Button;
