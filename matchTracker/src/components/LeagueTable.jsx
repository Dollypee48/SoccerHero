const LeagueTable = ({ standings }) => {
  const table = standings?.[0]?.table || [];

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-xl shadow-inner">
      <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3 text-center">P</th>
              <th className="px-4 py-3 text-center">W</th>
              <th className="px-4 py-3 text-center">D</th>
              <th className="px-4 py-3 text-center">L</th>
              <th className="px-4 py-3 text-center">GD</th>
              <th className="px-4 py-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {table.map((team) => (
              <tr
                key={team.team.id}
                className="border-t hover:bg-green-50 transition"
              >
                <td className="px-4 py-2 font-medium">{team.position}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="block font-semibold">{team.team.name}</span>
                </td>
                <td className="px-4 py-2 text-center">{team.playedGames}</td>
                <td className="px-4 py-2 text-center">{team.won}</td>
                <td className="px-4 py-2 text-center">{team.draw}</td>
                <td className="px-4 py-2 text-center">{team.lost}</td>
                <td className="px-4 py-2 text-center">{team.goalDifference}</td>
                <td className="px-4 py-2 text-center font-bold text-green-700">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
