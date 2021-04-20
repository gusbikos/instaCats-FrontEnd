import React, { useState } from "react"
import CreatePost from "./CreatePost"
import EditProfileForm from "./EditProfileForm"
import PostContainer from "./PostContainer"


function Profile({ setCurrentUser, currentUser}) {
    const [showForm, setShowForm] = useState(false)

    function handleShowForm() {
        setShowForm(!showForm)
    }

    console.log("CURRENT", currentUser)

    return (
        <div>
        <h3>Profile</h3>
        <h4>Create Post</h4>
        <h5> Post Container</h5>
            {/* <CreatePost/> */}
            <PostContainer currentUser={currentUser}/>
            <button onClick={handleShowForm}>Edit Profile</button>
            {showForm ? <EditProfileForm setCurrentUser={setCurrentUser} currentUser={currentUser}/> : null}
        </div>
    )
}

export default Profile

