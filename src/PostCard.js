import React, {useState} from "react"
// import AddComment from "./AddComment"
import EditPost from "./EditPost";

function PostCard({ id, photo, caption, likes, post, setPosts, handleDelete }) {
    const [showEdit, setShowEdit] = useState(false)
    const [editCaption, setEditCaption] = useState(caption)

    // const {photo, caption, likes} = post

    function handleClick(){
        setShowEdit(!showEdit);
    }

    return (
        <>
            <li className="card">
                <img src={photo} alt={caption} />
                <h4>{editCaption}</h4>
                <p>Likes: {likes}</p>
                <button onClick={handleClick}>Edit</button>{ showEdit ? <EditPost  post={post} caption={editCaption} handleDelete={(e) => {handleDelete(e)}} setEditCaption={setEditCaption}/> : null }
            </li>


    {/* {CommentsList} => {CommentCard} */}
    {/* <AddComment/> */}
        </>
    );
}

export default PostCard;
