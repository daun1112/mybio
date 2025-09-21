import React, { useState } from 'react';
import ProfilePicture from './ProfilePicture';

const realName = "Зиёдулло Абдуллаев";
const nickname = "z";

const Profile = () => {
  const [showName, setShowName] = useState(false);

  return (
    <div className="container">
      <ProfilePicture />

      <h1
        className="profile-name"
        style={{ marginBottom: 12 }}
      >
        <div
          className={`flip-root ${showName ? 'flipped' : ''}`}
          onClick={() => setShowName(!showName)}
          role="button"
          aria-pressed={showName}
          title={showName ? "Показать ник" : "Показать настоящее имя"}
          style={{ display: 'inline-block', cursor: 'pointer' }}
        >
          <div className="flip-inner">
            <div className="flip-face flip-front">{nickname}</div>
            <div className="flip-face flip-back">{realName}</div>
          </div>
        </div>
      </h1>

      <p className="profile-age">Возраст: 17</p>

      <p className="profile-bio">
        <span style={{ color: '#39ff14' }}>{'>'}</span>{" "}
        Я занимаюсь разработкой телеграм ботов, модулей и софтов. Люблю пельмени.
      </p>

      <div className="section">
        <h2>Контакты</h2>
        <div className="profile-buttons">
          <a className="profile-btn tg-btn" href="https://t.me/yrmfkr" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a className="profile-btn phone-btn" href="tel:+998998322722">+998 99 832 27 22</a>
          <a className="profile-btn email-btn" href="mailto:ziyod1488@gmail.com"><span className="email-text">ziyod1488@gmail.com</span></a>
        </div>
      </div>

      <div className="section">
        <h2>Проекты</h2>
        <div className="project"><a href="https://github.com/daun1112/reports" target="_blank" rel="noopener noreferrer">reports</a> — бот для Telegram</div>
        <div className="project"><a href="https://github.com/daun1112/myworkbot" target="_blank" rel="noopener noreferrer">myworkbot</a> — бот для Telegram</div>
      </div>
    </div>
  );
};

export default Profile;