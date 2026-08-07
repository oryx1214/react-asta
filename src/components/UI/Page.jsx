import { uiText, withLang } from '../../data/i18n.js';
import './Page.css';

export default function Page({ title, children, lang = 'az' }) {
  const text = uiText[lang];

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>{title}</h1>
          <p><a href={withLang(lang, 'home')}>{text.home}</a> / {title}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </>
  );
}

export function TextPanel({ children }) {
  return <div className="text-panel">{children}</div>;
}
