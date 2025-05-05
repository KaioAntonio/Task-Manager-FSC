import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

const SidebarButton = ({ children, variant }) => {
  const sidebar = tv({
    base: 'flex items-center gap-2 rounded-lg px-6 py-3',
    variants: {
      color: {
        selected: 'bg-brand-primary bg-opacity-25 text-brand-primary',
        unselected: 'text-brand-dark-blue',
      },
    },
  });

  return (
    <a href="/home" className={sidebar({ color: variant })}>
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['selected', 'unselected']),
};

export default SidebarButton;
