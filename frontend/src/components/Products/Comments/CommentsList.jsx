import { useState } from "react";
import useComments from "../../../hooks/useComments";

const CommentsList = ({ id }) => {
    const [comment, setComment] = useState('');

    const { retriveAllProductComments, createComment } = useComments();

    const { commentsData, commentsError, commentsLoading } = retriveAllProductComments(id);
    const { mutate, error } = createComment();
    console.log(comment);
    if (commentsLoading) {
        return <h1>Loading...</h1>
    }

    if (commentsError) {
        return <h1>Error...</h1>
    }

    const sendPost = () => {
        const datapost = {
            id: id,
            comment: comment,
        }

        mutate({ datapost });
    }

    return (
        <div className="comments-section">
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type="submit" onClick={()=>sendPost()}>Sub</button>
            {commentsData.map((data) => {
                return (
                    <div key={data.id} className="comment">
                        <div className="user-avatar">{data.user.username}</div>
                        <div className="comment-content">
                            <p className="user-name">{data.user.username}</p>
                            <p className="comment-text">
                                {data.comment}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentsList;