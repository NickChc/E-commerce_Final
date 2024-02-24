import {
  SProfile,
  SUserInfo,
  SProfileWrapper,
  SImgWrapper,
  SMapHolder,
  SMainWrapper,
} from "@src/views/Profile";
import { useAuthProvider } from "@src/providers/AuthProvider";
import AvatarImg from "@src/assets/images/AvatarImg.webp";
import { SProductButton } from "@src/components/Buttons/ProductButton";

export function Profile() {
  const { userData, logOut } = useAuthProvider();
  return (
    <SProfile>
      <SMainWrapper>
        <SProfileWrapper>
          <SImgWrapper>
            <img src={AvatarImg} alt="avatar image" loading="lazy" />
            <SUserInfo>
              <div>
                <h4>
                  NAME - <span>{userData?.first_name}</span>
                </h4>
                <h4>
                  SURNAME - <span>{userData?.last_name}</span>
                </h4>
                <h4>
                  PHONE NUMBER - <span>{userData?.phone_number}</span>
                </h4>
                <div>
                  <h4>PASSWORD - </h4>
                  <input
                    type="password"
                    disabled={true}
                    value={userData?.password}
                  />
                </div>
              </div>
            </SUserInfo>
          </SImgWrapper>
          <h4>
            ADDRESS - <span>Giorgi Brtskinvale Str. N21</span>
          </h4>
          <h4>
            EMAIL - <span>{userData?.email}</span>
          </h4>
          <SProductButton>EDIT PROFILE</SProductButton>
          <SProductButton onClick={() => logOut()}>LOG OUT</SProductButton>
        </SProfileWrapper>
        <SMapHolder>CONTENT</SMapHolder>
      </SMainWrapper>
    </SProfile>
  );
}
