"use client";
import Link from "next/link";
import { useAppSelector } from "@/hooks/hooks";
import { CartItem } from "../components/CartItem";
import { BackBtn } from "../components/BackBtn";
import { successMessage } from "@/helpers/functions";

const Cart = () => {
  const { products } = useAppSelector((state) => state.products);

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.totalProductPrice,
    0
  );
  return (
    <main className="main pt-[80px] pb-4 px-4 flex flex-col items-center min-h-[100vh]">
      <BackBtn path="/" message="main" />
      <div className="flex flex-col-reverse sm:flex-row justify-around items:center sm:items-start gap-5 w-full">
        <div className="w-full md:w-3/4">
          {products.map((product) => (
            <Link key={product.id} href={`/${product.id}`} className="h-full">
              <CartItem product={product} />
            </Link>
          ))}
          {!products.length && <p className="text-5xl">Add products to cart</p>}
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
          <p className="py-3">Total price: {totalPrice.toFixed(2)} $</p>
          <Link
            href="/purchase"
            className="text-center rounded-[5px] border border-solid border-black py-[8px]  w-full text-[#e5e5e5] bg-[#a142a6] hover:text-black hover:bg-[#e5e5e5] transition-colors duration-500"
            onClick={() =>
              successMessage("Almost done! Fill out the order form please!")
            }
          >
            Confirm purchase
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
