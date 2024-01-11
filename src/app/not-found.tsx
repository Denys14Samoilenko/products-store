import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main pt-[80px] pb-4 px-4 flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-3xl">Not Found</h2>
        <p className="text-1xl mb-5">Could not find requested resource</p>
        <Link
          className=" rounded-[5px] border border-solid border-black py-[8px] px-[5px] w-full text-[#e5e5e5] bg-[#a142a6] hover:text-black hover:bg-[#e5e5e5] transition-colors duration-500"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
