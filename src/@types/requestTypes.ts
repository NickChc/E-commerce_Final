export interface TProduct {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  image: string;
  price: number;
  salePrice: null | number;
  category_name: string;
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

export interface TUserInfo {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  password: string;
  phone_number: string;
  refresh_token: string;
  role: string;
  created_at: string;
  updated_at: string;
  verified: boolean;
}
