import Page, { TextPanel } from '../../components/UI/Page.jsx';
import { pages } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './AuditPage.css';

export default function AuditPage({ lang = 'az' }) {
  const page = pages[lang];

  return (
    <Page title={page.titles.audit} lang={lang}>
      <TextPanel>
        {page.audit.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <img className="wide-content-image" src={asset('2431579022.png')} alt={page.titles.audit} />
      </TextPanel>
    </Page>
  );
}
