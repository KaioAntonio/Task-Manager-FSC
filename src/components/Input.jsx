import InputLabel from './InputLabel';

const Input = ({ label, errorMessage, ...rest }) => {
  return (
    <div className="spacey-y-1 flex flex-col text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
      ></input>
      {errorMessage && (
        <p className="mt-1 text-left text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
