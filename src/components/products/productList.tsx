"use client";
import { useState } from "react";
import { Product } from "@/models/ProductModel";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
} 

const ProductList = ({ products }: ProductListProps) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(1);

  const onClickSort = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  return (
    <div>
      <Row>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item
              action
              active={activeCategory === 1}
              onClick={() => onClickSort(1)}
              style={{
                backgroundColor: activeCategory === 1 ? "#000" : "#fff",
                color: activeCategory === 1 ? "#fff" : "#000",
                padding: "1rem",
                borderColor: activeCategory === 1 ? "#000" : "rgb(246 240 240)",
              }}
            >
              Rocking Chair
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeCategory === 2}
              onClick={() => onClickSort(2)}
              style={{
                backgroundColor: activeCategory === 2 ? "#000" : "#fff",
                color: activeCategory === 2 ? "#fff" : "#000",
                padding: "1rem",
                borderColor: activeCategory === 2 ? "#000" : "rgb(246 240 240)",
              }}
            >
              Side Chair
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={activeCategory === 3}
              onClick={() => onClickSort(3)}
              style={{
                backgroundColor: activeCategory === 3 ? "#000" : "#fff",
                color: activeCategory === 3 ? "#fff" : "#000",
                padding: "1rem",
                borderColor: activeCategory === 3 ? "#000" : "rgb(246 240 240)",
              }}
            >
              Lounge Chair
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
