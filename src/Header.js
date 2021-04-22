import React from "react";
import { Link } from "react-router-dom"

// This will contain the buttons for Login, Logout, Signup

function Header({setCurrentUser, currentUser}){

    const handleLogout = () => {
        localStorage.setItem("userId", null)
        setCurrentUser(null)
    }

    return (
        <div className="header">
            <h1 className="title"> instaCats! </h1>
                {currentUser ? (
                <h2>Welcome {currentUser.username}</h2>) : (<h2>Please <Link to="/login">Login</Link> or <Link to="/createaccount">Sign Up</Link></h2>)}
                <Link to="/" onClick={() => handleLogout()}>Logout</Link>
        </div>
    )
}




export default Header;