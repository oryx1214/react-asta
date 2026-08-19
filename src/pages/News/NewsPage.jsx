import Page from '../../components/UI/Page.jsx';
import { NewsCard } from '../../components/UI/Cards.jsx';
import { getNews, pages } from '../../data/i18n.js';
import './NewsPage.css';

export default function NewsPage({ lang = 'az' }) {
  const news = getNews(lang);

  return (
    <Page title={pages[lang].titles.news} lang={lang}>
      <div className="news-grid listing">
        {news.map((item) => <NewsCard item={item} lang={lang} key={item.slug} />)}
      </div>
    </Page>
  );
}
