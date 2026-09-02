import { useEffect, useRef, useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { withLang } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './Cards.css';

export function LeaderGrid({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;

    if (!node || isVisible) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={gridRef} className={`leaders-grid ${isVisible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function LeaderCard({ person, lang = 'az' }) {
  const href = withLang(lang, 'structure', `/${person.slug}`);

  return (
    <article className="leader-card">
      <a href={href}>
        <img src={asset(person.image)} alt={person.name} />
        <h3>{person.name}</h3>
      </a>
      <p>{person.role}</p>
    </article>
  );
}

export function NewsCard({ item, lang = 'az' }) {
  const href = withLang(lang, 'news', `/${item.slug}`);

  return (
    <article className="news-card">
      <a href={href}>
        <img src={asset(item.image)} alt={item.title} />
      </a>
      <div className="news-body">
        <h3><a href={href}>{item.title}</a></h3>
        <p>{item.excerpt}</p>
        <span><CalendarDays size={16} /> {item.date}</span>
      </div>
    </article>
  );
}

export function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
    </div>
  );
}
