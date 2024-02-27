import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
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
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useValidateLogIn } from "@src/features/LogInForm/useValidateLogIn";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function LogInForm() {
  const [logInFail, setLogInFail] = useState<string>("");
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [logInValues, setLogInValues] =
    useState<TLogInUser>(logInDefaultValues);

  const { email, password } = logInValues;

  const { setRegistering, setAuthModal, setPopUpText } = useGlobalProvider();
  const { setAuthData } = useAuthProvider();
  const { locale } = useLocaleProvider();

  const { formatMessage } = useIntl();

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
        setPopUpText(
          formatMessage({
            id: "logInSuccess",
            defaultMessage: "_YOU_HAVE_SUCCESFULLY_LOGGED_IN!_WELCOME_BACK_",
          })
        );
      }
    } catch (error: any) {
      console.log(error.message);
      if (
        error.response.data.message === "Unauthorized" ||
        error.response.data.message === "user not found"
      ) {
        setLogInFail(
          formatMessage({
            id: "wrongEmailOrPassword",
            defaultMessage: "_WRONG_EMAIL_OR_PASSWORD_",
          })
        );
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
      {locale === TLocale_Enum.EN ? (
        <h3>
          SIGN IN OR REGISTER TO FULLY <br />
          EXPERIENCE OUR MARKET !
        </h3>
      ) : locale === TLocale_Enum.KA ? (
        <h3>
          გაიარეთ ავტორიზაცია და მიიღეთ <br />
          მაღაზიის სრულყოფილი გამოცდილება !
        </h3>
      ) : null}
      <SFormContent>
        <SInputsWrapper>
          <FormInput
            error={formErrors.email}
            placeholder={formatMessage({
              id: "email",
              defaultMessage: "_EMAIL_",
            })}
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
            placeholder={formatMessage({
              id: "password",
              defaultMessage: "_PASSWORD_",
            })}
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
            {loggingIn ? (
              <>
                <FormattedMessage
                  id="loggingIn"
                  defaultMessage={"_LOGGING_IN_"}
                />{" "}
                <SLoadingCircleAnim />
              </>
            ) : (
              <FormattedMessage id="logIn" defaultMessage={"_LOG_IN_"} />
            )}
          </SProductButton>
          {locale === TLocale_Enum.EN ? (
            <p>
              Don't have an account?{" "}
              <a onClick={() => setRegistering(true)}>SIGN UP HERE!</a>
            </p>
          ) : locale === TLocale_Enum.KA ? (
            <p>
              არ ხარ ავტორიზირებული? <br />
              <a onClick={() => setRegistering(true)}>დარეგისტრირდი აქ!</a>
            </p>
          ) : null}
        </SInputsWrapper>
      </SFormContent>
    </SLogInForm>
  );
}
