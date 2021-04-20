import React from "react"
import AddComment from "./AddComment"

function PostCard({id, photo, caption, likes }) {
    return (
        <>
        <li className="card">
            <img src={photo} alt={caption} />
            <h4>{caption}</h4>
            <p>Likes: {likes}</p>
        </li>
    {/* {CommentsList} => {CommentCard} */}
    {/* <AddComment/> */}
    </>
    );
}

export default PostCard;
