import React from "react";
import IndexBg from "../images/indexBg.jpg";
import { Link, Route, Routes } from "react-router-dom";

export default function error() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className=" relative flex grow items-center justify-center">
        <img src={IndexBg} alt="Фон" className="absolute w-full h-full object-cover z-0 transition-opacity duration-500" />
        <div className="relative z-10 text-center text-white">
          <span className="text-9xl font-bold block">404</span>
          <p className="text-2xl mt-4 mb-8">Страница не найдена</p>
          <Link to="/" className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
            Вернуться на главную
          </Link>
        </div>
      </main>
      <footer className="relative z-10 bg-black text-white flex flex-col gap-3 items-center pt-4 pb-4">
        <Link to="/Error">Телефон: +7 (4842) 23-45-67</Link>
        <Link to="/Error">E-mail: family@cosmos.ru</Link>
      </footer>
      <Routes>
        <Route path="/Error" element={<Error />} />
      </Routes>
    </div>
  );
}
