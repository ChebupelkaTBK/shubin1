import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./blackTheme/Index.jsx";
import Registration from "./blackTheme/Registration.jsx";
import Account from "./blackTheme/Account.jsx";
import Error from "./blackTheme/404.jsx";
import Shedule from "./blackTheme/Shedule.jsx";
import CortexImage from "./images/Frame 1.png";
import CortexText from "./images/Cortex.png";
import ThemeSelectorBlack from "./images/themeSelectorblack.png";
import ThemeSelectorWhite from "./images/themeSelectorwhite.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // Состояние для темы

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Функция переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <BrowserRouter>
        <header className="bg-black sm:bg-transparent fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link to="/Index" className="flex items-center space-x-2" onClick={closeMenu}>
                  <img src={CortexImage} alt="Cortex Logo" className="h-8 md:h-10 drop-shadow-lg" />
                  <img src={CortexText} alt="Cortex" className="h-5 md:h-6 drop-shadow-lg" />
                </Link>
              </div>

              <div className="hidden md:flex flex-1 mx-8">
                <div className="flex items-center justify-center space-x-4 lg:space-x-8">
                  <Link to="/Account" className="text-white hover:text-gray-300 transition-colors text-sm font-medium drop-shadow-lg">
                    Личный кабинет
                  </Link>
                  <Link to="/Error" className="text-white hover:text-gray-300 transition-colors text-sm font-medium drop-shadow-lg">
                    Контакты
                  </Link>
                  <Link to="/Shedule" className="text-white hover:text-gray-300 transition-colors text-sm font-medium drop-shadow-lg">
                    Конкурсы
                  </Link>
                  <Link to="/Error" className="text-white hover:text-gray-300 transition-colors text-sm font-medium drop-shadow-lg">
                    О нас
                  </Link>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="w-40 px-3 py-1.5 text-sm rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <div className="flex items-center space-x-4">
                  <Link to="/Error" className="text-white hover:text-gray-300 transition-colors text-sm font-medium drop-shadow-lg">
                    Авторизация
                  </Link>
                  <Link to="/Registration" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-lg backdrop-blur-sm">
                    Регистрация
                  </Link>
                </div>
                {/* Кнопка переключения темы */}
                <button onClick={toggleTheme} className="p-2 hover:bg-white/10 rounded-md transition-colors backdrop-blur-sm" title="Переключить тему">
                  <img src={theme === "dark" ? ThemeSelectorBlack : ThemeSelectorWhite} alt="Переключить тему" className="h-6 w-6 drop-shadow-lg" />
                </button>
              </div>

              <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-60" aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`} />
                <span className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`} />
              </button>
            </nav>
          </div>

          <div
            className={`
            md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-50
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
              <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-3xl" aria-label="Закрыть меню">
                ✕
              </button>

              <Link to="/Account" onClick={closeMenu} className="text-white text-2xl hover:text-blue-400 transition-colors py-2">
                Личный кабинет
              </Link>
              <Link to="/Error" onClick={closeMenu} className="text-white text-2xl hover:text-blue-400 transition-colors py-2">
                Контакты
              </Link>
              <Link to="/Shedule" onClick={closeMenu} className="text-white text-2xl hover:text-blue-400 transition-colors py-2">
                Конкурсы
              </Link>
              <Link to="/Error" onClick={closeMenu} className="text-white text-2xl hover:text-blue-400 transition-colors py-2">
                О нас
              </Link>

              <div className="w-full max-w-xs pt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="w-full px-4 py-3 text-base rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 pt-8 border-t border-white/20 w-full max-w-xs">
                <Link to="/Error" onClick={closeMenu} className="text-white text-xl hover:text-blue-400 transition-colors py-2">
                  Авторизация
                </Link>
                <Link to="/Registration" onClick={closeMenu} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors w-full text-center">
                  Регистрация
                </Link>
              </div>

              {/* Кнопка переключения темы в мобильном меню */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMenu();
                  }}
                  className="p-3 hover:bg-white/10 rounded-md transition-colors backdrop-blur-sm"
                  title="Переключить тему"
                >
                  <img src={theme === "dark" ? ThemeSelectorBlack : ThemeSelectorWhite} alt="Переключить тему" className="h-8 w-8 drop-shadow-lg" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="relative">
          <Routes>
            <Route path="/" element={<Index theme={theme} />} />
            <Route path="/Index" element={<Index theme={theme} />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Shedule" element={<Shedule />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
