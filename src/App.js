import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Profile from './Profile'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Login/>
      <CreateAccount/>
      <Profile/>
    </div>
  );
}

export default App;
