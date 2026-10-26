import Page from '../../components/UI/Page.jsx';
import { members } from '../../data/siteData.js';
import { pages, withLang } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './MembersPage.css';

const membersPageItems = [
  ...members,
  ['Atmosfera', 'atmosfera-logo.jpg'],
  ['Promo Expo', 'promo-expo-logo.png'],
];

export default function MembersPage({ lang = 'az' }) {
  return (
    <Page title={pages[lang].titles.members} lang={lang}>
      <div className="member-grid-full">
        {membersPageItems.map(([name, image], index) => (
          <a className="member-logo" href={withLang(lang, 'members')} key={`${name}-${index}`} aria-label={name}>
            <img src={asset(image)} alt={name} />
          </a>
        ))}
      </div>
    </Page>
  );
}
