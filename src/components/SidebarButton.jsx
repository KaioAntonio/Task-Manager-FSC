const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'selected') {
      return 'bg-brand-primary bg-opacity-25 text-brand-primary';
    }
    if (variant === 'unselected') {
      return 'text-brand-dark-blue';
    }
  };

  return (
    <a
      href="/home"
      className={`${getVariantClasses()} flex items-center gap-2 rounded-lg px-6 py-3`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
