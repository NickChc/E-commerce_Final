import {
  SUserInfo,
  SValue,
  SEditHolder,
  SImgWrapper,
  STextHolder,
  SThemeSelectHolder,
} from "@src/views/Profile/UserInfo";
import { EditIcon } from "@src/assets/icons";
import ProfileImg from "@src/assets/images/AvatarImg.webp";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { formatPhoneNumber } from "@src/utils/formatPhoneNumber";
import { useGetCountry } from "@src/hooks/useGetCountry";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { ThemeSelect } from "@src/features/ThemeSelect";

interface UserInfoProps {
  toggleEdit: (arg: keyof TChangeableUserData) => void;
  currentEdit: string;
}

export function UserInfo({ toggleEdit, currentEdit }: UserInfoProps) {
  const { logOut, userData } = useAuthProvider();
  const { usersCountryInfo } = useGetCountry();

  return (
    <SUserInfo>
      <SImgWrapper>
        <img src={ProfileImg} alt="profile avatar" loading="lazy" />
        <button onClick={logOut}>LOG OUT</button>
      </SImgWrapper>
      <STextHolder>
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
        <h2>
          LAST UPDATED AT: <SValue>{userData?.updated_at.split("T")[0]}</SValue>
        </h2>
        <h2>
          TOGGLE THEME{" "}
          <SThemeSelectHolder>
            <ThemeSelect />
          </SThemeSelectHolder>
        </h2>
      </STextHolder>
    </SUserInfo>
  );
}
