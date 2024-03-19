import { useState } from "react";
import { privateAxios } from "@src/utils/privateAxios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useCancelOrder() {
  const { getOrders } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);

  async function cancelOrder(orderId: string, onCancel: () => void) {
    try {
      setLoading(true);
      const response = await privateAxios.delete(`/purchases/${orderId}`);
      console.log(response.data);
      getOrders();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
      onCancel();
    }
  }

  return { cancelOrder, cancellingOrder: loading };
}
