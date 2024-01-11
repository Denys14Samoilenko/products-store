import { ProductsPage } from "./components/ProductsPage";

export default async function Home() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Error loading the data: ${response.status}`);
    }

    const products = await response.json();

    return <ProductsPage products={products} />;
  } catch (error) {
    console.error("Error has occurred:");

    return (
      <main className="main pt-[80px] pb-4 px-4 flex flex-col items-center ">
        <div>There was an error loading the data. Please try again later.</div>
      </main>
    );
  }
}
