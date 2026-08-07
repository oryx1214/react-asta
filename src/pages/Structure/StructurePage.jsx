import Page from '../../components/UI/Page.jsx';
import { LeaderCard } from '../../components/UI/Cards.jsx';
import { getLeaders, pages } from '../../data/i18n.js';
import './StructurePage.css';

export default function StructurePage({ lang = 'az' }) {
  const leaders = getLeaders(lang);

  return (
    <Page title={pages[lang].titles.structure} lang={lang}>
      <div className="leaders-grid leaders-list">
        {leaders.map((person) => <LeaderCard person={person} lang={lang} key={person.slug} />)}
      </div>
    </Page>
  );
}
