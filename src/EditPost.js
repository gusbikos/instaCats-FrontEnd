import React, { useState } from "react"

function EditPost() {
    const [caption, setCaption] = useState("")

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleDelete(id){
        fetch(`http://localhost:4000/profile/${id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => {
            setCaption(null)
            history.push("/")
        })
        
    }

    function handleSubmit(e) {
        e.preventDefault()
            
        fetch("http://localhost:4000/posts", {
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
        })
    }

    return (
        <div>
            <h1>Edit Post</h1>  
                <form onsubmit={handleSubmit}>      
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
export default EditPost