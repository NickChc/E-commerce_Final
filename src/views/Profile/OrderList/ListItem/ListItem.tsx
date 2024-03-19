import { FormattedMessage } from "react-intl";
import { SListItem } from "@src/views/Profile/OrderList/ListItem";
import { TOrder } from "@src/@types/general";
import { CancelIcon } from "@src/assets/icons";

interface ListItemProps {
  order: TOrder;
}

export function ListItem({ order }: ListItemProps) {
  return (
    <SListItem>
      <h4>
        <FormattedMessage id="date" defaultMessage={"_DATE_"} /> -{" "}
        {order.created_at.split("T")[0].replace(/\-/g, "/")}
      </h4>
      <h4>
        <FormattedMessage id="cost" defaultMessage={"_COST_"} /> -{" "}
        {order.totalPrice}{" "}
        <FormattedMessage id="gel" defaultMessage={"_GEL_"} />
      </h4>
      <h4>
        <FormattedMessage id="quantity" defaultMessage={"_QUANTITY_"} /> -{" "}
        {order.totalItems}
      </h4>
      <button>
        <FormattedMessage id="cancel" defaultMessage={"_CANCEL_"} />
      </button>
      <span>
        <CancelIcon />
      </span>
    </SListItem>
  );
}
