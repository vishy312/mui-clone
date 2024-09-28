import React from 'react';

interface InputProps {
  name?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
  inputValue?: string;
  defaultValue?:  string;
  onChange: () => void
}

export const TextInput = ({
  name,
  isDisabled = false,
  isHidden = false,
  inputValue = "",
  defaultValue = "",
  onChange,
  ...props
}: InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
  return (
    <input
    type="text"
    name=""
    disabled={isDisabled}
    hidden={isHidden}
    value={inputValue}
    defaultValue={defaultValue}
    onChange={onChange}
    ref={ref}
  />
  );
};

// export default React.forwardRef<HTMLInputElement>(TextInput);
