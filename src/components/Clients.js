import React from 'react';
import styles from '../styles/Clients.module.css';

function Clients() {
  const testimonials = [
    { name: 'Анна', text: 'Прекрасное обслуживание! Рекомендую всем!' },
    { name: 'Олег', text: 'Отличное качество услуг, спасибо за праздник!' },
    { name: 'Мария', text: 'Мои гости были в восторге!' },
  ];

  return (
    <section className={styles.clients}>
      <h2>Отзывы</h2>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p>{testimonial.text}</p>
            <span>- {testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
