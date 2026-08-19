import { CalendarDays } from 'lucide-react';
import Page from '../../components/UI/Page.jsx';
import { NewsCard } from '../../components/UI/Cards.jsx';
import { getNews, uiText } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './NewsPage.css';

export default function NewsDetailPage({ slug, lang = 'az' }) {
  const news = getNews(lang);
  const item = news.find((entry) => entry.slug === slug) || news[0];
  const relatedNews = news.filter((entry) => entry.slug !== item.slug).slice(0, 4);
  const body = item.body?.length ? item.body : [uiText[lang].newsBody];

  return (
    <Page title={item.title} lang={lang}>
      <div className="news-detail-layout">
        <article className="article-page">
          <img src={asset(item.image)} alt={item.title} />
          <p className="article-date"><CalendarDays size={17} /> {item.date}</p>
          <p>{item.excerpt}</p>
          {body.map((paragraph, index) => (
            <p key={`${item.slug}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </article>

        <aside className="related-news" aria-labelledby="related-news-title">
          <h2 id="related-news-title">{uiText[lang].relatedNews}</h2>
          <div className="related-news-list">
            {relatedNews.map((relatedItem) => (
              <NewsCard item={relatedItem} lang={lang} key={relatedItem.slug} />
            ))}
          </div>
        </aside>
      </div>
    </Page>
  );
}
