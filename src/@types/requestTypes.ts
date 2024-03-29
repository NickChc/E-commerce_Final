export interface TPurchaseValues {
  totalItems: number;
  totalPrice: number;
}

export interface TRegisterUser {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  "repeat-password": string;
}

export interface TUserTokens {
  access_token: string;
  refresh_token: string;
}

export interface TLogInUser {
  email: string;
  password: string;
}

export interface TChangeableUserData {
  first_name: string;
  last_name: string;
  email: string;
}
