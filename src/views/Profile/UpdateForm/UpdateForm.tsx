import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { SUpdateForm } from "@src/views/Profile/UpdateForm";
import { SLoadingCircleAnim } from "@src/features/LoadingCircleAnim";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { useValidateUpdate } from "@src/views/Profile/UpdateForm/useValidateUpdate";
import { useAuthProvider } from "@src/providers/AuthProvider";

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
        setUpdateFail("This Email Is Already Used!");
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
      <h3>UPDATE</h3>
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
              CHANGING <SLoadingCircleAnim />
            </>
          ) : (
            "CHANGE"
          )}
        </SProductButton>
      </div>
    </SUpdateForm>
  );
}
