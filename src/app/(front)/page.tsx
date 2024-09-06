import ProductList from "@/components/products/productList";
import data from "@/models/data";

const HomePage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <ProductList products={data?.products} />
      </div>
    </div>
  );
};

export default HomePage;
