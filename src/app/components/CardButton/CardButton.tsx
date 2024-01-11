"use client";

import React, { FC, MouseEvent } from "react";
import { successMessage, warningMessage } from "@/helpers/functions";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { actions } from "@/reducers/productsReducer";

type Props = {
  product: Product;
};

const CardButton: FC<Props> = ({ product }) => {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const productInStore = product.rating.count <= 0;

  const { id } = product;

  const isProductInCart = products.some(
    (product: Product) => product.id === id
  );

  const handleDeleteClick = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(actions.deleteFromCart(id));
    dispatch(actions.decreaseCount(product));
    warningMessage("You delete product from cart!");
  };

  const handleAddClick = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(actions.addToCart(product));
    dispatch(actions.inreaseCount(product));
    successMessage("Product added to cart");
  };

  return isProductInCart ? (
    <button
      type="button"
      onClick={handleDeleteClick}
      className="rounded-[5px] border border-solid border-black py-[8px]  w-full text-[#e5e5e5] bg-[#a142a6] hover:text-black hover:bg-[#e5e5e5] transition-colors duration-500"
    >
      Delete from cart
    </button>
  ) : (
    <button
      type="button"
      onClick={handleAddClick}
      disabled={productInStore}
      className={`rounded-[5px] border border-solid border-black py-[8px]  w-full hover:text-[#e5e5e5] hover:bg-[#a142a6] transition-colors duration-500 ${
        productInStore ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      Add to cart
    </button>
  );
};
export default CardButton;
