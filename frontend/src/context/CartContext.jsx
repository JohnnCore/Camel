import { createContext, useMemo, useReducer } from "react";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initCartState = { cart: getCartFromLocalStorage() };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD");
      }
      const { id, name, price } = action.payload;

      const filteredCart = state.cart.filter((item) => item.id !== id);

      const itemExists = state.cart.find((item) => item.id === id);
      const quantity = itemExists ? itemExists.quantity + 1 : 1;

      saveCartToLocalStorage([...filteredCart, { id, name, price, quantity }])

      return {
        ...state,
        cart: [...filteredCart, { id, name, price, quantity }],
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE");
      }

      const { id } = action.payload;
      const filteredCart = state.cart.filter((item) => item.id !== id);

      saveCartToLocalStorage([...filteredCart])

      return {
        ...state,
        cart: [...filteredCart],
      };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY");
      }

      const { id, quantity } = action.payload;
      const itemExists = state.cart.find((item) => item.id === id);

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity');
      }

      const updatedItem = { ...itemExists, quantity };
      const filteredCart = state.cart.filter((item) => item.id !== id);

      saveCartToLocalStorage([...filteredCart, updatedItem])

      return {
        ...state,
        cart: [...filteredCart, updatedItem],
      };
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      localStorage.removeItem("cart");

      return {
        ...state,
        cart: [],
      };
    }

    default:
      throw new Error("Undefined reducer action type");

  }
};

const useCartContext = (initCartState) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + (cartItem.quantity * cartItem.price);
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.id);
    const itemB = Number(b.id);
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

const initCartContextState = {
  dispatch: () => { },
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: [],
};

export const CartContext = createContext(initCartContextState);

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
