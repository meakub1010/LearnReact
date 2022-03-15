import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import Nav from './components/Nav';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <Router>
        <div className="App">
      {/* <Message messageContent="This is message content" /> */}
      {/* <Profile name="Muhammad" lastname="Eakub" /> */}
      {/* <Resume name="Muhammad Eakub" /> */}
      {/* <Counter></Counter> */}
      {/* <FunctionEvent /> */}
      {/* <ClassEvent /> */}

        <Nav />

      <Routes>
        <Route path='/' element={<Profile name="Muhammad" lastname="Eakub" />} />
        <Route path="/resume" element={<Resume name="Muhammad Eakub" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profile" element={<Profile name="Muhammad" lastname="Eakub" />} />
      </Routes>
        

      </div>
    </Router>

    
  );
}

export default App;
