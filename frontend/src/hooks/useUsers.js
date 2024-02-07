import { useQuery, useMutation,useQueryClient } from 'react-query';
import usersAPI from '../api/usersAPI';

const useUsers = () => {
    const queryClient = useQueryClient()
    const { listAllUsers, loginUser } = usersAPI();

    const retriveAllUsers = () => {

        const { data: usersData, error: usersError, isLoading: usersLoading } = useQuery(
            "users",
            () => listAllUsers(),
            {
                refetchOnWindowFocus: false,
            }
        )

        return {
            usersData,
            usersError,
            usersLoading,
        }
    };

    const useLoginUser  = () => {
        const { data, isSuccess, error, mutateAsync } = useMutation(
            
            "login",
            loginUser,
        )
        return {
            mutateAsync,
            error,  
            data,
            isSuccess,          
        }
    }

    return {
        retriveAllUsers,
        useLoginUser,
    }

}

export default useUsers;