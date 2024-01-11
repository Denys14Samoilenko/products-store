import Image from "next/image";
import Link from "next/link";
import { CartCount } from "../CartCount";

const Header = () => {
  return (
    <header className="header z-50 fixed left-0 top-0 w-full flex items-center justify-between p-4 bg-[rgb(115,115,115)] ">
      <Link
        href="/"
        className="hover:scale-110 transition-transform duration-500"
      >
        <Image
          src="../images/logo.svg"
          alt="Studiopresto logo"
          width={170}
          height={50}
        />
      </Link>

      <Link href="/cart" className="hover:animate-[cart_1s_ease-in-out]">
        <div className="cart-menu relative">
          <i className="icon-shopping-bag text-xl hover:text-white transition-colors duration-500"></i>

          <CartCount />
        </div>
      </Link>
    </header>
  );
};

export default Header;
