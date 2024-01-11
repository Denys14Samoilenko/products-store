import Image from "next/image";
import { BackBtn } from "../BackBtn";
import { CardButton } from "../CardButton";
import { FC } from "react";

type Props = {
  product: Product;
};

const ProductInfoPage: FC<Props> = ({ product }) => {
  const { image, title, description, category, price, rating } = product;

  return (
    <main className="main pt-[80px] pb-4 px-4 min-h-[100vh] flex flex-col items-center">
      <BackBtn path="/" message="main" />

      <div className="flex flex-col sm:flex-row ">
        {product && (
          <>
            <picture className="px-4 w-full ">
              <Image
                className="card__image w-full h-full object-cover rounded-[5px]"
                src={image}
                width={300}
                height={300}
                alt={description}
              />
            </picture>
            <div className="flex flex-col w-full text-xl">
              <h2 className="text-4xl">{title}</h2>
              <p className="">{description}</p>
              <p
                className="py-2
                "
              >
                &#9734; Rating: {rating.rate} &#9734;
              </p>
              <div className="flex justify-between py-4 ">
                <span>Category: {category}</span>
                <span>Price: {price}$</span>
              </div>

              <CardButton product={product} />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProductInfoPage;
