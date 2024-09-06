"use client";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Product } from "../../models/ProductModel";
import { Col } from "react-bootstrap";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Col md={4}>
      <Card className="shadow-xl mb-4 rounded-2">
        <div className="p-3">
          <div className="image-bg rounded-3">
            <Card.Img
              src={product?.image}
              alt={product?.name}
              className="p-3 rounded-3"
            />
          </div>
        </div>

        <Card.Body>
          <Card.Title className="product-name">Recliner Chair Wood</Card.Title>
          <div className="d-flex justify-content-between align-items-center my-3">
            <p className="product-price mb-0"> &euro;{product?.price}</p>
            <Card.Text className="product-price-old mb-0">
              &euro;<del>{product?.price}</del>
            </Card.Text>
            <h4 className="text-danger product-price-offer mb-0">30% OFF</h4>
          </div>
          <Card.Text>
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </Card.Text>
          <Button
            variant="secondary"
            size="lg"
            className="h-100 w-100 d-flex align-items-center justify-content-center bg-black"
          >
            <Image
            className="me-3"
              src="/images/cart-white.png"
              alt="ecommerce image"
              width={17}
              height={18}
            />
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
