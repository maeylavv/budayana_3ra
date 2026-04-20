import { Link, useLocation } from "react-router-dom";
import { User, Users, FileText, LogOut, ChevronDown } from "lucide-react";

export default function MonitoringSidebar({ role }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isGuru = role === "guru";

  const getMenuClass = (path, exact = false) => {
    const isActive = exact ? pathname === path : pathname?.startsWith(path);
    return `flex items-center gap-3 px-6 py-3 font-fredoka font-semibold text-lg transition-colors ${
      isActive
        ? "text-[#E8A030] bg-white rounded-r-full shadow-sm border-l-4 border-[#E8A030]"
        : "text-[#7B4F2E] hover:bg-[#F2E5D3] hover:text-[#5C3A1E]"
    }`;
  };

  return (
    <div className="w-64 bg-[#FAF3E8] h-screen flex flex-col shadow-md flex-shrink-0">
      <div className="p-6 text-center border-b border-[#E8D9C0]">
        <h1 className="font-fredoka font-bold text-2xl text-[#7B4F2E] mb-1">
          Budayana
        </h1>
        <p className="font-fredoka text-[#E8A030] text-sm font-semibold">
          Dashboard {isGuru ? "Guru" : "Orang Tua"}
        </p>
      </div>

      <nav className="flex-grow py-6 flex flex-col gap-2">
        {isGuru ? (
          <>
            <Link to="/monitoring-guru/settings" className={getMenuClass("/monitoring-guru/settings", true)}>
              <User size={20} />
              <span>Profil</span>
            </Link>
            <Link to="/monitoring-guru" className={getMenuClass("/monitoring-guru", true)}>
              <Users size={20} />
              <span>Profil Anak</span>
            </Link>
            <div className="group relative">
              <button className="w-full flex items-center justify-between px-6 py-3 font-fredoka font-semibold text-lg text-[#7B4F2E] hover:bg-[#F2E5D3] transition-colors">
                <div className="flex items-center gap-3">
                  <FileText size={20} />
                  <span>Hasil</span>
                </div>
                <ChevronDown size={16} />
              </button>
              {/* Dropdown would go here, simplified for dummy */}
            </div>
          </>
        ) : (
          <>
            <Link to="/monitoring-ortu" className={getMenuClass("/monitoring-ortu", true)}>
              <User size={20} />
              <span>Profil</span>
            </Link>
            <div className="group relative">
              <button className="w-full flex items-center justify-between px-6 py-3 font-fredoka font-semibold text-lg text-[#7B4F2E] hover:bg-[#F2E5D3] transition-colors">
                <div className="flex items-center gap-3">
                  <FileText size={20} />
                  <span>Hasil</span>
                </div>
                <ChevronDown size={16} />
              </button>
            </div>
          </>
        )}
      </nav>

      <div className="p-6 border-t border-[#E8D9C0]">
        <Link 
          to="/" 
          className="flex items-center gap-3 font-fredoka font-bold text-[#b91c1c] hover:text-[#991b1b] transition-colors"
        >
          <LogOut size={20} />
          <span>Keluar</span>
        </Link>
      </div>
    </div>
  );
}
