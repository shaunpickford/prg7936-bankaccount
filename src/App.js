import './App.css';
// Import the Heading component
import HeadingComponent from './components/Heading';
import Form from './components/Form';
import AppBar from './components/AppBar';

// This is a component named App
function App() {
  return (
    <div className="App">
      <AppBar />
      <Form />
    </div>
  );
}

export default App;
