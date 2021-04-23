import React from "react";
import { Link } from "react-router-dom"

// This will contain the buttons for Login, Logout, Signup

function Header({ setCurrentUser, currentUser }){

    const handleLogout = () => {
        localStorage.setItem("userId", null)
        setCurrentUser(null)
    }

    return (
        <div className="logo">
            {/* <a href="/" class="fa fa-instagram">instaCats</a> */}
            <h1 className="title"> instaCats! </h1>
                {currentUser ? (
                    <h2 className="welcome-user">Welcome {currentUser.username}</h2> ) : (<h2 className="links">Please <Link to="/login">Login</Link> or <Link to="/createaccount">Sign Up</Link></h2>)}
            <div>
                <Link to="/login" onClick={() => handleLogout()}>Logout</Link>
            </div>
        </div>

        
    
    )
}

export default Header;