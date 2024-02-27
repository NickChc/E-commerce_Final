import { useState } from "react";
import { EyeIcon } from "@src/assets/icons";
import {
  SFormInpuLabel,
  SFormInput,
  SFormSpan,
  STogglePassword,
} from "@src/components/FormInput";

interface FormInputProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
  onFocus: (e: any) => void;
  label?: string;
  error?: string;
  isPassword?: boolean;
  autoComplete?: string;
}

export function FormInput({
  placeholder,
  value,
  name,
  onChange,
  onFocus,
  error,
  isPassword,
  autoComplete,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SFormInpuLabel>
      <SFormSpan>
        <SFormInput
          autoComplete={autoComplete}
          error={error !== ""}
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
        />
        {isPassword && (
          <STogglePassword
            showPassword={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeIcon />
          </STogglePassword>
        )}
        {error !== "" && <p className="text-[red]">{error}</p>}
      </SFormSpan>
    </SFormInpuLabel>
  );
}
