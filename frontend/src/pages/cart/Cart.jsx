import useCart from "../../hooks/useCart";
import { useState } from 'react';
import CartLineItem from "../../components/Cart/CartLineItem";

const Cart = () => {
    const [confirm, setConfirm] = useState(false);
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
    console.log(cart);

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);
    }

    const pageContent = confirm
        ? <h2>Thank you!</h2>
        : (
            <>
                <h2 className="offscreen">Cart</h2>
                <ul className="cart">
                    {cart.map(item => {
                        return (
                            <CartLineItem
                                key={item.id}
                                item={item}
                                dispatch={dispatch}
                                REDUCER_ACTIONS={REDUCER_ACTIONS}
                            />
                        )
                    })}
                </ul>
                <div className="cart__totals">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                    <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
                        Place Order
                    </button>
                </div>
            </>
        );

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    );

    return content;
}

export default Cart;