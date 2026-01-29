import React from "react";
import IndexBg from "../images/indexBg.jpg";
import { Link } from "react-router-dom";

export default function Registration({ theme = "dark" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`relative flex-grow ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        <img src={IndexBg} alt="Фон" className="absolute w-full h-full object-cover z-0" />

        <div className="absolute w-full h-full bg-black/50 z-1"></div>

        <div className="relative z-10 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Регистрация</h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-200">Создайте аккаунт, чтобы получить доступ ко всем возможностям платформы</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    className="w-full px-4 py-3 text-base rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Фамилия</label>
                  <input
                    type="text"
                    placeholder="Введите вашу фамилию"
                    className="w-full px-4 py-3 text-base rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Электронная почта</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 text-base rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    className="w-full px-4 py-3 text-base rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Пароль</label>
                  <input
                    type="password"
                    placeholder="Введите пароль"
                    className="w-full px-4 py-3 text-base rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                  <p className="mt-2 text-xs text-gray-300">Минимум 8 символов, включая цифры и буквы</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Подтверждение пароля</label>
                  <input
                    type="password"
                    placeholder="Повторите пароль"
                    className="w-full px-4 py-3 text-base rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/30 bg-white/10 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-200">
                    Я согласен с{" "}
                    <Link to="/Error" className="text-blue-400 hover:text-blue-300 underline">
                      правилами пользования
                    </Link>{" "}
                    и{" "}
                    <Link to="/Error" className="text-blue-400 hover:text-blue-300 underline">
                      политикой конфиденциальности
                    </Link>
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 w-full sm:w-auto">Зарегистрироваться</button>
                <Link to="/" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-center w-full sm:w-auto">
                  Отмена
                </Link>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300">
                  Уже есть аккаунт?{" "}
                  <Link to="/Index#autorize" className="text-blue-400 hover:text-blue-300 font-medium underline">
                    Войти
                  </Link>
                </p>
              </div>
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
