//Отвечает за отображение меню
import React from 'react';

interface MenuProps {
  items: string[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <ul className="menu">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Menu;
