import { SBreadCrumbMenu } from "@src/features/BreadCrumbMenu";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { TProduct } from "@src/@types/general";
import { CrumbarArrow } from "@src/assets/icons";

interface MenuProps {
  item?: TProduct;
}

export function BreadCrumbMenu({ item }: MenuProps) {
  const { categoryName } = useParams();

  return (
    <>
      <SBreadCrumbMenu>
        <nav>
          <Link to={"/"}>
            <FormattedMessage id="home" defaultMessage={"_HOME_"} />
          </Link>{" "}
          <CrumbarArrow />
          <Link to={`/products/${item?.category_name || categoryName}/1`}>
            {item?.category_name || categoryName || ""}
          </Link>
          {item && (
            <>
              <CrumbarArrow />
              <Link to={""}>{item?.title}</Link>
            </>
          )}
        </nav>
        <hr className="w-full" />
      </SBreadCrumbMenu>
    </>
  );
}
