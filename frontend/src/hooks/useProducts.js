import { useQuery, useMutation, useQueryClient } from 'react-query';
import productsAPI from '../api/productsAPI';

const useProducts = () => {
    const queryClient = useQueryClient()
    const { listAllProducts, getOneProduct, postProduct, putProduct, deleteProduct } = productsAPI();

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


    const createProduct = () => {
        const { mutate, error } = useMutation(
            "createProduct",
            postProduct,
        )
        return {
            mutate,
            error
        }
    };

    const editProduct = () => {
        const { mutate, error } = useMutation(
            "editProduct",
            putProduct,
        )
        return {
            mutate,
            error,
        }
    };

    const destroyProduct = () => {
        const { mutate, error } = useMutation(
            "destroyProduct",
            deleteProduct,
        )
        return {
            mutate,
            error,
        }
    };

    return {
        retriveAllProducts,
        retriveOneProduct,
        createProduct,
        editProduct,
        destroyProduct,
    }

}

export default useProducts;