import { useEffect, useState } from 'react';
import { getStandings } from '../services/api';
import LeagueTable from '../components/LeagueTable';
import Loader from '../components/Loader';

const leagueOptions = [
  { id: 2021, name: 'Premier League' },
  { id: 2002, name: 'Bundesliga' },
  { id: 2014, name: 'La Liga' },
  { id: 2019, name: 'Serie A' },
  { id: 2015, name: 'Ligue 1' }
];

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState(2021);

  useEffect(() => {
    const fetchStandings = async () => {
      setLoading(true);
      try {
        const data = await getStandings(league);
        setStandings(data.standings);
      } catch (error) {
        console.error('Error fetching standings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [league]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
      
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">🏆 League Standings</h2>
          <select
            className="border border-green-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={league}
            onChange={(e) => setLeague(Number(e.target.value))}
          >
            {leagueOptions.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

       
        {loading ? (
          <Loader />
        ) : standings.length ? (
          <LeagueTable standings={standings} />
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No standings data found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Standings;
