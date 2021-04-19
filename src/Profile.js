import React from "react"
import CreatePost from "./CreatePost"
import PostContainer from "./PostContainer"

function Profile({currentUser}) {
    // 
    return (
        <div>
        <h3>Profile</h3>
        <h4>Create Post</h4>
        <h5> Post Container</h5>
            <CreatePost/>
            <PostContainer/>
        </div>
    )
}

export default Profile