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
        <Card.Img
          src={product?.image}
          alt={product?.name}
          className="p-3 rounded-3"
        />
        <Card.Body>
          <Card.Title>Recliner Chair Wood</Card.Title>
          <Card.Text>
            It has a backrest that can be tilted back, and often a footrest
            extended.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <h4> €{product?.price}</h4>
            <Card.Text className="fs-4">
              €<del>{product?.price}</del>
            </Card.Text>
            <h4 className="text-danger">30% OFF</h4>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="h-100 w-100 d-flex align-items-center justify-content-center bg-black"
          >
            <Image
              src="/images/ecommerce.png"
              alt="ecommerce image"
              width={14}
              height={10}
            />
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
