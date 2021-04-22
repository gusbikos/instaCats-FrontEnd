import React, { useState, useEffect } from "react"
// import AddComment from "./AddComment"
import EditPost from "./EditPost";

function PostCard({ id, photo, caption, likes, post, setPosts, handleDelete }) {
    const [showEdit, setShowEdit] = useState(false)
    const [editCaption, setEditCaption] = useState(caption)
    const [increaseLikes, setIncreaseLikes] = useState(likes)

    function handleLikeClick() {
        const updateObj = {
            likes: post.likes++,
        }
    
        fetch(`http://localhost:4000/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then((r) => r.json())
        .then(data => {
            setIncreaseLikes(data.likes);
            console.log(data.likes)
        });
    }

    function handleClick() {
        setShowEdit(!showEdit);
    }

    return (
        <>
            <div className="postcard">
                <img className="postimage" src={photo} alt={caption} />
                <h4>{editCaption}</h4>
                <button onClick={() => handleLikeClick()}> 😻 {increaseLikes}</button>
                <button onClick={handleClick}>Edit</button>{ showEdit ? <EditPost  post={post} caption={editCaption} handleDelete={(e) => {handleDelete(e)}} setEditCaption={setEditCaption}/> : null }
            </div>
    {/* {CommentsList} => {CommentCard} */}
    {/* <AddComment/> */}
        </>
    );
}

export default PostCard;
