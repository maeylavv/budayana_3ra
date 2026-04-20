import MonitoringSidebar from "../../../components/MonitoringSidebar";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringGuruProfil() {
  return (
    <div className="profile-layout">
      <MonitoringSidebar role="guru" />
      
      <main className="profile-main">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ fontSize: '3rem', width: '120px', height: '120px', borderColor: '#7B4F2E', backgroundColor: '#F2E5D3' }}>
            {/* Using an emoji or dummy image */}
            👩‍🏫
          </div>
          <div className="profile-top-text" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontSize: '2.5rem', fontWeight: '800' }}>Triwati</h1>
            <div className="profile-grade-badge" style={{ backgroundColor: '#5CDCB3', color: 'white', fontSize: '1.2rem', padding: '6px 24px', borderRadius: '999px', fontWeight: 'bold' }}>
              Guru
            </div>
          </div>
        </section>

        <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '30px 0' }} />

        <div className="form_profile" style={{ maxWidth: '800px' }}>
          <section className="profile-form">
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input type="text" value="Triwati" readOnly style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Guru Kelas</label>
              <input type="text" value="4" readOnly style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input type="text" value="Triwati" readOnly style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email</label>
              <input type="text" value="Triwati@gmail.com" readOnly style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid #E8D9C0', fontSize: '1.1rem', color: '#7B4F2E', fontWeight: 'bold', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '40px' }}>
              <button style={{ backgroundColor: '#c53030', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Hapus Akun
              </button>
              <button style={{ backgroundColor: '#955C2E', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Ubah Data
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
