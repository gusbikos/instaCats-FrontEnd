import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function CreatePost({ currentUser, handleAddPost }) {
    const history = useHistory()
    // const { photo, caption } = currentUser.posts
    const [createPost, setCreatePost] = useState({
        photo: null,
        caption: "",
        user_id: currentUser.id,
        likes: 0
    })


    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('photo', createPost.photo);
        formData.append('caption', createPost.caption);

        setCreatePost ({ 
            photo: null, 
            caption: ""
        })

        fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: formData
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
        setCreatePost({ [e.target.name]: e.target.value })
    }
    
    function onImageChange(e){ 
        setCreatePost({ photo: e.target.files[0] });
    };

    return (
        <div>
            <h1>Create Post Form</h1>        
                <form onSubmit={handleSubmit}>
                    <label>Photo</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            multiple={false} 
                            onChange={onImageChange} 
                        />
                    <label>Caption</label>
                        <input
                            type="text"
                            name="caption"
                            autoComplete="off"
                            value={setCreatePost.caption}
                            onChange={handleChange}
                        />
                        <input type="submit" value="Submit" /> 
                    </form> 
                </div>

    )
}

export default CreatePost