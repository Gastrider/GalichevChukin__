import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,14}$/;

    if (!formData.name) newErrors.name = 'Введите ваше имя';
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Введите корректный email';
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = 'Введите корректный номер телефона';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccessMessage('Сообщение отправлено!');
      setTimeout(() => setSuccessMessage(''), 3000); // Очистить сообщение через 3 секунды
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Свяжитесь с нами</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Имя</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={errors.name ? styles.errorInput : ''} 
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className={errors.email ? styles.errorInput : ''} 
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Телефон</label>
        <input 
          type="text" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className={errors.phone ? styles.errorInput : ''} 
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Сообщение</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className={errors.message ? styles.errorInput : ''} 
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>Отправить</button>
      {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
    </form>
  );
}

export default ContactForm;
