import { NotifyParams } from "@/types/Category";
import { toast } from "react-toastify";

function preparedSearchString(string: string) {
  return string.toLowerCase().trim();
}

export function getFilteredProducts(
  products: Product[],
  query: string,
  category: string
) {
  if (query) {
    products = products.filter((product) => {
      return preparedSearchString(product.title).includes(
        preparedSearchString(query)
      );
    });
  }
  if (category) {
    products = products.filter((product) => {
      return category === product.category;
    });
  }

  return products;
}

export const getCurrentProduct = (products: Product[], product: Product) => {
  return products.find((el) => el.id === product.id) || null;
};

export const deleteProductByID = (products: Product[], product: Product) => {
  return products.filter((el) => el.id !== product.id);
};

export const successMessage = (message: string) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const errorMessage = (message: string) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const warningMessage = (message: string) =>
  toast.warning(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
