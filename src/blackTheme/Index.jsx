import React, { useEffect } from "react";
import IndexBg from "../images/indexBg.jpg";
import IndexBgLight from "../images/indexBg-Light.jpg";
import { Link } from "react-router-dom";

export default function Index({ theme }) {
  const backgroundImage = theme === "dark" ? IndexBg : IndexBgLight;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <div className={`relative min-h-screen transition-all duration-500 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        <img src={backgroundImage} alt="Фон" className="absolute w-full h-full object-cover z-0 transition-opacity duration-500" />

        {theme === "dark" && <div className="absolute w-full h-full bg-black/50 z-1"></div>}
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
                <p>Реальные перспективы: Лучшие проекты получат поддержку для реализации</p>
                <p>Портфолио: Сертификат или диплом для вашей карьеры</p>
              </div>

              <div id="autorize" className="pt-20 pb-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Авторизация</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="pt-6">
                    <p className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl lg:text-2xl">Имя</p>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full md:w-80 px-3 py-1.5 text-sm rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <div className="pt-6">
                    <p className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl lg:text-2xl">Фамилия</p>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full md:w-80 px-3 py-1.5 text-sm rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <div className="pt-6">
                    <p className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl lg:text-2xl">Почта</p>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full md:w-80 px-3 py-1.5 text-sm rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <div className="pt-6">
                    <p className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl lg:text-2xl">Пароль</p>
                    <input
                      type="password"
                      placeholder=""
                      className="w-full md:w-80 px-3 py-1.5 text-sm rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-row-reverse pt-10 lg:pr-29">
                  <Link to="/Account" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-lg backdrop-blur-sm">
                    Войти
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contacts" className={`${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"} flex flex-col gap-3 items-center pt-4 pb-4`}>
        <Link to="/Error">Телефон "+7 (4842) 23-45-67"</Link>
        <Link to="/Error">e-mail: family@cosmos.ru</Link>
      </footer>
    </>
  );
}
