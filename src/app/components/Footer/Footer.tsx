import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center p-4 bg-[rgb(115,115,115)] ">
      <Link
        className="hover:animate-pulse border-solid border-black py-[8px]  text-[#e5e5e5]  hover:text-black transition-colors duration-300"
        href="https://www.linkedin.com/in/denys-samoilenko-4a3664119"
        target="_blank"
      >
        CREATED BY | Denys Samoilenko <i className="icon-linkedin"></i>
      </Link>
    </footer>
  );
};
export default Footer;
