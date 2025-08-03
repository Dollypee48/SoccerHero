import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

const MatchCard = ({ match }) => {
  const { homeTeam, awayTeam, utcDate, id } = match;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 mb-4 transition hover:shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {homeTeam.name} <span className="text-green-600">vs</span> {awayTeam.name}
          </h3>
          <p className="text-sm text-gray-500">{formatDate(utcDate)}</p>
        </div>
        <Link
          to={`/match/${id}`}
          className="mt-2 md:mt-0 inline-block text-green-600 text-sm font-medium border border-green-600 px-4 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MatchCard;
