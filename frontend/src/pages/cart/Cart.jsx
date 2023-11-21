import useCart from "../../hooks/useCart";
import usePurchases from "../../hooks/usePurchases";
import CartLineItem from "../../components/carts/CartLineItem";

import './Cart.css';

const Cart = () => {
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
    const {createPurchase} = usePurchases();

    const {mutate, error} = createPurchase();

    const onSubmitOrder = () => {
        
        const datapost = {
            total: totalPrice,
            userId:1,
            cart: cart,
        }

        mutate({datapost});
        if(!error){
            dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        }
    }

    const pageContent =
        <>
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

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    );

    return content;
}

export default Cart;
