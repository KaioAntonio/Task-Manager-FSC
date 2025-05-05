import PropTypes from 'prop-types';

const InputErrorMessage = ({ children }) => {
  return <p className="mt-1 text-left text-xs text-red-500">{children}</p>;
};

InputErrorMessage.propType = {
  children: PropTypes.node.isRequired,
};

export default InputErrorMessage;
