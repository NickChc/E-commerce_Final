import { privateAxios } from "@src/utils/privateAxios";
import { useEffect, useState } from "react";
import { TOrder } from "@src/@types/general";

export function useGetOrders() {
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getOrders() {
    try {
      setLoading(true);
      const response = await privateAxios.get("/purchases");
      setOrders(response?.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return { orders, getOrders, gettingOrders: loading };
}
