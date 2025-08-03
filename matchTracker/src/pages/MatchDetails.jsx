import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { formatDate } from '../utils/formatDate';
import { getMatchDetails } from '../services/api';

const MatchDetails = () => {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const data = await getMatchDetails(id);
        setMatch(data.match);
      } catch (error) {
        console.error('Error fetching match details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatch();
  }, [id]);

  if (loading) return <Loader />;

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-red-500 text-lg">Match details not found.</p>
      </div>
    );
  }

  const { homeTeam, awayTeam, utcDate, status, score } = match;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Match Details</h2>
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto text-center">
        <h3 className="text-xl font-semibold mb-3">{homeTeam.name} vs {awayTeam.name}</h3>
        <p className="text-gray-700 mb-1">📅 Date: {formatDate(utcDate)}</p>
        <p className="text-gray-700 mb-1">⏱️ Status: {status}</p>
        {score?.fullTime?.home !== null && score?.fullTime?.away !== null ? (
          <p className="text-gray-900 font-medium mt-2">
            🏁 Final Score: <span className="font-bold">{score.fullTime.home}</span> - <span className="font-bold">{score.fullTime.away}</span>
          </p>
        ) : (
          <p className="text-gray-500 mt-2">Score not available yet.</p>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;
