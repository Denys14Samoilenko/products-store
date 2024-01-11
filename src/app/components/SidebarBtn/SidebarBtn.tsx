import { FC } from "react";

type Props = {
  isMenuOpen: boolean;
  handleOpenSidebar: () => void;
};

const SidebarBtn: FC<Props> = ({ isMenuOpen, handleOpenSidebar }) => {
  return (
    <div className="w-[100px] text-center mb-4">
      <button
        type="button"
        className="rounded-[5px] border border-solid border-black px-[8px] py-[5px]  text-[#e5e5e5] bg-[#a142a6] hover:text-black hover:bg-[#e5e5e5] transition-colors duration-500"
        onClick={handleOpenSidebar}
      >
        {isMenuOpen ? "X" : "Categories"}
      </button>
    </div>
  );
};
export default SidebarBtn;
