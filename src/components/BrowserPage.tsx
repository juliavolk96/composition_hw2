//Отвечает за отображение главной страницы 
import React from 'react';
import NewsItem from './NewsItem';
import Menu from './Menu';
import Banner from './Banner';

interface NewsItemProps {
  title: string;
  link: string;
  imageSrc: string;
}

interface BrowserPageProps {
  news: NewsItemProps[];
  menuItems: string[];
  bannerImageSrc: string;
}

const BrowserPage: React.FC<BrowserPageProps> = ({ news, menuItems, bannerImageSrc }) => {
  return (
    <div className="browser-page">
      <div className="logo">
        <img src="/img/yandex.png" alt="Yandex Logo" />
      </div>
      {news.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
      <div className="search-container">
        <Menu items={menuItems} />
        <div className="search">
          <input type="text" placeholder="Поиск" />
          <button>Найти</button>
        </div>
      </div>
      
      <Banner imageSrc={bannerImageSrc} />
    </div>
  );
}

export default BrowserPage;
