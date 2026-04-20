import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function MonitoringSidebar({ role }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isGuru = role === "guru";

  const getMenuClass = (path, exact = false) => {
    const isActive = exact ? pathname === path : pathname?.startsWith(path);
    return `flex items-center justify-center gap-2 px-6 py-2.5 mx-4 my-2 font-fredoka-one font-bold text-lg rounded-full transition-colors ${
      isActive
        ? "text-[#f3a64c] bg-[#FEEBCC] border-2 border-[#f3a64c]"
        : "text-[#955C2E] hover:bg-[#F2E5D3] border-2 border-transparent"
    }`;
  };

  return (
    <div className="w-64 bg-[#FEF6DF] h-screen flex flex-col flex-shrink-0 border-r border-[#E8D9C0]">
      <div className="p-6 mt-4 text-center">
        <h1 className="font-fredoka-one font-bold text-[2rem] leading-tight text-[#955C2E] mb-2">
          Budayana<br/>Monitoring
        </h1>
        <p className="font-fredoka-one text-[#8A8275] text-lg font-semibold">
          Dashboard {isGuru ? "Guru" : "Ortu/Wali"}
        </p>
      </div>

      <nav className="flex-grow py-6 flex flex-col gap-1 mt-4">
        {isGuru ? (
          <>
            <Link to="/monitoring-guru/profil" className={getMenuClass("/monitoring-guru/profil", true)}>
              <span>Profil</span>
            </Link>
            <Link to="/monitoring-guru/profil-anak" className={getMenuClass("/monitoring-guru/profil-anak", true)}>
              <span>Profil Anak</span>
            </Link>
            <Link to="/monitoring-guru/hasil" className={getMenuClass("/monitoring-guru/hasil")}>
              <span>Hasil</span>
              <ChevronDown size={18} />
            </Link>
          </>
        ) : (
          <>
            <Link to="/monitoring-ortu/profil" className={getMenuClass("/monitoring-ortu/profil", true)}>
              <span>Profil</span>
            </Link>
            <Link to="/monitoring-ortu/profil-anak" className={getMenuClass("/monitoring-ortu/profil-anak", true)}>
              <span>Profil Anak</span>
            </Link>
            <Link to="/monitoring-ortu/hasil" className={getMenuClass("/monitoring-ortu/hasil")}>
              <span>Hasil</span>
              <ChevronDown size={18} />
            </Link>
          </>
        )}
        
        <Link 
          to="/" 
          className="flex items-center justify-center gap-2 px-6 py-2.5 mx-4 mt-6 font-fredoka-one font-bold text-lg text-[#c53030] hover:bg-[#fed7d7] rounded-full transition-colors"
        >
          <span>Keluar</span>
        </Link>
      </nav>
    </div>
  );
}
