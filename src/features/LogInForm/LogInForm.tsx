import {
  SLogInForm,
  SInputsWrapper,
  SFormContent,
} from "@src/features/LogInForm";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function LogInForm() {
  const { setRegistering } = useGlobalProvider();

  return (
    <SLogInForm>
      <h3>
        SIGN IN OR REGISTER TO FULLY EXPERIENCE <br /> OUR MARKET !
      </h3>
      <SFormContent>
        <SInputsWrapper>
          <FormInput
            placeholder="EMAIL"
            name="email"
            value=""
            onChange={() => {}}
            onFocus={() => {}}
          />

          <FormInput
            placeholder="PASSWORD"
            name="password"
            value=""
            onChange={() => {}}
            onFocus={() => {}}
          />
        </SInputsWrapper>

        <SInputsWrapper>
          <SProductButton>LOG IN</SProductButton>
          <p>
            Don't have an account?{" "}
            <a onClick={() => setRegistering(true)}>SIGN UP HERE!</a>
          </p>
        </SInputsWrapper>
      </SFormContent>
    </SLogInForm>
  );
}
