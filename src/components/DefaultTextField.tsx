import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextField {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  errorMessage,
  iconPath,
  onIconClick,
  iconAlt,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: IDefaultTextField) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";
  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
