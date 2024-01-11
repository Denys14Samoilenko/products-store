import { FC } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { actions } from "@/reducers/productsReducer";
import Image from "next/image";

type Props = {
  product: Product;
};

const CartItem: FC<Props> = ({ product }) => {
  const { title, image, description, totalProductPrice, productCount } =
    product;
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-3 border rounded-[5px] border-black p-4 mb-3 ">
      <div className="flex flex-col lg:flex-row  items-center gap-3">
        <picture className="min-w-[100px] h-full">
          <Image
            className="w-full h-full object-contain"
            src={image}
            alt={description}
            width={100}
            height={100}
          />
        </picture>

        <div>
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div
        className="flex flex-col xl:flex-row  items-center justify-center"
        onClick={(e) => e.preventDefault()}
      >
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="border rounded-[3px] border-[#a142a6] px-2 py-1 w-[25px] flex items-center justify-center hover:bg-[#a142a6] hover:text-white transition-colors duration-500"
            onClick={(e) => {
              e.preventDefault();
              dispatch(actions.inreaseCount(product));
            }}
          >
            +
          </button>

          <span className="min-w-[20px] text-center">{productCount}</span>

          <button
            type="button"
            className="border rounded-[3px] border-[#a142a6] px-2 py-1 w-[25px] flex items-center justify-center hover:bg-[#a142a6] hover:text-white transition-colors duration-500"
            onClick={(e) => {
              e.preventDefault();
              dispatch(actions.decreaseCount(product));
            }}
          >
            -
          </button>
          <button
            type="button"
            className="border rounded-[3px] border-[#a142a6] px-2 py-1 w-[25px] flex items-center justify-center hover:bg-[#a142a6] hover:text-white transition-colors duration-500"
            onClick={(e) => {
              e.preventDefault();
              dispatch(actions.deleteProduct(product));
            }}
          >
            X
          </button>
        </div>
        <p className="pt-3 min-w-[100px] text-center xl:pt-0 ">
          {totalProductPrice.toFixed(2)}$
        </p>
      </div>
    </div>
  );
};
export default CartItem;
