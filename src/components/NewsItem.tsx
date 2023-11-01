// Отвечает за отображение отдельной новости
import React from 'react';

interface NewsItemProps {
  title: string;
  link: string;
  imageSrc: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, link, imageSrc }) => {
  return (
    <div className="news-item">
      <div className="news-image">
        <img src={imageSrc} />
      </div>
      <div className="news-content">
        <a href={link}>{title}</a>
      </div>
    </div>
  );
}

export default NewsItem;
