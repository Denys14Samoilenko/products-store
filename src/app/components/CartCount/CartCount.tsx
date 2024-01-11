import { useAppSelector } from "@/hooks/hooks";

const CartCount = () => {
  const { cartCount } = useAppSelector((state) => state.cartCount);

  return (
    <>
      {!!cartCount && (
        <span className="absolute top-4 -left-2 text-[9px] font-bold bg-white rounded-[50%] flex items-center justify-center px-1 py-[2px] min-w-4 min-h-4">
          {cartCount}
        </span>
      )}
    </>
  );
};

export default CartCount;
