import React from "react";

type TextBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  label?: string;
  placeholder?: string;
  error?: string;
};

export const TextBox: React.FC<TextBoxProps> = ({
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  error,
}) => {
  const [inputValue, setInputValue] = React.useState<string>(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const innerBoxShadowStyle = {
    boxShadow: "inset 0 0 0 1px #eeeeee",
  };

  const inputValueHasError = error && error !== "";

  const inputClasses = `border rounded-lg px-1 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    inputValueHasError ? "border-red-300 border-1 ring-2" : ""
  }`;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm">{label}</label>}
      <input
        className={inputClasses}
        style={innerBoxShadowStyle}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {inputValueHasError && (
        <div className="text-red-300 text-sm">{error}</div>
      )}
    </div>
  );
};
