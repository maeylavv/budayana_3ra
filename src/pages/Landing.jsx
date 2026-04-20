import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Landing() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const goToSignIn = () => {
        navigate("/sign-up");
    };

    const goToLogin = () => {
        navigate("/login");
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="page_landing">
            {/* --- Navbar (Refined Style) --- */}
            {/* Using useState inside component, need to ensure imports are present. 
                Wait, I need to restore useState and useEffect imports first if they were removed.
                Checking file content... User removed them in the diff I saw earlier.
                I will handle imports in a separate edit or use MultiReplace. 
                Actually, let's just use MultiReplace to add imports and replace header.
            */}
            <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-6 bg-transparent">
                <div className="max-w-7xl mx-auto backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between font-poppins relative bg-[rgba(254,246,223,0.85)] border border-[#955C2E]/10 transition-all duration-300">

                    {/* Logo */}
                    <div className="flex items-center gap-4 flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
                        <img
                            src="/assets/budayana/islands/Budayana text.png"
                            alt="Budayana Logo"
                            className="h-7 md:h-10 hover:scale-105 transition-transform duration-200 object-contain"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-x-8 text-[#955C2E] font-fredoka font-bold text-lg">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="hover:text-[#7a4b26] transition-colors duration-200 relative group"
                        >
                            Tentang Kami
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#955C2E] transition-all duration-200 group-hover:w-full"></span>
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className="hover:text-[#7a4b26] transition-colors duration-200 relative group"
                        >
                            Fitur Utama
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#955C2E] transition-all duration-200 group-hover:w-full"></span>
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="hover:text-[#7a4b26] transition-colors duration-200 relative group"
                        >
                            Kontak
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#955C2E] transition-all duration-200 group-hover:w-full"></span>
                        </button>
                    </nav>

                    {/* Desktop Login Button with Dropdown */}
                    <div className="relative group hidden md:inline-block">
                        <button
                            className="inline-flex items-center justify-center bg-[#955C2E] text-white font-fredoka font-semibold px-8 py-2.5 rounded-full hover:bg-[#7a4b26] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Masuk
                        </button>
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <button onClick={() => navigate('/login')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka text-[#955C2E] font-semibold transition-colors">Masuk sebagai Siswa</button>
                            <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka text-[#955C2E] font-semibold transition-colors">Masuk sebagai Guru</button>
                            <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka text-[#955C2E] font-semibold transition-colors">Masuk sebagai Orang Tua</button>
                        </div>
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-[#955C2E] p-1 focus:outline-none hover:scale-110 transition-transform duration-200"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-center">
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>

                    {/* Mobile Menu */}
                    <div className={`md:hidden absolute top-full left-0 right-0 mt-3 px-0 transition-all duration-300 origin-top ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                        <div className="backdrop-blur-xl bg-[#FEF6DF]/95 border border-[#955C2E]/20 rounded-2xl shadow-xl p-6 font-fredoka text-[#955C2E] mx-auto w-full">
                            <nav className="flex flex-col space-y-2">
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="flex items-center gap-3 hover:bg-[#955C2E]/10 py-3 px-4 rounded-xl transition-all duration-200 text-left font-semibold"
                                >
                                    Tentang Kami
                                </button>
                                <button
                                    onClick={() => scrollToSection("features")}
                                    className="flex items-center gap-3 hover:bg-[#955C2E]/10 py-3 px-4 rounded-xl transition-all duration-200 text-left font-semibold"
                                >
                                    Fitur Utama
                                </button>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="flex items-center gap-3 hover:bg-[#955C2E]/10 py-3 px-4 rounded-xl transition-all duration-200 text-left font-semibold"
                                >
                                    Kontak
                                </button>

                                <div className="mt-4 pt-4 border-t border-[#955C2E]/20 flex flex-col gap-2">
                                    <button onClick={() => navigate('/login')} className="w-full py-2 px-4 bg-[#955C2E] text-white font-semibold rounded-xl hover:bg-[#7a4b26] transition-all duration-300 shadow-sm text-center">Masuk Siswa</button>
                                    <button onClick={() => navigate('/monitoring-login-guru')} className="w-full py-2 px-4 bg-[#955C2E] text-white font-semibold rounded-xl hover:bg-[#7a4b26] transition-all duration-300 shadow-sm text-center">Masuk Guru</button>
                                    <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full py-2 px-4 bg-[#955C2E] text-white font-semibold rounded-xl hover:bg-[#7a4b26] transition-all duration-300 shadow-sm text-center">Masuk Orang Tua</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="landing_child">
                <div className="prambanan">
                    <img src="./assets/budayana/islands/prambanan.png" alt="prambanan" />
                </div>

                <div className="bg_green">
                    <img src="./assets/budayana/islands/rumput 2.png" alt="bg_green" className="bg_green_desktop" />
                    <img src="./assets/budayana/islands/green group (1).svg" alt="bg_green" className="bg_green_mobile" />
                </div>

                <div className="hero">
                    <div className="hero_img">
                        <img src="./assets/budayana/islands/Landing Group.png" alt="group" />
                    </div>

                    <div className="hero_text">
                        <img src="./assets/budayana/islands/Game Name.png" alt="Budayana" />
                        <h1 className="sub_title">Platform Literasi <br></br>Budaya untuk Siswa</h1>
                        <div className="relative inline-block group">
                            <button className="btn_login">Daftar Akun</button>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <button onClick={() => navigate('/sign-up')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka text-[#955C2E] font-semibold transition-colors">Daftar Siswa</button>
                                <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka text-[#955C2E] font-semibold transition-colors">Daftar Guru</button>
                                <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka text-[#955C2E] font-semibold transition-colors">Daftar Orang Tua</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className="about_us">
                    <div className="about_us_text">
                        <h1>Tentang Kami</h1>
                        <p className="about_us_text_1">
                            Budayana adalah platform pembelajaran digital yang dirancang untuk membantu siswa mengenal dan memahami budaya Indonesia melalui pendekatan literasi berbasis cerita.
                        </p>
                        <p className="about_us_text_2">
                            Kami menggabungkan teknologi dan nilai budaya untuk menciptakan pengalaman belajar yang ramah anak, mudah digunakan, dan relevan dengan kebutuhan pendidikan saat ini.
                        </p>
                    </div>

                    <img src="./assets/budayana/islands/Harimau.png" alt="about us" />
                </div>



                <div id="features" className="features">
                    <div className="features_text">
                        <h1 className="features_title">Fitur Utama</h1>


                        <div className="features_items">
                            <img src="./assets/budayana/islands/feature flow.png" alt="pre-test" />

                        </div>
                    </div>
                </div>

                <div className="bg_brown">
                    <img src="./assets/budayana/islands/bg brownie.svg" alt="bg_brown" className="bg_brown_desktop" />
                    <img src="./assets/budayana/islands/brown group.svg" alt="bg_brown" className="bg_brown_mobile" />
                </div>

                <div id="contact" className="contact">
                    <h1>Kontak Kami</h1>
                    <p className="contact_text_1">
                        Kami terbuka untuk pertanyaan, masukan, maupun peluang kerja sama dengan sekolah, institusi pendidikan, dan pihak terkait lainnya.
                    </p>
                    <p className="contact_text_2">
                        Silakan hubungi kami melalui:
                    </p>

                    <div className="contact_text_3">
                        <img src="./assets/budayana/islands/email.png" alt="email" />
                        <p>budayana@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
}