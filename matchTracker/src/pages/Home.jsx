import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNews } from '../services/api';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data.articles.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch news:', error.message);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
     
      <section
        className="relative h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/07/epl_best-european-players.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            ⚽ Welcome to <span className="text-green-400">SoccerHero</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Your all-in-one football companion – Live scores, League tables, and match breakdowns.
          </p>
          <Link to="/fixtures">
            <button className="mt-6 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transition shadow-md">
              Explore Fixtures
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: '📺 Live Fixtures',
            desc: 'Real-time updates on all matches, including live scores and key match moments.',
          },
          {
            title: '📊 League Standings',
            desc: 'View up-to-date league tables with points, goals, and team form.',
          },
          {
            title: '📅 Match Details',
            desc: 'Full match breakdowns – stats, lineups, results, and history.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center border border-green-100"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

     
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          📰 Latest Football News
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">No news available at the moment.</p>
          ) : (
            news.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition h-full border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>
              </a>
            ))
          )}
        </div>
      </section>

      
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-green-700">⚽ SoccerHero</h3>
            <p>Your go-to football app for fixtures, tables, and breaking news across the world.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/fixtures" className="hover:underline">Fixtures</Link></li>
              <li><Link to="/tables" className="hover:underline">League Tables</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Contact</h4>
            <p>Email: support@matchtracker.app</p>
            <p>Twitter: @MatchTrackerApp</p>
            <p>Phone: +234 000 0000 000</p>
          </div>
        </div>

        <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} Match Tracker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
