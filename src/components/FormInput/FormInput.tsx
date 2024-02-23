import {
  SFormInpuLabel,
  SFormInput,
  SFormSpan,
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
}

export function FormInput({
  placeholder,
  value,
  name,
  onChange,
  onFocus,
  error,
  isPassword,
}: FormInputProps) {
  return (
    <SFormInpuLabel>
      <SFormSpan>
        <SFormInput
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
        />
      </SFormSpan>
    </SFormInpuLabel>
  );
}
