import { FC } from "react";
import { Category } from "@/types/Category";

type Props = {
  handleOpenSidebar: () => void;
  setCategory: (value: string) => void;
};

const Sidebar: FC<Props> = ({ handleOpenSidebar, setCategory }) => {
  const resetCategory = () => {
    setCategory("");
    handleOpenSidebar();
  };

  return (
    <aside
      style={{ WebkitTextStroke: "1px black" }}
      className="aside fixed top-[59px] left-0 bottom-0 min-w-full sm:min-w-[300px] z-50 bg-[rgb(115,115,115)] py-4 px-4"
    >
      <ul className="flex flex-col items-center pt-7 gap-3 text-xl text">
        <li
          className="hover:text-[#a142a6] hover:pl-[5px] transition-all duration-500 cursor-pointer text-[24px]"
          onClick={resetCategory}
        >
          All Categories
        </li>

        {Object.values(Category).map((product: string) => {
          const preparedCategoryTitle = `${product
            .slice(0, 1)
            .toUpperCase()}${product.slice(1)}`;

          return (
            <li
              key={product}
              className="hover:text-[#a142a6] cursor-pointer hover:pl-[5px] transition-all duration-500 text-[24px] "
              onClick={() => {
                setCategory(product);
                handleOpenSidebar();
              }}
            >
              {preparedCategoryTitle}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
