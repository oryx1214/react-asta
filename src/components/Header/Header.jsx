import React from 'react';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { navByLang, switchLanguagePath, uiText, withLang } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './Header.css';

export default function Header({ onNavigate, lang = 'az', currentPath = '/az/main', theme = 'light', onThemeToggle }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = navByLang[lang];
  const text = uiText[lang];
  const languages = [
    { code: 'az', label: 'AZ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ];
  const isActive = (item) => currentPath === item.href || item.children?.some((child) => currentPath === child.href);

  const handleClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href={withLang(lang, 'home')} onClick={(event) => handleClick(event, withLang(lang, 'home'))}>
          <img src={asset('logo_asta_az_clean.png')} width="210" height="63" alt="ASTA" />
        </a>
        <button className="icon-button menu-button" type="button" aria-label={text.menuLabel} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <div className={isActive(item) ? 'nav-item active' : 'nav-item'} key={item.label}>
              <a href={item.href} onClick={(event) => handleClick(event, item.href)}>
                {item.label}
                {item.children ? <ChevronDown size={16} /> : null}
              </a>
              {item.children ? (
                <div className="dropdown-panel">
                  {item.children.map((child) => (
                    <a href={child.href} key={child.label} onClick={(event) => handleClick(event, child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="language-switcher" aria-label={text.languageLabel}>
          {languages.map((item) => {
            const href = switchLanguagePath(currentPath, item.code);
            return (
              <a className={item.code === lang ? 'active' : ''} href={href} key={item.code} onClick={(event) => handleClick(event, href)}>
                <img src={asset(`${item.code}.svg`)} alt="" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
          title={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
          onClick={onThemeToggle}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
