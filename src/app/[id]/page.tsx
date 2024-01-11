import React from "react";
import { ProductInfoPage } from "../components/ProductInfoPage";

type Props = {
  params: {
    id: string;
  };
};

const fetchProduct = async (id: string): Promise<Product | undefined> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const product = await response.json();

    return product as Product;
  } catch (error) {
    console.error("Error has occurred:", error);
  }
};

const ProductPage: React.FC<Props> = async ({ params }) => {
  const { id } = params;

  const product = await fetchProduct(id);

  return !!product ? (
    <ProductInfoPage product={product} />
  ) : (
    <h2 className="mt-[150px] text-center text-2xl">Product not found</h2>
  );
};

export default ProductPage;
