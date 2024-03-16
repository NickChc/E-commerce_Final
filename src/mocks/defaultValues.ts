import {
  TRegisterUser,
  TLogInUser,
  TChangeableUserData,
} from "@src/@types/requestTypes";
import { TPaymentValues } from "@src/@types/general";

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
};

export const userUpdateDefaultValues: TChangeableUserData = {
  email: "",
  first_name: "",
  last_name: "",
};

export const paymentDefaultValues: TPaymentValues = {
  fullName: "",
  number: "",
  cvc: "",
  expiry: "",
  postal: "",
};
