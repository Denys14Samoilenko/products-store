import { FC } from "react";
import Image from "next/image";
import { CardButton } from "../CardButton";

type Props = {
  product: Product;
};

const Card: FC<Props> = ({ product }) => {
  const { title, price, category, description, image } = product;
  return (
    <div className="card flex flex-col items-center w-full border border-solid border-black rounded-[5px] overflow-hidden p-2 min-h-[100%] hover:shadow-[0px_0px_15px_#a142a6] bg-[#fffefe] hover:border-[#a142a6] transition-all duration-500">
      <picture className="p-4 h-[150px] w-full">
        <Image
          className="card__image w-full h-full object-contain"
          src={image}
          width={100}
          height={100}
          alt={description}
        />
      </picture>

      <div className="card__body text-center flex-auto">
        <h3 className="text-2xl py-1">{title}</h3>
        <p className="py-2">{description}</p>
      </div>

      <div className="card__footer flex justify-around w-full mb-2 py-2">
        <span className="block">{category}</span>
        <span className="block">{price}$</span>
      </div>

      <CardButton product={product} />
    </div>
  );
};

export default Card;
