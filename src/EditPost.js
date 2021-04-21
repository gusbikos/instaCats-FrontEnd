import React, { useState } from "react";
// import {useHistory} from "react-router-dom";

function EditPost({post, caption, handleDelete, setEditCaption}) {
    console.log(post)
    const [formData, setFormData] = useState("")

    // const history = useHistory();

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
            
        fetch(`http://localhost:4000/posts/${post.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
            })
            .then((r) => r.json())
            .then(data => {
                console.log(data)
                setEditCaption(data.caption)
        })
    }

    function handleDeleteFetch(id){
        fetch(`http://localhost:4000/posts/${post.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((post) => {
            handleDelete(post);
            // history.push("/profile");
        })
        
    }

    return (
        <div>
            <p>Edit Post</p>  
                <form onSubmit={handleSubmit}>      
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
                <button onClick={handleDeleteFetch}>Delete</button>
        </div>
        )
}

export default EditPost