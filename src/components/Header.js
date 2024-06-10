import React from 'react';
import './Header.css'; // Подключаем CSS файл

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Мое Портфолио</div>
        <nav className="nav">
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
