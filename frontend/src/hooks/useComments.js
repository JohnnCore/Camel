import { useQuery, useMutation, useQueryClient } from 'react-query';
import commentsAPI from '../api/commentsAPI';

const useComments = () => {
    const queryClient = useQueryClient()
    const { listAllProductComments, postComment } = commentsAPI();

    const retriveAllProductComments = (id) => {
        const { data: commentsData, error: commentsError, isLoading: commentsLoading } = useQuery(
            ["products", id],
            () => listAllProductComments({ id }),
            {
                refetchOnWindowFocus: false,
            }
        )
        return {
            commentsData,
            commentsError,
            commentsLoading,
        }
    };



    const createComment = () => {
        const { mutate, error } = useMutation(
            "createComment",
            postComment,
        )
        return {
            mutate,
            error
        }
    }

    return {
        retriveAllProductComments,
        createComment,
    }
}

export default useComments;