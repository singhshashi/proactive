import React from "react";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

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
  const theme = useProactiveTheme();
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

  const inputValueHasError = error && error !== "";

  const innerBoxShadowStyle: React.CSSProperties = {
    boxShadow: `inset 0 0 0 1px ${theme.textBox.insetBorder}`,
    borderColor: inputValueHasError ? theme.textBox.errorBorder : theme.textBox.border,
    ["--proactive-textbox-focus-ring" as string]: theme.textBox.focusRing,
  };

  const inputClasses = `border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--proactive-textbox-focus-ring)] ${
    inputValueHasError ? "border-1 ring-2" : ""
  }`;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm" style={{ color: theme.text.primary }}>{label}</label>}
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
        <div className="text-sm" style={{ color: theme.text.error }}>{error}</div>
      )}
    </div>
  );
};
