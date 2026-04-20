

import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import StatCard from "../../../components/StatCard";
import ScoreTable from "../../../components/ScoreTable";
import { getStudentById, TITLE_INFO } from "../../../lib/dummyData";

export default function StudentProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const student = getStudentById(params.studentId);

  if (!student) {
    return (
      <div className="flex min-h-screen bg-[#FBF6EE]">
        <MonitoringSidebar role="guru" />
        <main className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-fredoka font-bold text-2xl text-[#955C2E] mb-4">Siswa tidak ditemukan</h1>
            <button 
              onClick={() => navigate("/monitoring-guru")}
              className="px-6 py-2 bg-[#E8A030] text-white rounded-full font-fredoka hover:bg-[#d98f20] transition-colors"
            >
              Kembali
            </button>
          </div>
        </main>
      </div>
    );
  }

  const titleInfo = TITLE_INFO[student.title];

  return (
    <div className="flex min-h-screen bg-[#FBF6EE]">
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          <button 
            onClick={() => navigate("/monitoring-guru")}
            className="flex items-center gap-2 text-[#955C2E] hover:text-[#7B4F2E] font-fredoka font-semibold mb-6 transition-colors"
          >
            <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
              <ChevronLeft size={20} />
            </div>
          </button>

          <div className="flex items-center gap-6 mb-8 border-b border-[#E8D9C0] pb-6">
            <div className="w-24 h-24 rounded-full bg-[#FEF6DF] border-4 border-[#E8A030] flex items-center justify-center text-5xl shadow-sm">
              {student.avatar}
            </div>
            <div>
              <h1 className="font-fredoka font-bold text-3xl text-[#7B4F2E] mb-2">{student.name}</h1>
              <span className="px-4 py-1.5 bg-[#E8A030] text-white rounded-full font-fredoka font-semibold text-sm shadow-sm">
                Kelas {student.class.replace('A','').replace('B','')}
              </span>
            </div>
          </div>

          <h2 className="font-fredoka font-bold text-[#7B4F2E] text-xl mb-4">Statistik</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
            <div className="bg-white p-6 rounded-2xl border border-[#E8D9C0] shadow-sm flex flex-col items-center justify-center min-h-[300px]">
               <h3 className="font-fredoka font-bold text-[#7B4F2E] w-full text-left mb-4">Analisis Level Literasi Siswa</h3>
               {/* Dummy Radar Chart placeholder */}
               <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full"></div>
                  <div className="absolute inset-4 border-2 border-dashed border-gray-200 rounded-full"></div>
                  <div className="absolute inset-0 border border-gray-200"></div>
                  <div className="absolute top-1/2 left-0 right-0 border-t border-gray-200"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 border-l border-gray-200"></div>
                  
                  {/* Dummy Shape */}
                  <div className="absolute inset-0" style={{
                    background: "rgba(244, 114, 182, 0.3)",
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                    transform: "scale(0.8)"
                  }}></div>
                  <div className="absolute inset-0" style={{
                    background: "rgba(96, 165, 250, 0.4)",
                    clipPath: "polygon(50% 20%, 80% 50%, 50% 100%, 20% 50%)",
                    transform: "scale(0.6)"
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center font-fredoka font-bold text-xs text-gray-500">
                    Radar Chart
                  </div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8D9C0] shadow-sm flex flex-col items-center justify-center min-h-[300px]">
               <h3 className="font-fredoka font-bold text-[#7B4F2E] w-full text-left mb-4">Minat Budaya Terbesar</h3>
               {/* Dummy Bar Chart placeholder */}
               <div className="w-full h-48 flex items-end justify-around gap-2 px-4 pb-6 pt-10 border-b-2 border-l-2 border-gray-200 relative">
                  <div className="w-6 bg-yellow-400 h-[60%] rounded-t-sm"></div>
                  <div className="w-6 bg-purple-500 h-[40%] rounded-t-sm"></div>
                  <div className="w-6 bg-teal-400 h-[80%] rounded-t-sm"></div>
                  <div className="w-6 bg-blue-500 h-[50%] rounded-t-sm"></div>
                  
                  <div className="w-6 bg-yellow-400 h-[70%] rounded-t-sm ml-4"></div>
                  <div className="w-6 bg-purple-500 h-[85%] rounded-t-sm"></div>
                  <div className="w-6 bg-teal-400 h-[60%] rounded-t-sm"></div>
                  <div className="w-6 bg-blue-500 h-[40%] rounded-t-sm"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center font-fredoka font-bold text-xs text-gray-500 pointer-events-none">
                    Grouped Bar Chart
                  </div>
               </div>
            </div>
          </div>

          <ScoreTable history={student.scoreHistory} />

        </div>
      </main>
    </div>
  );
}
