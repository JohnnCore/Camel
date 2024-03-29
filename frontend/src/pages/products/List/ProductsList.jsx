import useCart from "../../../hooks/useCart";
import Product from "../../../components/Products/Product";
import useProducts from '../../../hooks/useProducts';

import './ProductsList.css';

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart();

    const { retriveAllProducts } = useProducts();
    const { productsData, productsError, productsLoading } = retriveAllProducts();

    if (productsLoading) {
        return <div>Loading...</div>;
    }

    if (productsError) {
        return <div>Error: {error.message}</div>;
    }

    const pageContent = productsData.map((data) => {
        const inCart = cart.some(item => item.id === data.id)
        return (
            <Product
                key={data.id}
                product={data}
                dispatch={dispatch}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
                inCart={inCart}
            />
        )
    })

    const content = (
        <main className="ProductList">
            {pageContent}
        </main>
    )

    return (
        content
    )
}

export default ProductList;