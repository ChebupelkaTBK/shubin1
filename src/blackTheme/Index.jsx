import React from "react";
import IndexBg from "../images/indexBg.jpg";
import IndexBgLight from "../images/indexBg-Light.jpg"; // Добавьте светлое изображение фона
import { Link, Route, Routes } from "react-router-dom";
import Error from "./404.jsx";

export default function Index({ theme }) {
  // Выбор фона в зависимости от темы
  const backgroundImage = theme === "dark" ? IndexBg : IndexBgLight;

  return (
    <>
      <div className={`relative min-h-screen transition-all duration-500 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        {/* Фоновое изображение */}
        <img src={backgroundImage} alt="Фон" className="absolute w-full h-full object-cover z-0 transition-opacity duration-500" />

        {/* Затемнение для темной темы */}
        {theme === "dark" && <div className="absolute w-full h-full bg-black/50 z-1"></div>}

        {/* Осветление для светлой темы */}
        {theme === "light" && <div className="absolute w-full h-full bg-white/30 z-1"></div>}

        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center pt-8">
            <div className="w-full max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl pt-8 md:pt-10 lg:pt-12 text-center md:text-left">Конкурс технологий будущего. Твой проект может изменить всё.</h1>
              <div className="pt-4 md:pt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">
                <p className="mb-2 sm:mb-3">Ты экспериментируешь с нейросетями, создаешь умные устройства или</p>
                <p className="mb-2 sm:mb-3">разрабатываешь блокчейн-решения? Покажи свою работу миру! Это шанс заявить о</p>
                <p>себе, получить поддержку экспертов и выиграть ресурсы для развития.</p>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-6 md:pt-8 lg:pt-10 text-center md:text-left">Главное о конкурсе:</h1>
                <ul
                  className={`flex flex-col gap-2 sm:gap-3 list-disc marker:${theme === "dark" ? "text-white" : "text-gray-800"} pl-4 sm:pl-6 md:pl-10 pt-2 sm:pt-3 text-sm sm:text-base md:text-lg lg:text-2xl`}
                >
                  <li>Для кого: Разработчики, дизайнеры, инженеры, студенты и технологические энтузиасты</li>
                  <li>Номинации: Лучший ИИ-проект / Инновация на блокчейне / Умное устройство / Социально значимый tech-проект</li>
                  <li>Призы: Гранты, менторская поддержка, пиар на крупных площадках, оборудование</li>
                </ul>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 md:pt-6 lg:pt-8 text-center md:text-left">Почему стоит участвовать:</h1>
              <div className="flex flex-col gap-1 sm:gap-2 pt-3 sm:pt-4 text-sm sm:text-base md:text-lg lg:text-2xl text-center md:text-left">
                <p>Экспертная оценка: Ваш проект увидят лидеры индустрии</p>
                <p>Нетворкинг: Знакомство с инвесторами и единомышленниками</p>
                <p>Реальные перспективы: Лучшие проекты получат поддержку для реализацииПортфолио:</p>
                <p>Портфолио: Сертификат или диплом для вашей карьеры</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={`${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"} flex flex-col gap-3 items-center pt-4 pb-4`}>
        <Link to="/Error">Телефон "+7 (4842) 23-45-67"</Link>
        <Link to="/Error">e-mail: family@cosmos.ru</Link>
      </footer>
      <Routes>
        <Route path="/Error" element={<Error />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  );
}
