import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import ApiResponse from './ApiResponse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <ApiResponse />
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
