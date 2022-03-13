import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      {/* <Message messageContent="This is message content" /> */}
      {/* <Profile name="Muhammad" lastname="Eakub" /> */}
      <Resume name="Muhammad Eakub" />
      {/* <Counter></Counter> */}

    </div>
  );
}

export default App;
