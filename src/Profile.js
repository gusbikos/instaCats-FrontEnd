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
            <h3 className="welcome-user">{currentUser.name} </h3> 
            <img src={currentUser.image} alt={currentUser.name}/>
            <h5> Post Container</h5>
                <PostContainer currentUser={currentUser} setPosts={setPosts} posts={posts} handleAddPost={handleAddPost} handleDelete={handleDelete}/>
                <button onClick={handleShowForm}>Edit Profile</button>
                {showForm ? <EditProfileForm setCurrentUser={setCurrentUser} currentUser={currentUser}/> : null}
            <h4>Create Post</h4>
                <button onClick={handleShowCreate}>Add Post</button>
                {showCreatePostForm ? <CreatePost currentUser={currentUser} handleAddPost={handleAddPost}/> : null}
        </div>
    )
}

export default Profile

