//Отвечает за отображение рекламного баннера
import React from 'react';

interface BannerProps {
  imageSrc: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc }) => {
  return (
    <div className="banner">
      <img src={imageSrc} alt="Advertisement" />
    </div>
  );
}

export default Banner;
