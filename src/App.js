import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
// Import the needed components
import Authenticate from './components/Auth';
import ManageAccount from './components/ManageAccount';
import AppBar from './components/AppBar';

// This is a component named App
function App() {
  // state variable to track the signed in user
  const [currentUser, setCurrentUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  const onAuthenticate = (user) => {
    setCurrentUser(user);
  }

  // TODO: Sign out functionality

  return (
    <div className="App">
      <BrowserRouter>
        <AppBar currentUser={currentUser} />
        {/* <Routes>
          <Route index element={<Authenticate />} />
        </Routes> */}
        {currentUser ? (
          <ManageAccount currentUser={currentUser} />
        ) : (
          <Authenticate onAuthenticate={onAuthenticate} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
