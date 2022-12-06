import { useState } from 'react';

import './App.css';
// Import the needed components
import Authenticate from './components/Auth';
import ManageAccount from './components/ManageAccount';
import AppBar from './components/AppBar';

// This is a component named App
function App() {
  // state variable to track the signed in user
  const [currentUser, setCurrentUser] = useState(null);

  const onAuthenticate = (user) => {
    setCurrentUser(user);
  }

  // TODO: Sign out functionality

  return (
    <div className="App">
      <AppBar currentUser={currentUser} />
      {currentUser ? (
        <ManageAccount currentUser={currentUser} />
      ) : (
        <Authenticate onAuthenticate={onAuthenticate} />
      )}
    </div>
  );
}

export default App;
