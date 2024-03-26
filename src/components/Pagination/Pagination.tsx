import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { SPagination } from "@src/components/Pagination";
import { Button } from "@src/components/Buttons/HeaderButton";
import { PAGE_SIZE } from "@src/config/general";
import { useProductProvider } from "@src/providers/ProductProvider";

export function Pagination() {
  const { totalFiltered } = useProductProvider();
  const [pageRange, setPageRange] = useState<[number, number]>([0, 6]);

  const { categoryName, page } = useParams();

  const Navigate = useNavigate();

  function pageChange(newPage: number) {
    Navigate(`/products/${categoryName}/${newPage}`);
    if (
      newPage === mappedPages[mappedPages.length - 1] &&
      newPage !== totalPages.length
    ) {
      setPageRange((prev) => [prev[0] + 1, prev[1] + 1]);
    } else if (newPage === mappedPages[0] && pageRange[0] !== 0) {
      setPageRange((prev) => [prev[0] - 1, prev[1] - 1]);
      console.log("CHANGE");
    }
  }

  const pageArray = new Array(Math.ceil(totalFiltered / PAGE_SIZE)).fill(0);
  const totalPages = pageArray.map((_, index) => index + 1);

  const mappedPages = totalPages.slice(pageRange[0], pageRange[1]);

  if (mappedPages.length < 1) return;

  return (
    <SPagination>
      <Button
        disabled={Number(page) === 1}
        onClick={() => pageChange(Number(page) - 1)}
      >
        <FormattedMessage id="prev" defaultMessage={"_PREV_"} />
      </Button>
      <div className="flex justify-start max-w-[80%] overflow-hidden ">
        {mappedPages.map((name, index) => {
          return (
            <Button
              variation={Number(page) === name ? "active" : undefined}
              key={index}
              onClick={() => pageChange(name)}
            >
              {name}
            </Button>
          );
        })}
      </div>
      <Button
        disabled={Number(page) === totalPages.length}
        onClick={() => pageChange(Number(page) + 1)}
      >
        <FormattedMessage id="next" defaultMessage={"_NEXT_"} />
      </Button>
    </SPagination>
  );
}
