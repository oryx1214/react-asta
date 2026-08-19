import { CalendarDays, ExternalLink } from 'lucide-react';
import Page from '../../components/UI/Page.jsx';
import { calendarItems } from '../../data/siteData.js';
import { calendarTitles, pages, uiText } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './CalendarPage.css';

export default function CalendarPage({ lang = 'az' }) {
  const page = pages[lang];

  return (
    <Page title={page.titles.calendar} lang={lang}>
      <div className="calendar-list">
        {calendarItems.map(([, date, site, href, image], index) => {
          const title = calendarTitles[lang][index];

          return (
            <article className="calendar-row" key={title}>
              <img src={asset(image)} alt={title} />
              <div>
                <p><CalendarDays size={17} /> {date}</p>
                {site ? <a href={href}>{site}</a> : null}
              </div>
              <h3>{title}</h3>
              <a className="outline-action" href={href}>
                {uiText[lang].more} <ExternalLink size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </Page>
  );
}
