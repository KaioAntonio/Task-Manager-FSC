import { forwardRef } from 'react';

import InputErrorMessage from './InputErrorMessage';
import InputLabel from './InputLabel';

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="spacey-y-1 flex flex-col text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="outline-brand-primary placeholder:text-brand-text-gray border-brand-border-solid rounded-lg border border-solid px-4 py-3 placeholder:text-sm"
        ref={ref}
      ></input>
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
