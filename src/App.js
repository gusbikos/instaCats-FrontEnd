import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Profile from './Profile'
import { useState } from 'react';

function App() {
  // Will hold the current user state
  const [currentUser, setCurrentUser] = useState(null);

  
  return (
    <div className="App">
      <Header/>
      <Login setCurrentUser={setCurrentUser}/>
      <CreateAccount/>
      <Profile/>
    </div>
  );
}



export default App;
