export interface TCategory {
  created_at: string;
  updated_at: string;
  id: string;
  image: string;
  name: string;
}

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
  category: TCategory;
}

export interface TWishlistProduct {
  created_at: string;
  updated_at: string;
  id: string;
  product_id: string;
  user_id: string;
  likedProduct: TProduct;
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

export interface TCartItem {
  cartProduct: TProduct;
  product_id: string;
  id: string;
  user_id: string;
  count: number;
  created_at: string;
  updated_at: string;
}


export interface TPaymentValues {
  fullName: string;
  number: string;
  expiry: string;
  cvc: string;
  postal: string;
}
