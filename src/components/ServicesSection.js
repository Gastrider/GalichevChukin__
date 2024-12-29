import React from 'react';
import '../styles/Services.css';

const servicesData = [
  { id: 1, name: "Фотозоны", description: "Создаем фото зоны любой сложности", price: "от 21 000 ₽" },
  { id: 2, name: "Музыкальные", description: "Big Piano, Интерактивный микшер", price: "от 6 000 ₽" },
  // Добавь остальные услуги
];

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <h2>Наши Услуги</h2>
      <div className="service-list">
        {servicesData.map(service => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
