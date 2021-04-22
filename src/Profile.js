import React, { useState } from "react"
import CreatePost from "./CreatePost"
import EditProfileForm from "./EditProfileForm"
import PostContainer from "./PostContainer"

function Profile({ setCurrentUser, currentUser }) {

    const [showForm, setShowForm] = useState(false)
    const [showCreatePostForm, setShowCreatePostForm] = useState(false)
    const [posts, setPosts] = useState([])

    function handleDelete(deletePost) {
        console.log(deletePost)
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
            <h2>{currentUser.name}</h2>
            <p>{currentUser.bio}</p>
            <button onClick={handleShowForm}>Edit Profile</button>
            {showForm ? <EditProfileForm setCurrentUser={setCurrentUser} currentUser={currentUser}/> : null}
            
            <h4>Create Post</h4>
                <button onClick={handleShowCreate}>Add Post</button>
                {showCreatePostForm ? <CreatePost currentUser={currentUser} handleAddPost={handleAddPost}/> : null}
            
                <PostContainer currentUser={currentUser} setPosts={setPosts} posts={posts} handleAddPost={handleAddPost} handleDelete={handleDelete}/>
                
        </div>
    )
}

export default Profile

