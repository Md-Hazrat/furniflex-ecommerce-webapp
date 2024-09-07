"use client";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Product } from "../../models/ProductModel";
import { Col } from "react-bootstrap";
import { useContext } from "react";
import { Store } from "@/utils/store";
import { toast } from "react-toastify";
import { useAuth } from "@/utils/authContext";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { state, dispatch } = useContext(Store);
  const { isAuthenticated } = useAuth();

  const addToCartHandler = () => {
    if(!isAuthenticated){
      toast.error("Plesae login first")
      return;
    }
    const existItem = state.cart.cartItems.find((x) => x?.id === product?.id);
    const quantity = existItem ? existItem?.quantity + 1 : 1;

    if (product?.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added to the Cart successfully");
  };

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
          <Card.Title className="product-name">{product?.name}</Card.Title>
          <div className="d-flex justify-content-between align-items-center my-3">
            <p className="product-price mb-0">
              {" "}
              &euro;
              {product?.price - (product?.price * product?.offerPercent) / 100}
            </p>
            <Card.Text className="product-price-old mb-0">
              &euro;<del>{product?.price}</del>
            </Card.Text>
            <h4 className="text-danger product-price-offer mb-0">
              {product?.offerPercent}% OFF
            </h4>
          </div>
          <Card.Text>{product?.description}</Card.Text>
          <Button
            onClick={addToCartHandler}
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
