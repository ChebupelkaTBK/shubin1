import React from "react";
import IndexBg from "../images/indexBg.jpg";
import { Link } from "react-router-dom";

export default function Shedule({ theme = "dark" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`relative grow ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        <img src={IndexBg} alt="Фон" className="absolute w-full h-full object-cover z-0" />

        <div className="absolute w-full h-full bg-black/50 z-1"></div>

        <div className="relative z-10 py-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Конкурсы</h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Список конкурсов</h2>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2">Конкурс технологий будущего</h3>
                  <p className="text-sm text-gray-300 mb-2">Разработка инновационных технологий</p>
                  <p className="text-sm">Срок: до 31.03.2024</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2">AI разработка года</h3>
                  <p className="text-sm text-gray-300 mb-2">Создание ИИ-решений</p>
                  <p className="text-sm">Срок: до 15.04.2024</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2">Блокчейн инновации</h3>
                  <p className="text-sm text-gray-300 mb-2">Разработка блокчейн-проектов</p>
                  <p className="text-sm">Срок: до 20.04.2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Подать заявку</h2>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm">Выберите конкурс</p>
                  <select className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm">
                    <option value="">Конкурс технологий будущего</option>
                    <option value="">AI разработка года</option>
                    <option value="">Блокчейн инновации</option>
                  </select>
                </div>

                <div>
                  <p className="mb-2 text-sm">Название проекта</p>
                  <input
                    type="text"
                    placeholder="Введите название"
                    className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">Отправить заявку</button>
            </div>
          </div>
        </div>
      </div>

      <footer id="contacts" className="bg-black text-white flex flex-col gap-3 items-center pt-4 pb-4">
        <Link to="/Error" className="hover:text-gray-300 transition-colors">
          Телефон: +7 (4842) 23-45-67
        </Link>
        <Link to="/Error" className="hover:text-gray-300 transition-colors">
          e-mail: family@cosmos.ru
        </Link>
      </footer>
    </div>
  );
}
