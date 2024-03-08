import { useNavigate, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SPagination } from "@src/components/Pagination";
import { Button } from "@src/components/Buttons/HeaderButton";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function Pagination() {
  const { totalFiltered } = useGlobalProvider();

  const { categoryName, page } = useParams();

  const Navigate = useNavigate();

  function pageChange(newPage: number) {
    Navigate(`/products/${categoryName}/${newPage}`);
  }

  const totalPages = new Array(Math.ceil(totalFiltered / 2)).fill(0);

  return (
    <SPagination>
      <Button
        disabled={Number(page) === 1}
        onClick={() => pageChange(Number(page) - 1)}
      >
        <FormattedMessage id="prev" defaultMessage={"_PREV_"} />
      </Button>
      {totalPages.map((_, index) => {
        return (
          <Button
            variation={Number(page) === index + 1 ? "active" : undefined}
            key={index}
            onClick={() => pageChange(index + 1)}
          >
            {index + 1}
          </Button>
        );
      })}
      <Button
        disabled={Number(page) === totalPages.length}
        onClick={() => pageChange(Number(page) + 1)}
      >
        <FormattedMessage id="next" defaultMessage={"_NEXT_"} />
      </Button>
    </SPagination>
  );
}
