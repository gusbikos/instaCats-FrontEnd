import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Profile from './Profile'
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';


function App() {
  // Will hold the current user state
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()


  useEffect(() => {
    // const token = true;
    const userId = localStorage.getItem("userId");
    
    console.log("localStorage UserId", userId);

    if (userId){
      // debugger
    fetch(`http://localhost:4000/profile/${parseInt(userId)}`)
    .then(r => r.json())
    .then((user) => { 
      setCurrentUser(user)
      history.push("/profile")
  })
}
  }, []);

  function newAccount(newAccountFromForm){
    console.log(newAccountFromForm)
    setCurrentUser(newAccountFromForm)
  }
  
  console.log("CURRENT-APP", currentUser)
  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <main>
        <Switch>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/createaccount">
            <CreateAccount setCurrentUser={setCurrentUser} newAccount={newAccount}/>
          </Route>
          <Route exact path="/profile">
            <Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route>
            <Route path="/">
            </Route>
          </Route>
        </Switch>
      </main>
    </>
  );
}



export default App;
