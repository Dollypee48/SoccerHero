import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Standings from './pages/Standings';
import MatchDetails from './pages/MatchDetails';
import News from './pages/News'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/news" element={<News />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
