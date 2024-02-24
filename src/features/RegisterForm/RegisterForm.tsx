import { useState } from "react";
import { SRegisterForm } from "@src/features/RegisterForm";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { TUserData, TUserTokens } from "@src/@types/requestTypes";
import { registerDefaultValues } from "@src/mocks/defaultValues";
import { useValidateRegister } from "@src/features/RegisterForm";
import { checkPhoneNumber } from "@src/utils/checkPhoneNumber";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { publicAxios } from "@src/utils/publicAxios";

export function RegisterForm() {
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authFail, setAuthFail] = useState<string>("");
  const [registerValues, setRegisterValues] = useState<TUserData>(
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

  const { setRegistering, setAuthModal } = useGlobalProvider();

  const { setAuthData } = useAuthProvider();

  const { isValid, setIsValid, validateRegister, formErrors } =
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
  async function onFinish(values: TUserData) {
    try {
      setAuthLoading(true);
      setAuthFail("");
      const response = await publicAxios.post("/auth/register", {
        ...values,
        phone_number: values.phone_number.replace(/ /gi, ""),
      });
      //   CHECKS IF RESPONSE IS OK
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
        setAuthFail("THIS PHONE NUMBER IS ALREADY USED!");
      } else if (
        error.response.data.message ===
        'duplicate key value violates unique constraint "UQ_97672ac88f789774dd47f7c8be3"'
      ) {
        setAuthFail("THIS EMAIL IS ALREADY USED!");
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
      <div className="flex flex-col items-center ">
        <FormInput
          error={formErrors.first_name}
          placeholder="NAME"
          value={first_name}
          name="first_name"
          onChange={formInputChange}
          onFocus={() => (formErrors.first_name = "")}
        />

        <FormInput
          error={formErrors.last_name}
          placeholder="SURNAME"
          value={last_name}
          name="last_name"
          onChange={formInputChange}
          onFocus={() => (formErrors.last_name = "")}
        />
        <FormInput
          error={formErrors.email}
          placeholder="EMAIL"
          value={email}
          name="email"
          onChange={formInputChange}
          onFocus={() => (formErrors.email = "")}
        />
        <FormInput
          error={formErrors.phone_number}
          placeholder="PHONE NUMBER"
          value={phone_number}
          name="phone_number"
          onChange={formInputChange}
          onFocus={() => (formErrors.phone_number = "")}
        />
        <FormInput
          isPassword
          error={formErrors.password}
          placeholder="PASSWORD"
          value={password}
          name="password"
          onChange={formInputChange}
          onFocus={() => (formErrors.password = "")}
        />
        <FormInput
          isPassword
          error={formErrors["repeat-password"]}
          placeholder="REPEAT PASSWORD"
          value={repeatPassword}
          name="repeat-password"
          onChange={formInputChange}
          onFocus={() => (formErrors["repeat-password"] = "")}
        />
        {authFail !== "" && <h4>{authFail}</h4>}
        <SProductButton onClick={() => validateRegister(registerValues)}>
          {authLoading ? "REGISTERING..." : "REGISTER"}
        </SProductButton>
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
