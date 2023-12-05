import { useQuery, useMutation, useQueryClient } from 'react-query';
import purchasesAPI from '../api/purchasesAPI';

const usePurchases = () => {
    const queryClient = useQueryClient()
    const { listUserPurchases, postPurchase, listAllPurchases, getOnePurchase } = purchasesAPI();

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

    const retriveAllPurchases = () => {

        const { data: purchasesData, error: purchasesError, isLoading: purchasesLoading } = useQuery(
            "purchases",
            () => listAllPurchases(),
            {
                refetchOnWindowFocus: false,
            }
        )

        return {
            purchasesData,
            purchasesError,
            purchasesLoading,
        }
    };

    const retriveOnePurchase = (id) => {
        const { data: purchaseData, error: purchaseError, isLoading: purchaseLoading } = useQuery(
            "purchase",
            () => getOnePurchase({id}),
            {
                refetchOnWindowFocus: false,
            }
        )

        return {
            purchaseData,
            purchaseError,
            purchaseLoading,
        }
    };

    return {
        retriveUserPurchases,
        createPurchase,
        retriveAllPurchases,
        retriveOnePurchase,
    }
}

export default usePurchases;