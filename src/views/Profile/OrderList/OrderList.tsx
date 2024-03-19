import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { SOrderList } from "@src/views/Profile/OrderList";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ListItem } from "@src/views/Profile/OrderList/ListItem";

export function OrderList() {
  const { orders, getOrders } = useGlobalProvider();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SOrderList>
      {orders.length < 1 ? (
        <h2>
          <FormattedMessage
            id="orderHistoryClean"
            defaultMessage={"_YOUR_ORDER_HISTORY_IS_CLEAN_"}
          />
        </h2>
      ) : (
        orders?.map((order) => {
          return <ListItem key={order.id} order={order} />;
        })
      )}
    </SOrderList>
  );
}
