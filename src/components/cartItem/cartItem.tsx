"use client";
import { Store } from "@/utils/store";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";

const CartItem = () => {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state?.cart;

  const incrementQuantity = (item: any) => {
    const newItem = { ...item, quantity: item?.quantity + 1 };
    dispatch({ type: "CART_ADD_ITEM", payload: newItem });
  };

  const decrementQuantity = (item: any) => {
    const newItem = { ...item, quantity: item?.quantity - 1 };
    if (newItem?.quantity > 0) {
      dispatch({ type: "CART_ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "CART_REMOVE_ITEM", payload: item });
    }
  };

  const removeItem = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div className="container mb-4">
      <h4 className="mb-5">An overview of your order</h4>
      <div className="">
        <ListGroup>
          {cartItems?.map((item) => (
            <ListGroup.Item
              key={item?.id}
              className="d-flex justify-content-between align-items-center image-bg p-4"
            >
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  onClick={() => decrementQuantity(item)}
                >
                  -
                </Button>
                <span className="mx-2">{item?.quantity}</span>
                <Button
                  variant="outline-secondary"
                  onClick={() => incrementQuantity(item)}
                >
                  +
                </Button>

                <div className="d-flex ms-3 ">
                  <div
                    style={{ backgroundColor: "#DEDEDE" }}
                    className="p-2 rounded-3"
                  >
                    <img
                      src={item?.image}
                      alt={item?.name}
                      style={{ width: "80px", marginRight: "10px" }}
                    />
                  </div>
                  <p className="ms-3">{item?.name}</p>
                </div>
              </div>

              <div className="d-flex flex-column gap-4 align-items-end">
                <div className="">
                  <i
                    className="bi bi-x cursor-pointer"
                    onClick={() => removeItem(item)}
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
                <div className="">
                  <span>&euro;{item?.price * item?.quantity}</span>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default CartItem;
