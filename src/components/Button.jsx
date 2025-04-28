const Button = ({ children, variant = 'primary', ...rest }) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00ADB5] text-white';
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }
  };

  return (
    <button
      {...rest}
      className={`flex items-center gap-2 rounded-lg px-6 py-3 text-xs font-semibold transition hover:opacity-70 ${getVariantClasses()}`}
    >
      {children}
    </button>
  );
};

export default Button;
