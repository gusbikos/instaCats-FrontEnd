import React from "react";
import { Link } from "react-router-dom"

// This will contain the buttons for Login, Logout, Signup

function Header({setCurrentUser, currentUser}){
    return (
        <>
        <h1> instaCats! </h1>
        <nav>
        {currentUser ? (
        <h2>Welcome {currentUser.username}</h2>) : (<h2>Please <Link to="/login">Login</Link> or <Link to="/createaccount">Sign Up</Link></h2>)}
        
        <Link to="/" onClick={() => setCurrentUser(null)}>Logout</Link>
        
        </nav>
        </>
    )
}

// function NavBar({ user }) {
//     return (
//       <header>
//         <div>
//           <Link to="/">Home</Link>
//         </div>
//         <div>
//           {user ? (
//             <>
//               <Link to="/profile">Profile</Link>
//               <button>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/signup">Signup</Link>
//               <Link to="/login">Login</Link>
//             </>
//           )}
//         </div>
//       </header>
//     );
//   }



export default Header;