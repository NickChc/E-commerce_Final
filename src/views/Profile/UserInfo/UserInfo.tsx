import { FormattedMessage } from "react-intl";
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
// import { useGetCountry } from "@src/hooks/useGetCountry";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { ThemeSelect } from "@src/features/ThemeSelect";

interface UserInfoProps {
  toggleEdit: (arg: keyof TChangeableUserData) => void;
  currentEdit: string;
}

export function UserInfo({ toggleEdit, currentEdit }: UserInfoProps) {
  const { logOut, userData } = useAuthProvider();
  // const { usersCountryInfo } = useGetCountry();

  return (
    <SUserInfo>
      <SImgWrapper>
        <img src={ProfileImg} alt="profile avatar" loading="lazy" />
      </SImgWrapper>
      <STextHolder>
        <h2>
          <FormattedMessage id="name" defaultMessage={"_NAME_"} />:{" "}
          <SValue>{userData?.first_name}</SValue>
          <SEditHolder
            editing={currentEdit === "first_name"}
            onClick={() => toggleEdit("first_name")}
          >
            <EditIcon />
          </SEditHolder>
        </h2>
        <h2>
          <FormattedMessage id="surname" defaultMessage={"_SURNAME_"} />:{" "}
          <SValue>{userData?.last_name}</SValue>
          <SEditHolder
            editing={currentEdit === "last_name"}
            onClick={() => toggleEdit("last_name")}
          >
            <EditIcon />
          </SEditHolder>
        </h2>
        <h2>
          <FormattedMessage id="email" defaultMessage={"_EMAIL_"} />:{" "}
          <SValue>{userData?.email}</SValue>
          <SEditHolder
            editing={currentEdit === "email"}
            onClick={() => toggleEdit("email")}
          >
            <EditIcon />
          </SEditHolder>
        </h2>
        <h2>
          <FormattedMessage id="phone" defaultMessage={"_PHONE_NUMBER_"} />:{" "}
          <SValue>
            {/* REQUST LIMIT, LEAVE COMMENTED FOR NOW */}
            {/* {usersCountryInfo?.country_calling_code || "   "}{" "} */}
            {userData && formatPhoneNumber(userData.phone_number)}
          </SValue>
        </h2>
        <h2>
          <FormattedMessage
            id="lastUpdated"
            defaultMessage={"_LAST_UPDATED_"}
          />
          : <SValue>{userData?.updated_at.split("T")[0]}</SValue>
        </h2>
        <h2>
          <FormattedMessage
            id="toggleTheme"
            defaultMessage={"_TOGGLE_THEME_"}
          />{" "}
          <SThemeSelectHolder>
            <ThemeSelect />
          </SThemeSelectHolder>
        </h2>
        <h2>
          <FormattedMessage id="signedIn" defaultMessage={"_SIGNED_IN_"} />{" "}
          <SThemeSelectHolder>
            <button onClick={logOut}>
              <FormattedMessage id="logOut" defaultMessage={"_LOG_OUT_"} />
            </button>
          </SThemeSelectHolder>
        </h2>
      </STextHolder>
    </SUserInfo>
  );
}
