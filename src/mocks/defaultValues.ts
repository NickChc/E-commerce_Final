import { TUserData, TLogInUser } from "@src/@types/requestTypes";

export const registerDefaultValues: TUserData = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  "repeat-password": "",
};


export const logInDefaultValues: TLogInUser = {
  email: "",
  password: "",
}