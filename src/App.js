import { useState } from 'react';

import './App.css';
// Import the Heading component
import ManageAccount from './components/ManageAccount';
import AppBar from './components/AppBar';

// This is a component named App
function App() {
  // state variable to track the signed in user
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <div className="App">
      <AppBar />
      <ManageAccount />
    </div>
  );
}

export default App;
