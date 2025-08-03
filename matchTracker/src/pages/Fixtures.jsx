import { useEffect, useState } from 'react';
import MatchCard from '../components/MatchCard';
import { getFixtures } from '../services/api';
import Loader from '../components/Loader';

const leagueOptions = [
  { id: 2021, name: 'Premier League' },
  { id: 2002, name: 'Bundesliga' },
  { id: 2014, name: 'La Liga' },
  { id: 2019, name: 'Serie A' },
  { id: 2015, name: 'Ligue 1' }
];

const Fixtures = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState(2021);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const data = await getFixtures(league);
        setMatches(data.matches);
      } catch (error) {
        console.error('Error fetching fixtures:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [league]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header and League Select */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">📅 Upcoming Fixtures</h2>
          <select
            className="border border-green-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={league}
            onChange={(e) => setLeague(Number(e.target.value))}
          >
            {leagueOptions.map((l) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
        </div>

        {/* Match Cards */}
        {loading ? (
          <Loader />
        ) : matches.length ? (
          matches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))
        ) : (
          <p className="text-center text-gray-600 mt-10">No upcoming fixtures found.</p>
        )}
      </div>
    </div>
  );
};

export default Fixtures;
