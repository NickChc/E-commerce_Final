import { SRegisterForm } from "@src/features/RegisterForm";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function RegisterForm() {
  const { setRegistering } = useGlobalProvider();

  return (
    <SRegisterForm>
      <div className="flex flex-col items-center ">
        <FormInput
          placeholder="NAME"
          value=""
          name=""
          onChange={() => {}}
          onFocus={() => {}}
        />

        <FormInput
          placeholder="SURNAME"
          value=""
          name=""
          onChange={() => {}}
          onFocus={() => {}}
        />
        <FormInput
          placeholder="EMAIL"
          value=""
          name=""
          onChange={() => {}}
          onFocus={() => {}}
        />
        <FormInput
          placeholder="PHONE NUMBER"
          value=""
          name=""
          onChange={() => {}}
          onFocus={() => {}}
        />
        <FormInput
          placeholder="PASSWORD"
          value=""
          name=""
          onChange={() => {}}
          onFocus={() => {}}
        />
        <FormInput
          placeholder="REPEAT PASSWORD"
          value=""
          name=""
          onChange={() => {}}
          onFocus={() => {}}
        />
        <SProductButton>REGISTER</SProductButton>
      </div>

      <div>
        <p>
          Already have an account?{" "}
          <a onClick={() => setRegistering(false)}>SIGN IN HERE!</a>
        </p>
      </div>
    </SRegisterForm>
  );
}
