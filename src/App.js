import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Profile from './Profile'
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  // Will hold the current user state
  const [currentUser, setCurrentUser] = useState(null);
  


  useEffect(() => {
    const token = true;
    if (token){
    fetch("http://localhost:4000/profile")
    .then(r => r.json())
    .then((user) => { 
      console.log(user)
      setCurrentUser(user);
  })
}
  }, []);
 
  
  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/createaccount">
          <CreateAccount/>
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}



export default App;
