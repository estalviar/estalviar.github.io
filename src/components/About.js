import React from 'react';
import './About.css'; 
import myPhoto from '../assets/my-photo.jpg'; 

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Обо мне</h2>
        <div className="about-content">
          <img src={myPhoto} alt="Мое фото" className="about-photo" />
          <p>Здравствуйте, меня зовут Панченко Роман, я занимаюсь скупкой и продажей металлолома, а так же учусь на программиста в Финансовом Университете</p>
        </div>
      </div>
    </section>
  );
}

export default About;
