import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 mb-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">⚽SoccerHero</h1>

      
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-green-600 transition">Home</Link>
          <Link to="/fixtures" className="text-gray-600 hover:text-green-600 transition">Fixtures</Link>
          <Link to="/standings" className="text-gray-600 hover:text-green-600 transition">Standings</Link>
          <Link to="/news" className="text-gray-600 hover:text-green-600 transition">News</Link>
        </nav>

     
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/fixtures" className="text-gray-600 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>Fixtures</Link>
            <Link to="/standings" className="text-gray-600 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>Standings</Link>
            <Link to="/news" className="text-gray-600 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>News</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
