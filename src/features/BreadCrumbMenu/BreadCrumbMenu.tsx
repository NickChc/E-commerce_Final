import { SBreadCrumbMenu } from "@src/features/BreadCrumbMenu";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { TProduct } from "@src/@types/requestTypes";
import { CrumbarArrow } from "@src/assets/icons";

interface MenuProps {
  item?: TProduct;
}

export function BreadCrumbMenu({ item }: MenuProps) {
  return (
    <>
      <SBreadCrumbMenu>
        <nav>
          <Link to={"/"}>
            <FormattedMessage id="home" defaultMessage={"_HOME_"} />
          </Link>{" "}
          <CrumbarArrow />
          <Link to={`/products${item?.category_name}`}>
            {item?.category_name}
          </Link>
          <CrumbarArrow />
          <Link to={""}>{item?.title}</Link>
        </nav>
        <hr className="w-full" />
      </SBreadCrumbMenu>
    </>
  );
}
