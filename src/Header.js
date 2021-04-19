import React from "react";

// This will contain the buttons for Login, Logout, Signup

function Header({currentUser}){
    return (
        <>
        <h1> instaCats! </h1>
        <nav>
        {currentUser ? (
        <h2>Welcome {currentUser.username}</h2>) : (<h2>Please Login or Sign-Up</h2>)}

        </nav>
        </>
    )
}

export default Header;