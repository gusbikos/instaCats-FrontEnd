import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function EditProfileForm({ setCurrentUser, currentUser }) {
    const history = useHistory()
    const [edit, setEdit] = useState({
        name: "",
        username: "", 
        image: null,
        bio: "",
        password: "",
    })

    
        
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', edit.name);
        formData.append('username', edit.username);
        formData.append('image', edit.image);
        formData.append('bio', edit.bio);
        formData.append('password', edit.password);


            
        fetch("http://localhost:4000/profile", {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: formData
            })
            .then((r) => r.json())
            .then(user => {
                setCurrentUser(user)
                // console.log(user)
        })
    }
    
        function handleChange(e){
            setEdit({ [e.target.name]: e.target.value })
        }

        function onImageChange(e) { 
            setEdit({ image: e.target.files[0] });
        };
    
        function handleDelete(id){
            fetch(`http://localhost:4000/profile/${id}`, {
                method: 'DELETE',
            })
            .then((r) => r.json())
            .then(() => {
                setCurrentUser(null)
                history.push("/")
            })
            
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
                            value={edit.username}
                            onChange={handleChange}
                        />
                    <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={edit.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                    <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={edit.name}
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
                            value={edit.bio}
                            onChange={handleChange}
                        />
                    {/* {errors.map((error) => (
                    <p style={{ color: "red" }} key={error}>
                        {error}
                    </p>
                    ))} */}
                        <input type="submit" value="Submit" />
                </form>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
}

export default EditProfileForm;