import Search from "./Search";
import TopCatagories from "./TopCatagories";
import ProductsList from "./ProductsList";


const ProductsPage = () => {
  return (
    <section className="w-full lg:w-[50%] bg-[#F4F6F8] flex flex-col gap-4">
      <Search />
      <TopCatagories/>
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
