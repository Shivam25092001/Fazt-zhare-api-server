import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/home.js';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/get/:shortUrl" element={<Home />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;