import { ISLAND_COLORS, TOPIC_ICONS } from "../lib/dummyData";

export default function ScoreTable({ history, title = "Riwayat Pengerjaan" }) {
  const getBloomColor = (bloom) => {
    if (bloom === "C1-C2") return "text-blue-600 bg-blue-50";
    if (bloom === "C3-C4") return "text-purple-600 bg-purple-50";
    if (bloom === "C5-C6") return "text-red-600 bg-red-50";
    return "text-gray-600 bg-gray-50";
  };

  const getScoreColor = (percent) => {
    if (percent >= 80) return "text-green-600";
    if (percent >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="mt-8">
      <h3 className="font-fredoka font-bold text-[#7B4F2E] text-lg mb-4">{title}</h3>
      <div className="bg-white rounded-2xl border border-[#E8D9C0] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#955C2E] text-white font-fredoka">
              <tr>
                <th className="px-4 py-3 rounded-tl-xl text-center">Pulau</th>
                <th className="px-4 py-3 text-center">Topic</th>
                <th className="px-4 py-3 text-center">Level</th>
                <th className="px-4 py-3 text-center">Bloom</th>
                <th className="px-4 py-3 text-center">Skor</th>
                <th className="px-4 py-3 text-center">Waktu</th>
                <th className="px-4 py-3 rounded-tr-xl text-center">Tanggal</th>
              </tr>
            </thead>
            <tbody className="font-fredoka text-[#5C3A1E]">
              {history.length > 0 ? (
                history.map((item, index) => (
                  <tr key={index} className="border-b border-[#E8D9C0] hover:bg-[#FAF3E8]">
                    <td className="px-4 py-3 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${ISLAND_COLORS[item.island] || 'bg-gray-100'}`}>
                        {item.island}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex items-center justify-center gap-2">
                      <span>{TOPIC_ICONS[item.topic] || "📝"}</span>
                      <span>{item.topic}</span>
                    </td>
                    <td className="px-4 py-3 text-center">{item.level}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold ${getBloomColor(item.bloom)}`}>
                        {item.bloom}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-center font-bold ${getScoreColor(item.scorePercent)}`}>
                      {item.score}
                    </td>
                    <td className="px-4 py-3 text-center">{item.time}</td>
                    <td className="px-4 py-3 text-center">{item.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-4 py-8 text-center text-[#7B4F2E] font-medium opacity-70">
                    Belum ada riwayat pengerjaan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
