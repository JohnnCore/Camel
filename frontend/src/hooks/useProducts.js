import { useQuery, useMutation, useQueryClient } from 'react-query';
import productsAPI from '../api/productsAPI';

const useProducts = () => {
    const queryClient = useQueryClient()
    const { listAllProducts, getOneProduct } = productsAPI();

    const retriveAllProducts = () => {

        const { data: productsData, error: productsError, isLoading: productsLoading } = useQuery(
            "products",
            () => listAllProducts(),
            {
                refetchOnWindowFocus: false,
            }
        )

        return {
            productsData,
            productsError,
            productsLoading,
        }
    };


    const retriveOneProduct = (id) => {
        const { data: productData, error: productError, isLoading: productLoading } = useQuery(
            ["product", id],
            () => getOneProduct({ id }),
            {
                refetchOnWindowFocus: false,
            }
        )
        return {
            productData,
            productError,
            productLoading,
        }
    };

    return {
        retriveAllProducts,
        retriveOneProduct,
    }

}

export default useProducts;