import { useState } from "react";
import {
  SProfile,
  SEditHolder,
  SUserInfo,
  SValue,
  SChangeForm,
} from "@src/views/Profile";
import ProfileImg from "@src/assets/images/AvatarImg.webp";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { EditIcon } from "@src/assets/icons";
import { useGetCountry } from "@src/hooks/useGetCountry";
import { FormInput } from "@src/components/FormInput";
import { SProductButton } from "@src/components/Buttons/ProductButton";
import { privateAxios } from "@src/utils/privateAxios";
import { formatPhoneNumber } from "@src/utils/formatPhoneNumber";
import { useValidateChange } from "./useValidateChange";
import { TUpdateFormValues } from "@src/@types/requestTypes";

export function Profile() {
  

  const [currentEdit, setCurrentEdit] = useState<string | undefined>();
  const [formValues, setFormValues] = useState<TUpdateFormValues>({ "": "" });

  const [updating, setUpdating] = useState(false);

  const { userData, logOut, getUser } = useAuthProvider();

  const { usersCountryInfo } = useGetCountry();
  const {} = useValidateChange();

  function toggleEdit(value: string) {
    setFormValues({ "": "" });
    if (currentEdit === value) {
      setCurrentEdit(undefined);
    } else {
      setCurrentEdit(value);
    }
  }

  function inputChange(e: React.ChangeEvent<HTMLFormElement>) {
    setFormValues({ [e.target.name]: e.target.value });
  }

  // UPDATE USERS VALUE
  async function updateUser(value: TUpdateFormValues) {
    try {
      setUpdating(true);
      const response = await privateAxios.put("/user", value);
      // REFETCH USERS NEW VALUES
      await getUser();
      // CLOSE THE FORM
      setCurrentEdit(undefined);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setUpdating(false);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    updateUser(formValues);
  }

  return (
    <SProfile>
      <div className="w-full flex items-center  justify-between mt-14 ">
        <SUserInfo>
          <img src={ProfileImg} alt="profile avatar" loading="lazy" />
          <div>
            <h2>
              NAME: <SValue>{userData?.first_name}</SValue>
              <SEditHolder
                editing={currentEdit === "first_name"}
                onClick={() => toggleEdit("first_name")}
              >
                <EditIcon />
              </SEditHolder>
            </h2>
            <h2>
              SURNAME: <SValue>{userData?.last_name}</SValue>
              <SEditHolder
                editing={currentEdit === "last_name"}
                onClick={() => toggleEdit("last_name")}
              >
                <EditIcon />
              </SEditHolder>
            </h2>
            <h2>
              EMAIL: <SValue>{userData?.email}</SValue>
              <SEditHolder
                editing={currentEdit === "email"}
                onClick={() => toggleEdit("email")}
              >
                <EditIcon />
              </SEditHolder>
            </h2>
            <h2>
              NUMBER:{" "}
              <SValue>
                {usersCountryInfo?.country_calling_code || "   "}{" "}
                {userData && formatPhoneNumber(userData.phone_number)}
              </SValue>
            </h2>
          </div>
        </SUserInfo>
        <SChangeForm onSubmit={onSubmit} editing={currentEdit !== undefined}>
          <h3>ENTER NEW VALUE</h3>
          {currentEdit && (
            <FormInput
              autoComplete="off"
              error=""
              onFocus={() => {}}
              onChange={inputChange}
              value={formValues[currentEdit] || ""}
              name={currentEdit}
              placeholder={currentEdit}
            />
          )}
          <SProductButton onClick={() => console.log(formValues)}>
            {updating ? "CHANGING" : "CHANGE"}
          </SProductButton>
        </SChangeForm>
      </div>
    </SProfile>
  );
}
