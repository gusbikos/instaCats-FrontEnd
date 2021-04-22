import React, { useState } from "react"
import { useHistory } from "react-router-dom"

// Create Account Form Goes Here // 
// Props passed down from App // 
function CreateAccount({ setCurrentUser, newAccount }) {
    const [createUser, setCreateUser] = useState({
        name: "",
        username: "", 
        image: null,
        bio: "",
        password: "",
    })

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', createUser.name);
        formData.append('username', createUser.username);
        formData.append('image', createUser.image);
        formData.append('bio', createUser.bio);
        formData.append('password', createUser.password);


        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formData
        })
        .then((r) => r.json())
        // Why doesnt response.json work here? Error is:
        //VM751:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
        .then(user => {
            localStorage.setItem("userId", user.id)
            // console.log("LOCAL", localStorage.getItem("userId"));
            newAccount(user)
            console.log(user)
            history.push("/profile")
        })
    }

    function handleChange(e){
        setCreateUser({ [e.target.name]: e.target.value })
    }

    function onImageChange(e){ 
        setCreateUser({ image: e.target.files[0] });
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
                        value={createUser.username}
                        onChange={handleChange}
                    />
                <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={createUser.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={createUser.name}
                        onChange={handleChange}
                    />
                <label>Image</label>
                    <input type="file" 
                    accept="image/*" 
                    multiple={false} 
                    onChange={onImageChange} 
                    />
                <label>Bio</label>
                    <input
                        type="text"
                        name="bio"
                        value={createUser.bio}
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