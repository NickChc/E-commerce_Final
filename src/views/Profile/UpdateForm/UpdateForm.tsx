import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { privateAxios } from "@src/utils/privateAxios";
import { SUpdateForm } from "@src/views/Profile/UpdateForm";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useValidateUpdate } from "@src/views/Profile/UpdateForm/useValidateUpdate";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";


interface UpdateFormProps {
  formValues: TChangeableUserData;
  setFormValues: React.Dispatch<React.SetStateAction<TChangeableUserData>>;
  updateFail: string;
  setUpdateFail: React.Dispatch<React.SetStateAction<string>>;
  currentEdit: keyof TChangeableUserData | undefined;
  setCurrentEdit: React.Dispatch<
    React.SetStateAction<keyof TChangeableUserData | undefined>
  >;
}

export function UpdateForm({
  formValues,
  setFormValues,
  updateFail,
  setUpdateFail,
  currentEdit,
  setCurrentEdit,
}: UpdateFormProps) {
  const { isValid, setIsValid, formErrors, setFormErrors, validateUpdate } =
    useValidateUpdate();

  const { getUser } = useAuthProvider();

  const { locale } = useLocaleProvider();

  const [updating, setUpdating] = useState(false);

  function inputChange(e: React.ChangeEvent<HTMLFormElement>) {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsValid(true);
  }

  // UPDATE USERS VALUE
  async function updateUser(value: TChangeableUserData) {
    try {
      setUpdateFail("");
      setUpdating(true);
      if (!currentEdit) return;
      const updatedData = { [currentEdit]: value[currentEdit] };
      const response = await privateAxios.put("/user", updatedData);
      // REFETCH USERS NEW VALUES
      await getUser();
      // CLOSE THE FORM IF COMPLETED RESPONSE IS OK
      if (response && response.status >= 200 && response.status <= 299) {
        setCurrentEdit(undefined);
      }
    } catch (error: any) {
      console.log(error.message);
      // IF EMAIL VIOLATES DUPLICATE KEY, PREPARE MESSAGE FOR USER
      if (
        error.response.data.message ===
        'duplicate key value violates unique constraint "UQ_97672ac88f789774dd47f7c8be3"'
      ) {
        if (locale === TLocale_Enum.EN) {

          setUpdateFail("This Email Is Already Used!");
        } else if (locale === TLocale_Enum.KA) {
          setUpdateFail("მოცემული ელ. ფოსტა უკვე გამოყენებულია!");
        }
      }
    } finally {
      setUpdating(false);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) return;

    updateUser(formValues);
  }

  return (
    <SUpdateForm onSubmit={onSubmit} editing={currentEdit !== undefined}>
      <h3>
        <FormattedMessage id="newValue" defaultMessage={"_NEW_VALUE"} />
      </h3>
      <h4>{updateFail}</h4>
      <div>
        {currentEdit && (
          <FormInput
            autoComplete="off"
            error={formErrors[currentEdit]}
            onFocus={() => {
              setUpdateFail("");
              setFormErrors((prev) => ({
                ...prev,
                [currentEdit]: "",
              }));
            }}
            onChange={inputChange}
            value={formValues[currentEdit]}
            name={currentEdit}
            placeholder={currentEdit}
          />
        )}
        <SProductButton
          onClick={() => {
            validateUpdate(formValues, currentEdit as string);
          }}
        >
          {updating ? (
            <>
              <FormattedMessage id="changing" defaultMessage={"_CHANGING_"} /> <SLoadingCircleAnim />
            </>
          ) : (
            <FormattedMessage id="change" defaultMessage={"_CHANGE_"} />
          )}
        </SProductButton>
      </div>
    </SUpdateForm>
  );
}
