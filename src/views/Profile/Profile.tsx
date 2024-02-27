import { useState } from "react";
import { SProfile, SUserLayer } from "@src/views/Profile";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { userUpdateDefaultValues } from "@src/mocks/defaultValues";
import { UserInfo } from "@src/views/Profile/UserInfo";
import { UpdateForm } from "@src/views/Profile/UpdateForm";
import { useValidateUpdate } from "./UpdateForm/useValidateUpdate";

export function Profile() {
  const { userData } = useAuthProvider();

  const { setFormErrors } = useValidateUpdate();

  const [currentEdit, setCurrentEdit] = useState<
    keyof TChangeableUserData | undefined
  >();

  const [formValues, setFormValues] = useState<TChangeableUserData>({
    first_name: userData?.first_name || "",
    last_name: userData?.last_name || "",
    email: userData?.email || "",
  });

  const [updateFail, setUpdateFail] = useState<string>("");

  // TOGGLES EDITING MODE OF USER FORM
  function toggleEdit(value: keyof TChangeableUserData) {
    if (currentEdit === value) {
      setCurrentEdit(undefined);
    } else {
      setCurrentEdit(value);
      setFormErrors(userUpdateDefaultValues);
    }
    // RESET FORM ON CLOSE
    setFormValues({
      first_name: userData?.first_name || "",
      last_name: userData?.last_name || "",
      email: userData?.email || "",
    });
    setUpdateFail("");
  }

  return (
    <SProfile>
      <SUserLayer>
        {/* THIS COMPONENT SHOWS USERS AVATAR AND INFO */}
        <UserInfo currentEdit={currentEdit as string} toggleEdit={toggleEdit} />

        {/* FORM FOR UPDATING USER INFO */}
        <UpdateForm
          formValues={formValues}
          setFormValues={setFormValues}
          updateFail={updateFail}
          setUpdateFail={setUpdateFail}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </SUserLayer>
    </SProfile>
  );
}
