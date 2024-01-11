"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { Card } from "../Card";
import { getFilteredProducts } from "@/helpers/functions";
import { useDebounce } from "@/hooks/hooks";
import { Pagination } from "../Pagination";

import { PRODUCTS_PER_PAGE } from "@/helpers/constants";
import { Sidebar } from "../Sidebar";
import { SidebarBtn } from "../SidebarBtn";

type Props = {
  products: Product[];
};

const ProductsPage: FC<Props> = ({ products }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const debouncedSearch = useDebounce(query);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(PRODUCTS_PER_PAGE);

  const visibleProducts = getFilteredProducts(
    products,
    debouncedSearch,
    category
  );

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = visibleProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [isMenuOpen, setIsMenuOnen] = useState(false);

  const handleOpenSidebar = () => {
    setIsMenuOnen((open) => !open);
  };

  return (
    <>
      {isMenuOpen && (
        <Sidebar
          handleOpenSidebar={handleOpenSidebar}
          setCategory={setCategory}
        />
      )}

      <main className="main pt-[80px] pb-4 px-4 flex flex-col items-center min-h-[100vh]">
        <SidebarBtn
          isMenuOpen={isMenuOpen}
          handleOpenSidebar={handleOpenSidebar}
        />

        <form action="/" className="mb-5 w-full">
          <label htmlFor="search" className="relative flex items-center">
            <i className="icon-search absolute top-[4px] left-2 text-xl"></i>

            <input
              id="search"
              type="text"
              placeholder="Search product"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="w-full bg-white text-[#666] text-[inherit] m-0 p-2 pl-10 rounded-none border-2 border-solid border-[black] outline-none focus:rounded-[5px] focus:border-[#a142a6]"
            />

            {!!query.length && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute text-xl top-[5px] right-3 hover:text-[#a142a6] transition-colors duration-500 "
              >
                X
              </button>
            )}
          </label>
        </form>

        {!!currentProduct.length && (
          <div className="row flex flex-wrap -m-2">
            {currentProduct.map((product) => {
              return (
                <div
                  key={product.id}
                  className="column flex flex-col w-full  md:w-1/2 lg:w-1/3 2xl:w-1/4 p-2"
                >
                  <Link href={`/${product.id}`} className="h-full">
                    <Card product={product} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {!!query.length && !!!currentProduct.length ? (
          <h3 className="text-2xl">No product found on this request</h3>
        ) : (
          ""
        )}

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={visibleProducts.length}
          paginate={paginate}
        />
      </main>
    </>
  );
};
export default ProductsPage;
