import { ChevronRight } from 'lucide-react';
import { members } from '../../data/siteData.js';
import { getLeaders, getNews, pages, uiText, withLang } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import { LeaderCard, NewsCard, SectionTitle } from '../../components/UI/Cards.jsx';
import './HomePage.css';

function ActionLink({ href, onNavigate, children }) {
  return (
    <a
      className="primary-action"
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(href);
      }}
    >
      {children} <ChevronRight size={18} />
    </a>
  );
}

function CenteredAction({ href, label }) {
  return (
    <div className="center-action">
      <a className="primary-action compact" href={href}>
        {label} <ChevronRight size={17} />
      </a>
    </div>
  );
}

function StructurePreview({ lang }) {
  const leaders = getLeaders(lang);
  const text = uiText[lang];

  return (
    <section className="section" id="structure">
      <div className="container">
        <SectionTitle title={pages[lang].titles.structure} />
        <div className="leaders-grid">{leaders.map((person) => <LeaderCard person={person} lang={lang} key={person.slug} />)}</div>
        <CenteredAction href={withLang(lang, 'structure')} label={text.more} />
      </div>
    </section>
  );
}

function StatsPreview({ lang }) {
  const statsByLang = {
    az: [
      ['30+', 'ASTA üzv şirkətləri'],
      ['2026', 'Sərgi təqvimi'],
      ['UFI', 'Sərgi auditi səlahiyyəti'],
      ['100+', 'Sənaye əlaqələri'],
    ],
    en: [
      ['30+', 'ASTA member companies'],
      ['2026', 'Exhibition calendar'],
      ['UFI', 'Exhibition audit authority'],
      ['100+', 'Industry partnerships'],
    ],
    ru: [
      ['30+', 'Компании-члены ASTA'],
      ['2026', 'Календарь выставок'],
      ['UFI', 'Право аудита выставок'],
      ['100+', 'Отраслевые связи'],
    ],
  };
  const stats = statsByLang[lang] || statsByLang.az;

  return (
    <section className="stats-section" aria-label="ASTA in numbers">
      <div className="container stats-grid-home">
        {stats.map(([value, label]) => (
          <article className="stat-tile" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function MembersPreview({ lang }) {
  const text = uiText[lang];
  const carouselMembers = [...members, ...members];

  return (
    <section className="members-section">
      <div className="container">
        <SectionTitle title={pages[lang].titles.members} />
        <div className="member-carousel" aria-label={pages[lang].titles.members}>
          <div className="member-strip">
            {carouselMembers.map(([name, image], index) => (
              <a className="member-logo" href={withLang(lang, 'members')} key={`${name}-${image}-${index}`} aria-label={name}>
                <img src={asset(image)} alt={name} />
              </a>
            ))}
          </div>
        </div>
        <CenteredAction href={withLang(lang, 'members')} label={text.more} />
      </div>
    </section>
  );
}

function NewsPreview({ lang }) {
  const news = getNews(lang);
  const text = uiText[lang];

  return (
    <section className="section news-section">
      <div className="container">
        <SectionTitle title={pages[lang].titles.news} />
        <div className="news-grid">{news.slice(0, 4).map((item) => <NewsCard item={item} lang={lang} key={item.slug} />)}</div>
        <CenteredAction href={withLang(lang, 'news')} label={text.more} />
      </div>
    </section>
  );
}

export default function HomePage({ onNavigate, lang = 'az' }) {
  const heroTitle = {
    az: 'Azərbaycan Sərgi Təşkilatçıları Assosiasiyası',
    en: 'Azerbaijan Exhibition Organisers Association',
    ru: 'Ассоциация организаторов выставок Азербайджана',
  };

  return (
    <>
      <section className="hero">
        <img className="hero-media" src={asset('hero-main-enhanced.jpg')} alt="" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p>ASTA</p>
          <h1>{heroTitle[lang]}</h1>
          
        </div>
      </section>
      <StatsPreview lang={lang} />
      <StructurePreview lang={lang} />
      <MembersPreview lang={lang} />
      <NewsPreview lang={lang} />
    </>
  );
}
