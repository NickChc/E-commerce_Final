import { TRegisterUser, TLogInUser, TChangeableUserData } from "@src/@types/requestTypes";

export const registerDefaultValues: TRegisterUser = {
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


export const userUpdateDefaultValues: TChangeableUserData = {
  email: "",
  first_name: "",
  last_name: "",
}