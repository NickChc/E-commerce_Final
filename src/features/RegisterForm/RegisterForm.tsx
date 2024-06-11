import { useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import {
  SRegisterForm,
  SInputsWrapper,
  SFooterText,
} from "@src/features/RegisterForm";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { TRegisterUser, TUserTokens } from "@src/@types/requestTypes";
import { registerDefaultValues } from "@src/mocks/defaultValues";
import { useValidateRegister } from "@src/features/RegisterForm";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { checkPhoneNumber } from "@src/utils/checkPhoneNumber";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { publicAxios } from "@src/utils/publicAxios";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function RegisterForm() {
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authFail, setAuthFail] = useState<string>("");
  const [registerValues, setRegisterValues] = useState<TRegisterUser>(
    registerDefaultValues
  );

  const {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    "repeat-password": repeatPassword,
  } = registerValues;

  const { formatMessage } = useIntl();

  const { setRegistering, setAuthModal } = useGlobalProvider();

  const { locale } = useLocaleProvider();

  const { setAuthData } = useAuthProvider();

  const { isValid, setIsValid, validateRegister, setFormErrors, formErrors } =
    useValidateRegister();

  function formInputChange(e: React.ChangeEvent<HTMLFormElement>) {
    setIsValid(true);

    setRegisterValues((prev) => {
      if (
        e.target.name === "phone_number" &&
        e.target.value.replace(/ /gi, "").length <= 9 &&
        checkPhoneNumber(e.target.value)
      ) {
        return { ...prev, [e.target.name]: e.target.value };
      } else if (e.target.name !== "phone_number") {
        return { ...prev, [e.target.name]: e.target.value };
      } else {
        return { ...prev };
      }
    });
  }

  //   SENDS REQUEST FOR AUTHORIZING USER AND MANAGES CHANGES AFTER THAT
  async function onFinish(values: TRegisterUser) {
    try {
      setAuthLoading(true);
      setAuthFail("");
      const response = await publicAxios.post("/auth/register", {
        ...values,
        phone_number: values.phone_number.replace(/ /gi, ""),
      });
      //   CHECKS IF RESPONSE IS OK, CLOSE MODAL IF SO
      if (response && response.status >= 200 && response.status <= 299) {
        setAuthModal(false);
      }
      setAuthData(response.data as TUserTokens);
      setRegisterValues(registerDefaultValues);
    } catch (error: any) {
      console.log(error.message);
      if (
        error.response.data.message ===
        'duplicate key value violates unique constraint "UQ_17d1817f241f10a3dbafb169fd2"'
      ) {
        setAuthFail(
          formatMessage({
            id: "usedPhone",
            defaultMessage: "_USED_PHONE_NUMBER_",
          })
        );
      } else if (
        error.response.data.message ===
        'duplicate key value violates unique constraint "UQ_97672ac88f789774dd47f7c8be3"'
      ) {
        setAuthFail(
          formatMessage({
            id: "usedEmail",
            defaultMessage: "_USED_EMAIL_ADDRESS_",
          })
        );
      }
    } finally {
      setAuthLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) return;

    onFinish(registerValues);
  }

  return (
    <SRegisterForm onSubmit={onSubmit}>
      <SInputsWrapper>
        <FormInput
          error={formErrors.first_name}
          placeholder={formatMessage({ id: "name", defaultMessage: "_NAME_" })}
          value={first_name}
          name="first_name"
          onChange={formInputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              first_name: "",
            }))
          }
        />

        <FormInput
          error={formErrors.last_name}
          placeholder={formatMessage({
            id: "surname",
            defaultMessage: "_SURNAME_",
          })}
          value={last_name}
          name="last_name"
          onChange={formInputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              last_name: "",
            }))
          }
        />
        <FormInput
          error={formErrors.email}
          placeholder={formatMessage({
            id: "email",
            defaultMessage: "_EMAIL_",
          })}
          value={email}
          name="email"
          onChange={formInputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              email: "",
            }))
          }
        />
        <FormInput
          error={formErrors.phone_number}
          placeholder={formatMessage({
            id: "phone",
            defaultMessage: "_PHONE_NUMBER_",
          })}
          value={phone_number}
          name="phone_number"
          onChange={formInputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              phone_number: "",
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
          value={password}
          name="password"
          onChange={formInputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              password: "",
            }))
          }
        />
        <FormInput
          isPassword
          error={formErrors["repeat-password"]}
          placeholder={formatMessage({
            id: "repeatPassword",
            defaultMessage: "_REPEAT_PASSWORD_",
          })}
          value={repeatPassword}
          name="repeat-password"
          onChange={formInputChange}
          onFocus={() =>
            setFormErrors((prev) => ({
              ...prev,
              "repeat-password": "",
            }))
          }
        />
        {authFail !== "" && <h4>{authFail}</h4>}
        <SProductButton
          disabled={authLoading}
          onClick={() => validateRegister(registerValues)}
        >
          {authLoading ? (
            <>
              <FormattedMessage
                id="registering"
                defaultMessage={"_REGISTERING_"}
              />
              <LoadingCircleAnim isSpan />
            </>
          ) : (
            <FormattedMessage id="register" defaultMessage={"_REGISTER_"} />
          )}
        </SProductButton>
      </SInputsWrapper>

      <SFooterText>
        {locale === TLocale_Enum.EN ? (
          <p>
            Already have an account?{" "}
            <a onClick={() => setRegistering(false)}>SIGN IN HERE!</a>
          </p>
        ) : locale === TLocale_Enum.KA ? (
          <p>
            ხარ ავტორიზირებული?{" "}
            <a onClick={() => setRegistering(false)}>სცადე შესვლა აქ!</a>
          </p>
        ) : null}
      </SFooterText>
    </SRegisterForm>
  );
}
