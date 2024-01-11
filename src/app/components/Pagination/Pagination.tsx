import classNames from "classnames";
import Link from "next/link";
import { FC, useState } from "react";

type Props = {
  productsPerPage: number;
  totalProducts: number;
  paginate: (value: number) => void;
};

const Pagination: FC<Props> = ({
  productsPerPage,
  totalProducts,
  paginate,
}) => {
  const [isActive, setIsActive] = useState(1);

  const pageNumbers = Array.from(
    { length: Math.ceil(totalProducts / productsPerPage) },
    (_, index) => index + 1
  );

  return (
    <ul className="flex items-center justify-center gap-2 py-5">
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => {
            paginate(number);
            scrollTo({ top: 0, behavior: "smooth" });
            setIsActive(number);
          }}
          className={classNames(
            `cursor-pointer border rounded-[3px] border-[#a142a6] px-2 py-1 w-[25px] flex items-center justify-center hover:bg-[#a142a6] hover:text-white transition-colors duration-500`,
            {
              "bg-[#a142a6]": isActive === number,
            }
          )}
        >
          <Link href="#">{number}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
