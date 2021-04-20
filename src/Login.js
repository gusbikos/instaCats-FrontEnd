import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Set state in here for the username and password as empty string
// Make handleChange function to record and hold state when a user enters input
// Make a handleSubmit function to add in as a prop of the form 
// Go to backend and in users controller make a login function to get access to 1 user in the frontend.
// In handleSubmit function we make a POST request, strigify attributes from User (username, and password), and we get 
// back a user object and set that as our state. The state object will be passed down from App. 
function Login({ setCurrentUser }){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    }) 
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((user) => {
            localStorage.setItem("userId", user.id)
            setCurrentUser(user)
            history.push('/profile')
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                {/* {errors.map((error) => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))} */}
                    <input type="submit" value="Login" />
            </form>
        </div>
    )

}
export default Login