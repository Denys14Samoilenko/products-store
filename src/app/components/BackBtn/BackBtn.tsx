import { FC } from "react";
import Link from "next/link";

type Props = {
  path: string;
  message: string;
};

const BackBtn: FC<Props> = ({ path, message }) => {
  return (
    <Link
      className="text-center mb-4 w-1/3 rounded-[5px] border border-solid border-black py-[8px] hover:text-[#e5e5e5] hover:bg-[#a142a6] transition-colors duration-500"
      href={`${path}`}
    >
      {`Back to ${message} page`}
    </Link>
  );
};

export default BackBtn;
