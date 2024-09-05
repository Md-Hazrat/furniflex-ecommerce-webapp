import ProductItem from "@/components/products/ProductItem";
import data from "@/models/data";
import { Product } from "@/models/ProductModel";

export default function Home() {
  return (
    <div className="container">
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.products?.map((product: Product) => (
          <ProductItem key={product?.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
