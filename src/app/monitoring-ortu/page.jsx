import MonitoringSidebar from "../../components/MonitoringSidebar";
import ScoreTable from "../../components/ScoreTable";
import { PARENT_STUDENT } from "../../lib/dummyData";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import "../../pages/Profile.css";
import "../../pages/Results.css";

const radarData = [
  { subject: 'Reading', A: 120, B: 110, fullMark: 150 },
  { subject: 'Writing', A: 98, B: 130, fullMark: 150 },
  { subject: 'Listening', A: 86, B: 130, fullMark: 150 },
  { subject: 'Speaking', A: 99, B: 100, fullMark: 150 },
  { subject: 'Grammar', A: 85, B: 90, fullMark: 150 },
  { subject: 'Vocab', A: 65, B: 85, fullMark: 150 },
];

const barData = [
  { name: '2020 Q1', Kent: 4000, Lincoln: 2400, Mersey: 2400, York: 2400 },
  { name: '2020 Q2', Kent: 3000, Lincoln: 1398, Mersey: 2210, York: 2210 },
  { name: '2020 Q3', Kent: 2000, Lincoln: 9800, Mersey: 2290, York: 2290 },
  { name: '2020 Q4', Kent: 2780, Lincoln: 3908, Mersey: 2000, York: 2000 },
];

export default function MonitoringOrtuDashboard() {
  const student = PARENT_STUDENT;

  return (
    <div className="profile-layout">
      <MonitoringSidebar role="ortu" />
      
      <main className="profile-main">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ fontSize: '3rem', width: '120px', height: '120px', borderColor: '#7B4F2E', backgroundColor: '#F2E5D3' }}>
            {student.avatar}
          </div>
          <div className="profile-top-text" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontSize: '2.5rem', fontWeight: '800' }}>{student.name}</h1>
            <div className="profile-grade-badge" style={{ backgroundColor: '#f3a64c', color: 'white', fontSize: '1.2rem', padding: '6px 24px', borderRadius: '999px', fontWeight: 'bold' }}>
              Kelas {student.class}
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Statistik</h2>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="stat-card green" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value">4/8</div>
              <div className="stat-label">Cerita Selesai</div>
            </div>
            <div className="stat-card purple" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value">{student.totalXP}</div>
              <div className="stat-label">Total XP</div>
            </div>
            <div className="stat-card pink" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value" style={{ fontSize: '2rem' }}>🏆 {student.title}</div>
              <div className="stat-label">Gelar Saat Ini</div>
            </div>
            <div className="stat-card orange" style={{ border: 'none', borderRadius: '24px' }}>
              <div className="stat-value">{student.averageScore}%</div>
              <div className="stat-label">Rata-rata<br/>Nilai Quiz</div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
            <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px' }}>Analisis Level Literasi Siswa</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis />
                  <Radar name="Student" dataKey="A" stroke="#2196F3" fill="#2196F3" fillOpacity={0.6} />
                  <Radar name="Average" dataKey="B" stroke="#F44336" fill="#F44336" fillOpacity={0.6} />
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="black" fontWeight="bold">Radar Chart</text>
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
            <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px' }}>Minat Budaya Terbesar</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="Kent" fill="#ffc658" />
                  <Bar dataKey="Lincoln" fill="#8884d8" />
                  <Bar dataKey="Mersey" fill="#82ca9d" />
                  <Bar dataKey="York" fill="#8dd1e1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Riwayat Pengerjaan</h2>
          <ScoreTable history={student.quizHistory} />
        </section>
      </main>
    </div>
  );
}
