import React from "react";
import IndexBg from "../images/indexBg.jpg";
import { Link } from "react-router-dom";

export default function Account({ theme = "dark" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`relative grow ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        <img src={IndexBg} alt="Фон" className="absolute w-full h-full object-cover z-0" />

        <div className="absolute w-full h-full bg-black/50 z-1"></div>

        <div className="relative z-10 py-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Личный кабинет</h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Основная информация</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="mb-2 text-sm">Имя</p>
                  <input
                    type="text"
                    value="Иван"
                    className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm">Фамилия</p>
                  <input
                    type="text"
                    value="Иванов"
                    className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm">Электронная почта</p>
                  <input
                    type="email"
                    value="ivan@example.com"
                    className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm">Телефон</p>
                  <input
                    type="tel"
                    value="+7 920 499-10-95"
                    className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">Сохранить</button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Мои конкурсы</h2>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium">Конкурс технологий будущего</h3>
                  <p className="text-sm text-gray-300 mt-1">Статус: На рассмотрении</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium">AI разработка года</h3>
                  <p className="text-sm text-gray-300 mt-1">Статус: В процессе</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-medium">Блокчейн инновации</h3>
                  <p className="text-sm text-gray-300 mt-1">Статус: Победитель</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Быстрые действия</h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/Shedule" className="text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Подать заявку
                </Link>

                <Link to="/Index#autorize" className="text-center bg-transparent border border-white text-white hover:bg-white/10 py-2 px-4 rounded-md transition-colors">
                  Сменить пароль
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contacts" className="bg-black text-white flex flex-col gap-3 items-center pt-4 pb-4">
        <Link to="/Error" className="hover:text-gray-300 transition-colors">
          Телефон: +7 (999) 123-45-67
        </Link>
        <Link to="/Error" className="hover:text-gray-300 transition-colors">
          e-mail: family@cosmos.ru
        </Link>
      </footer>
    </div>
  );
}
