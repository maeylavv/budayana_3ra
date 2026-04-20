import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MonitoringSidebar from "../../components/MonitoringSidebar";
import StatCard from "../../components/StatCard";
import { STUDENTS, TITLE_INFO } from "../../lib/dummyData";

export default function MonitoringGuruDashboard() {
  const totalStudents = STUDENTS.length;
  const avgScore = Math.round(STUDENTS.reduce((acc, curr) => acc + curr.averageScore, 0) / totalStudents);
  const avgXP = Math.round(STUDENTS.reduce((acc, curr) => acc + curr.totalXP, 0) / totalStudents);

  return (
    <div className="flex min-h-screen bg-[#FBF6EE]">
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="font-fredoka font-bold text-3xl text-[#7B4F2E]">Daftar Profil Siswa</h1>
              <p className="font-fredoka text-[#955C2E] mt-1">Pantau perkembangan seluruh siswa di kelasmu</p>
            </div>
            
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder="Cari siswa..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-[#E8D9C0] focus:outline-none focus:border-[#E8A030] font-fredoka text-[#5C3A1E] shadow-sm"
              />
              <Search className="absolute left-3 top-2.5 text-[#955C2E]" size={18} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              value={totalStudents} 
              label="Total Siswa" 
              bg="bg-[#955C2E]" 
            />
            <StatCard 
              value={avgScore} 
              label="Rata-rata Nilai" 
              bg="bg-[#E8A030]" 
            />
            <StatCard 
              value={avgXP} 
              label="Rata-rata XP" 
              bg="bg-[#4A7c59]" 
            />
          </div>

          <div className="bg-white rounded-2xl border border-[#E8D9C0] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#955C2E] text-white font-fredoka text-sm">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-center">Nama</th>
                    <th className="px-6 py-4 font-semibold text-center">Username</th>
                    <th className="px-6 py-4 font-semibold text-center">Kelas</th>
                    <th className="px-6 py-4 font-semibold text-center">Total XP</th>
                    <th className="px-6 py-4 font-semibold text-center">Gelar</th>
                    <th className="px-6 py-4 font-semibold text-center">Rata-rata Nilai</th>
                    <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="font-fredoka text-[#5C3A1E] text-sm">
                  {STUDENTS.map((student) => (
                    <tr key={student.id} className="border-b border-[#E8D9C0] hover:bg-[#FAF3E8] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#FEF6DF] border-2 border-[#E8A030] flex items-center justify-center text-xl">
                            {student.avatar}
                          </div>
                          <span className="font-semibold">{student.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">{student.username}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-[#F2E5D3] rounded-md font-semibold">{student.class}</span>
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-[#E8A030]">{student.totalXP}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-1">
                          <span>{TITLE_INFO[student.title]?.icon}</span>
                          <span>{student.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-bold">
                        {student.averageScore}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Link 
                          to={`/monitoring-guru/${student.id}`}
                          className="inline-flex items-center gap-1 px-4 py-2 bg-[#E8A030] text-white rounded-lg hover:bg-[#d98f20] transition-colors font-semibold shadow-sm"
                        >
                          <Search size={14} />
                          Lihat Profil
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
