"use client";
import { Product } from "@/models/ProductModel";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <ListGroup className="gap-5">
            <ListGroup.Item
              action
              className="bg-black text-bg-danger mb-4 rounded-2"
            >
              <h4>Rocking chair</h4>
            </ListGroup.Item>
            <ListGroup.Item action variant="" className="mb-4 p-2">
              Side chair
            </ListGroup.Item>
            <ListGroup.Item action variant="" className="p-2">
              Lounge chair
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={9}>
          <Row>
            {products?.map((product: Product) => (
              <ProductItem key={product?.slug} product={product} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
