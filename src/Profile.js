import React, { useState } from "react"
import CreatePost from "./CreatePost"
import EditProfileForm from "./EditProfileForm"
import PostContainer from "./PostContainer"

function Profile({ setCurrentUser, currentUser }) {
    console.log(currentUser)
    const [showForm, setShowForm] = useState(false)
    const [showCreatePostForm, setShowCreatePostForm] = useState(false)
    const [posts, setPosts] = useState([])

    function handleDelete(deletePost) {
        // console.log(deletePost)
        const updatePosts = posts.filter((post) => post.id !== deletePost.id)
        setPosts(updatePosts)
    }

    function handleShowForm() {
        setShowForm(!showForm)
    }
    
    function handleShowCreate() {
        setShowCreatePostForm(!showCreatePostForm)
    }

    function handleAddPost(newPost) { 
        const updatedPostList = [...posts, newPost] 
        setPosts(updatedPostList) 
    }

    return (
        <div className="post-container">
            {currentUser ? ( <>
            <h3 className="welcome-user">{currentUser.name} </h3> 
            <img className="profilepic" src={currentUser.image} alt={currentUser.name}/> <p>{currentUser.bio}</p> </>) : (null)}
            <br/>
                <button onClick={handleShowForm}>Edit Profile</button>
                {showForm ? <EditProfileForm setCurrentUser={setCurrentUser} currentUser={currentUser}/> : null}
                <button onClick={handleShowCreate}>Add Post</button>
                {showCreatePostForm ? <CreatePost currentUser={currentUser} handleAddPost={handleAddPost}/> : null}
                {currentUser ? (
                <PostContainer currentUser={currentUser} setPosts={setPosts} posts={posts} handleAddPost={handleAddPost} handleDelete={handleDelete}/>
                ) : (null)}

        </div>
    )
}

export default Profile

