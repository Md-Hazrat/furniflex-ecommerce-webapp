"use client";
import Cookies from "js-cookie";
import { createContext, ReactNode, useReducer } from "react";

// Define types for the state and actions

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  // Add other item properties if needed
}

interface CartState {
  cartItems: CartItem[];
}

interface UserInfo {
  name: string;
  email: string;
  // Add other user properties if needed
}

interface StoreState {
  cart: CartState;
  userInfo: UserInfo | null;
}

type StoreAction =
  | { type: "CART_ADD_ITEM"; payload: CartItem }
  | { type: "CART_REMOVE_ITEM"; payload: CartItem }
  | { type: "CART_CLEAR" }
  | { type: "USER_LOGIN"; payload: UserInfo }
  | { type: "USER_LOGOUT" };

const initialState: StoreState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems") || "[]")
      : [],
  },
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo") || "null")
    : null,
};

function reducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_CLEAR":
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
        },
      };
    default:
      return state;
  }
}

interface StoreProviderProps {
  children: ReactNode;
}

const defaultContextValue = {
  state: initialState,
  dispatch: () => {}, // No-op function
};

const Store = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
}>(defaultContextValue);

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export { Store };
