import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSection.module.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import telegramIcon from '../assets/images/telegram.png';
import whatsappIcon from '../assets/images/whatsapp.png';

const images = [image1, image2, image3];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

useEffect(() => {
  const interval = setInterval(nextImage, 5000);
  return () => clearInterval(interval); // Очистка интервала при размонтировании
 }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Интерактивные развлечения <span>на любое событие!</span></h1>
        <div className="contact-buttons">
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className={styles.icon} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.carousel}>
        <button onClick={prevImage}>&lt;</button>
        <img src={images[currentIndex]} alt="Carousel" />
        <button onClick={nextImage}>&gt;</button>
      </div>
    </section>
  );
}

export default HeroSection;
