import React from "react"
// import AddComment from "./AddComment"

function PostCard({ id, photo, caption, likes=0 }) {

    // function handleDelete(id){
    //     fetch(`http://localhost:4000/posts/${id}`, {
    //         method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(() => {
    //         setCaption(null)
    //         history.push("/")
    //     })
        
    // }

    return (
        <>
            <li className="card">
                <img src={photo} alt={caption} />
                <h4>{caption}</h4>
                <p>Likes: {likes}</p>
                <button>Edit Post</button>
            </li>
            

    {/* {CommentsList} => {CommentCard} */}
    {/* <AddComment/> */}
        </>
    );
}

export default PostCard;
