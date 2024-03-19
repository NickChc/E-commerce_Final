import { SOrderList } from "@src/views/Profile/OrderList";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ListItem } from "./ListItem";

export function OrderList() {
  const { orders } = useGlobalProvider();

  return (
    <SOrderList>
      {orders?.map((order) => {
        return <ListItem key={order.id} order={order} />;
      })}
    </SOrderList>
  );
}
