import { forwardRef } from 'react';

import InputErrorMessage from './InputErrorMessage';
import InputLabel from './InputLabel';

const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        className="outline-brand-primary placeholder:text-brand-text-gray border--border rounded-lg border border-solid bg-white px-4 py-3 placeholder:text-sm"
        {...props}
        ref={ref}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {props.errorMessage && (
        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
    </div>
  );
});

TimeSelect.displayName = 'TimeSelect';

export default TimeSelect;
