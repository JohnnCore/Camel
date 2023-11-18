import { useQuery, useMutation, useQueryClient } from 'react-query';
import purchasesAPI from '../api/purchasesAPI';

const usePurchases = () => {
    const queryClient = useQueryClient()
    const { listUserPurchases, postPurchase } = purchasesAPI();

    const retriveUserPurchases = (id) => {
        const { data: userPurchasesData, error: userPurchasesError, isLoading: userPurchasesLoading } = useQuery(
            ["products", id],
            () => listUserPurchases({ id }),
            {
                refetchOnWindowFocus: false,
            }
        )
        return {
            userPurchasesData,
            userPurchasesError,
            userPurchasesLoading,
        }
    };



    const createPurchase = () => {
        const { mutate, error } = useMutation(
            "createPurchase",
            postPurchase,
        )
        return {
            mutate,
            error
        }
    }

    return {
        retriveUserPurchases,
        createPurchase,
    }
}

export default usePurchases;