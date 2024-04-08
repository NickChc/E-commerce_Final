import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { SOrderList } from "@src/views/Profile/OrderList";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ListItem } from "@src/views/Profile/OrderList/ListItem";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function OrderList() {
  const { orders, getOrders, gettingOrders } = useGlobalProvider();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SOrderList>
      {orders.length < 1 && !gettingOrders ? (
        <h2>
          <FormattedMessage
            id="orderHistoryClean"
            defaultMessage={"_YOUR_ORDER_HISTORY_IS_CLEAN_"}
          />
        </h2>
      ) : gettingOrders ? (
        <h2>
          <FormattedMessage
            id="loadingOrders"
            defaultMessage={"_LOADING_ORDERS_"}
          />...
        </h2>
      ) : (
        <>
          <h1>
            <FormattedMessage id="orders" defaultMessage={"_ORDERS_"} />
          </h1>
          {orders?.map((order) => {
            return <ListItem key={order.id} order={order} />;
          })}
        </>
      )}
    </SOrderList>
  );
}
