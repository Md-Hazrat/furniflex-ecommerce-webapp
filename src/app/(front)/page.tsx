import ProductList from "@/components/products/productList";
import data from "@/models/data";

const HomePage = () => {
  const products = data?.products || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <ProductList products={products} />
        </div>
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
};

export default HomePage;
