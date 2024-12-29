import React, { useState } from 'react';
import styles from '../styles/CallbackForm.module.css';

function CallbackForm() {
  const [phone, setPhone] = useState('');
  const [day, setDay] = useState('Понедельник');
  const [time, setTime] = useState('09:00');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Перезвонить: ${day} в ${time}, номер: ${phone}`);
    alert('Спасибо! Мы перезвоним в указанное время.');
  };

  return (
    <div className={styles.callbackForm}>
      <h3>Сейчас сотрудники не в офисе.</h3>
      <p>Хотите, в выбранное время мы сами Вам перезвоним?</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.selectWrapper}>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="Понедельник">Понедельник</option>
            <option value="Вторник">Вторник</option>
            <option value="Среда">Среда</option>
            <option value="Четверг">Четверг</option>
            <option value="Пятница">Пятница</option>
            <option value="Суббота">Суббота</option>
            <option value="Воскресенье">Воскресенье</option>
          </select>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {Array.from({ length: 24 }, (_, i) => {
              const hour = i.toString().padStart(2, '0');
              return (
                <option key={hour} value={`${hour}:00`}>
                  {hour}:00
                </option>
              );
            })}
          </select>
        </div>
        <input
          type="tel"
          placeholder="+7(___)___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Жду звонка!</button>
        <p>
          Нажимая на кнопку "Жду звонка!", я даю свое согласие на обработку
          персональных данных и принимаю условия соглашения.
        </p>
      </form>
    </div>
  );
}

export default CallbackForm;
