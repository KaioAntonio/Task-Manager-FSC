import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import InputErrorMessage from './InputErrorMessage';
import InputLabel from './InputLabel';

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="spacey-y-1 flex flex-col text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="border-brand-border-solid rounded-lg border border-solid px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
      ></input>
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default Input;
