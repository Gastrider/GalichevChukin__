import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo1.png';

function Header() {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const location = useLocation(); // Определяем текущий маршрут

  const toggleServicesMenu = () => {
    setServicesMenuOpen((prev) => !prev);
  };

  const isHomePage = location.pathname === '/'; // Проверяем, находимся ли на главной

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.companyName}>
          DIGITAL INTERACTIVE
          <div className={styles.tagline}>Аренда интерактивных развлечений</div>
        </div>
      </div>

      <nav className={styles.navbar}>
        {/* Главная */}
        {isHomePage ? (
          <ScrollLink to="heroSection" smooth={true} duration={500} className={styles.navItem}>
            Главная
          </ScrollLink>
        ) : (
          <Link to="/" className={styles.navItem}>
            Главная
          </Link>
        )}

        {/* О нас */}
        {isHomePage ? (
          <ScrollLink to="aboutSection" smooth={true} duration={500} className={styles.navItem}>
            О нас
          </ScrollLink>
        ) : (
          <Link to="/" className={styles.navItem}>
            О нас
          </Link>
        )}

        {/* Услуги */}
        {isHomePage ? (
          <ScrollLink to="servicesSection" smooth={true} duration={500} className={styles.navItem}>
            Услуги
          </ScrollLink>
        ) : (
          <Link to="/" className={styles.navItem}>
            Услуги
          </Link>
        )}

        {/* Отзывы */}
        {isHomePage ? (
          <ScrollLink to="clientsSection" smooth={true} duration={500} className={styles.navItem}>
            Отзывы
          </ScrollLink>
        ) : (
          <Link to="/" className={styles.navItem}>
            Отзывы
          </Link>
        )}

        {/* Контакты */}
        {isHomePage ? (
          <ScrollLink to="contactSection" smooth={true} duration={500} className={styles.navItem}>
            Контакты
          </ScrollLink>
        ) : (
          <Link to="/" className={styles.navItem}>
            Контакты
          </Link>
        )}

        {/* Выпадающий список "Подробнее об услугах" */}
        <div
          className={`${styles.navItemWithDropdown} ${servicesMenuOpen ? styles.dropdownActive : ''}`}
          onMouseEnter={toggleServicesMenu}
          onMouseLeave={toggleServicesMenu}
        >
          <span className={styles.navItem}>Подробнее об услугах</span>
          {servicesMenuOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/service1" className={styles.dropdownItem}>
                Виртуальная реальность
              </Link>
              <Link to="/service2" className={styles.dropdownItem}>
                Интерактивные стенды
              </Link>
              <Link to="/service3" className={styles.dropdownItem}>
                Аренда игрового оборудования
              </Link>
            </div>
          )}
        </div>

        {/* Условия аренды */}
        <Link to="/rent-conditions" className={styles.navItem}>
          Условия аренды
        </Link>

        {/* Блог */}
        <Link to="/blog" className={styles.navItem}>
          Блог
        </Link>
      </nav>
    </header>
  );
}

export default Header;
