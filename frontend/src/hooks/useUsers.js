import { useQuery, useMutation,useQueryClient } from 'react-query';
import usersAPI from '../api/usersAPI';

const useUsers = () => {
    const queryClient = useQueryClient()
    const { listAllUsers  } = usersAPI();

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

    const usePostData = () => {
        return useMutation(postDataFunction);
    };

    return {
        retriveAllUsers,
    }

}

export default useUsers;