import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function CreatePost({ currentUser, handleAddPost }) {
    const history = useHistory()
    const { photo, caption } = currentUser.posts
    const [formData, setFormData] = useState({
        photo: "",
        caption: "",
        user_id: currentUser.id,
        likes: 0
    })


    function handleSubmit(e) {
        e.preventDefault()

        setFormData ({ 
            photo: "", 
            caption: ""
        })

        fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((post) => {
            localStorage.setItem("postId", post.id)
            // console.log("LOCAL", localStorage.getItem("postId"));
            handleAddPost(post)
            // console.log(post)
            history.push('/profile')
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <h1>Create Post Form</h1>        
                <form onSubmit={handleSubmit}>
                    <label>Photo</label>
                        <input
                            type="text"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                        />
                    <label>Caption</label>
                        <input
                            type="text"
                            name="caption"
                            autoComplete="off"
                            value={formData.caption}
                            onChange={handleChange}
                        />
                        <input type="submit" value="Submit" /> 
                    </form> 
                </div>

    )
}

export default CreatePost