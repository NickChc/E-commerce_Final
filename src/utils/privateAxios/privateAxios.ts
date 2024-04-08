import axios from "axios";

export const privateAxios = axios.create({ baseURL: "https://final-api-k3og.onrender.com" });

export function setPrivateAccessToken(accessToken: string) {
  privateAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
}
