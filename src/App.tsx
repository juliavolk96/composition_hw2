import React from 'react';
import './App.css';
import BrowserPage from './components/BrowserPage';

function App() {
  const news = [
    {
      title: 'Великое открытие! Котенок научился открывать двери с помощью лапок. Научная сенсация!',
      link: 'https://example.com/news1',
      imageSrc: '/img/pet.png',
    },
    {
      title: 'Научное открытие: котята провели исследование и пришли к выводу, что коробки - лучшие друзья кошек!',
      link: 'https://example.com/news1',
      imageSrc: '/img/cat (1).png',
    },
    {
      title: 'Кошки объявили, что человеки - это их личные слуги, и требуют увеличения порций корма.',
      link: 'https://example.com/news1',
      imageSrc: '/img/siberian.png',
    },
  ];

  const menuItems = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир'];

  const bannerImageSrc = '/img/banner.jpg';

  return (
    <div className="container">
      <BrowserPage news={news} menuItems={menuItems} bannerImageSrc={bannerImageSrc} />
    </div>
  );
}

export default App;
