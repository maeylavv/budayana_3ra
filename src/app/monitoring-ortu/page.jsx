import MonitoringSidebar from "../../components/MonitoringSidebar";
import StatCard from "../../components/StatCard";
import ScoreTable from "../../components/ScoreTable";
import { PARENT_STUDENT, TITLE_INFO } from "../../lib/dummyData";

export default function MonitoringOrtuDashboard() {
  const student = PARENT_STUDENT;
  const titleInfo = TITLE_INFO[student.title];

  // Dummy logic for Topic Progress
  const topicProgress = [
    { name: "Rumah Adat & Pakaian", progress: 80, color: "bg-orange-400" },
    { name: "Makanan", progress: 65, color: "bg-green-500" },
    { name: "Tarian & Alat Musik", progress: 100, color: "bg-blue-400" }
  ];

  return (
    <div className="flex min-h-screen bg-[#FBF6EE]">
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex items-center gap-6 mb-8 border-b border-[#E8D9C0] pb-6">
            <div className="w-24 h-24 rounded-full bg-[#FEF6DF] border-4 border-[#E8A030] flex items-center justify-center text-5xl shadow-sm">
              {student.avatar}
            </div>
            <div>
              <h1 className="font-fredoka font-bold text-3xl text-[#7B4F2E] mb-2">{student.name}</h1>
              <span className="px-4 py-1.5 bg-[#E8A030] text-white rounded-full font-fredoka font-semibold text-sm shadow-sm">
                Kelas {student.class}
              </span>
            </div>
          </div>

          <h2 className="font-fredoka font-bold text-[#7B4F2E] text-xl mb-4">Statistik Belajar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <StatCard 
              value={`${student.storiesCompleted}/${student.totalStories}`} 
              label="Cerita Selesai" 
              bg="bg-[#4ade80]" 
              textColor="text-[#064e3b]"
            />
            <StatCard 
              value={student.totalXP} 
              label="Total XP" 
              bg="bg-[#c084fc]" 
            />
            <StatCard 
              value={student.title} 
              label="Gelar Saat Ini" 
              bg="bg-[#f87171]" 
              icon={titleInfo?.icon}
            />
            <StatCard 
              value={`${student.averageScore}%`} 
              label="Rata-rata Nilai Quiz" 
              bg="bg-[#fb923c]" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E8D9C0] shadow-sm">
              <h3 className="font-fredoka font-bold text-[#7B4F2E] text-lg mb-4">Ringkasan per Topik</h3>
              <div className="space-y-4">
                {topicProgress.map((topic, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-fredoka font-semibold text-[#5C3A1E] mb-1">
                      <span>{topic.name}</span>
                      <span>{topic.progress}%</span>
                    </div>
                    <div className="w-full bg-[#FAF3E8] rounded-full h-3">
                      <div 
                        className={`${topic.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FEF6DF] p-6 rounded-2xl border border-[#FDE68A] shadow-sm flex flex-col justify-center">
              <h3 className="font-fredoka font-bold text-[#92400E] text-lg mb-2">Catatan untuk Orang Tua</h3>
              <p className="font-fredoka text-[#B45309] leading-relaxed">
                Halo Ayah/Bunda! <strong>{student.name}</strong> sedang sangat bersemangat mengeksplorasi budaya. 
                Nilainya pada topik "Tarian & Alat Musik" sangat sempurna. Terus dukung {student.name} ya!
              </p>
            </div>
          </div>

          <ScoreTable history={student.scoreHistory} title="Riwayat Skor" />

        </div>
      </main>
    </div>
  );
}
