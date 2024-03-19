import { FormattedMessage } from "react-intl";
import { SListItem } from "@src/views/Profile/OrderList/ListItem";
import { TOrder } from "@src/@types/general";
import { CancelIcon } from "@src/assets/icons";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { TPaymentStatus_Enum } from "@src/@types/general";

interface ListItemProps {
  order: TOrder;
}

export function ListItem({ order }: ListItemProps) {
  const { setPaymentStatus, setCurrOrder } = useGlobalProvider();

  function handleCancel() {
    setCurrOrder(order.id);
    setPaymentStatus(TPaymentStatus_Enum.CANCEL);
  }

  return (
    <SListItem>
      <h4>
        <FormattedMessage id="date" defaultMessage={"_DATE_"} /> -{" "}
        {order.created_at.split("T")[0].replace(/\-/g, "/")}
      </h4>
      <h4>
        <FormattedMessage id="cost" defaultMessage={"_COST_"} /> -{" "}
        <span>{order.totalPrice}</span>{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h4>
      <h4>
        <FormattedMessage id="quantity" defaultMessage={"_QUANTITY_"} /> -{" "}
        {order.totalItems}
      </h4>
      <button onClick={handleCancel}>
        <FormattedMessage id="cancel" defaultMessage={"_CANCEL_"} />
      </button>
      <span onClick={handleCancel}>
        <CancelIcon />
      </span>
    </SListItem>
  );
}
