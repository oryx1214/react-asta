import Page from '../../components/UI/Page.jsx';
import { getLeaders, uiText, withLang } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './StructurePage.css';

export default function LeaderPage({ slug, lang = 'az' }) {
  const leaders = getLeaders(lang);
  const person = leaders.find((item) => item.slug === slug) || leaders[0];

  return (
    <Page title={person.name} lang={lang}>
      <article className="profile-page">
        <img src={asset(person.image)} alt={person.name} />
        <div>
          <p className="profile-role">{person.role}</p>
          <p>{person.bio}</p>
          <a className="text-link" href={withLang(lang, 'structure')}>{uiText[lang].structureBack}</a>
        </div>
      </article>
    </Page>
  );
}
