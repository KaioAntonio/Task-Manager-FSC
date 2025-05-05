import { forwardRef } from 'react';

import InputLabel from './InputLabel';

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="spacey-y-1 flex flex-col text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
        ref={ref}
      ></input>
      {errorMessage && (
        <p className="mt-1 text-left text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
