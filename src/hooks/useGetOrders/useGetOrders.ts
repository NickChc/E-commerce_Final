import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { TOrder } from "@src/@types/general";
import { CACHED_ORDERS } from "@src/config/localStorageCache";

export function useGetOrders() {
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getOrders() {
    try {
      setLoading(true);
      const cachedOrders = localStorage.getItem(CACHED_ORDERS);
      if (cachedOrders) {
        const localOrders = JSON.parse(cachedOrders);
        setOrders(localOrders);
      } else {
        const response = await privateAxios.get("/purchases");
        setOrders(response?.data);
        localStorage.setItem(CACHED_ORDERS, JSON.stringify(response.data));
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { orders, getOrders, gettingOrders: loading };
}
