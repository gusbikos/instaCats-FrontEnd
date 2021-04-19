import React, { useState } from "react"

function EditProfileForm( {setCurrentUser, currentUser}) {
        const [formData, setFormData] = useState({
            name: "",
            username: "", 
            image: "",
            bio: "",
            password: "",
        })
    
        function handleSubmit(e) {
            e.preventDefault()
            
            fetch("http://localhost:4000/profile", {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then((r) => r.json())
            .then(user => {
                setCurrentUser(user)
                // console.log(user)
            })
        }
    
        function handleChange(e){
            setFormData({...formData, [e.target.name]: e.target.value})
        }
    
    
        return (
            <div>
            <h3>Profile</h3>
                <form onSubmit={handleSubmit}>
                    {/* <h1>Login</h1> */}
                    <label>Username</label>
                    <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    value={formData.username}
                    onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    />
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <label>Image</label>
                    <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    />
                    <label>Bio</label>
                    <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    />
                    {/* {errors.map((error) => (
                    <p style={{ color: "red" }} key={error}>
                        {error}
                    </p>
                    ))} */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
    )
}

export default EditProfileForm