import { useState } from "react";
import {
  SLogInForm,
  SInputsWrapper,
  SFormContent,
} from "@src/features/LogInForm";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { logInDefaultValues } from "@src/mocks/defaultValues";
import { TLogInUser, TUserTokens } from "@src/@types/requestTypes";
import { publicAxios } from "@src/utils/publicAxios";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useValidateLogIn } from "@src/features/LogInForm/useValidateLogIn";

export function LogInForm() {
  const [logInFail, setLogInFail] = useState<string>("");
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [logInValues, setLogInValues] =
    useState<TLogInUser>(logInDefaultValues);

  const { email, password } = logInValues;

  const { setRegistering, setAuthModal, setPopUpText } = useGlobalProvider();
  const { setAuthData } = useAuthProvider();

  const { isValid, setIsValid, validateLogIn, setFormErrors, formErrors } =
    useValidateLogIn();

  function formInputChange(e: React.ChangeEvent<HTMLFormElement>) {
    setLogInValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setIsValid(true);
  }

  // LOGS IN USER

  async function onFinish(values: TLogInUser) {
    try {
      setLogInFail("");
      setLoggingIn(true);
      const response = await publicAxios.post("/auth/login", values);
      setAuthData(response.data as TUserTokens);

      // CHECK IF RESPONSE IS OK, IFSO CLOSE THE MODAL
      if (response && response.status >= 200 && response.status <= 299) {
        setAuthModal(false);
        setPopUpText("YOU HAVE SUCCESFULLY LOGGED IN! WELCOME BACK");
      }
    } catch (error: any) {
      console.log(error.message);
      if (
        error.response.data.message === "Unauthorized" ||
        error.response.data.message === "user not found"
      ) {
        setLogInFail("WRONG EMAIL OR PASSWORD!");
      }
    } finally {
      setLoggingIn(false);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) return;

    onFinish(logInValues);
  }

  return (
    <SLogInForm onSubmit={onSubmit}>
      <h3>
        SIGN IN OR REGISTER TO FULLY <br />
        EXPERIENCE OUR MARKET !
      </h3>
      <SFormContent>
        <SInputsWrapper>
          <FormInput
            error={formErrors.email}
            placeholder="EMAIL"
            name="email"
            value={email}
            onChange={formInputChange}
            onFocus={() =>
              setFormErrors((prev) => ({
                ...prev,
                email: "",
              }))
            }
          />

          <FormInput
            isPassword
            error={formErrors.password}
            placeholder="PASSWORD"
            name="password"
            value={password}
            onChange={formInputChange}
            onFocus={() =>
              setFormErrors((prev) => ({
                ...prev,
                password: "",
              }))
            }
          />
        </SInputsWrapper>

        <SInputsWrapper>
          {logInFail !== "" && <h4>{logInFail}</h4>}
          <SProductButton onClick={() => validateLogIn(logInValues)}>
            {loggingIn ? "LOGGING IN" : "LOG IN"}
          </SProductButton>
          <p>
            Don't have an account?{" "}
            <a onClick={() => setRegistering(true)}>SIGN UP HERE!</a>
          </p>
        </SInputsWrapper>
      </SFormContent>
    </SLogInForm>
  );
}
