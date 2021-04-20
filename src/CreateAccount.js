import React, { useState } from "react"
import { useHistory } from "react-router-dom"

// Create Account Form Goes Here // 
// Props passed down from App // 
function CreateAccount({setCurrentUser, newAccount}) {
    const [formData, setFormData] = useState({
        name: "",
        username: "", 
        image: "",
        bio: "",
        password: "",
    })

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()



        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.text())
        // Why doesnt response.json work here? Error is:
        //VM751:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
        .then(user => {
            newAccount(user)
            console.log(user)
            history.push("/profile")
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

export default CreateAccount