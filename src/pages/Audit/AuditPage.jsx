import Page, { TextPanel } from '../../components/UI/Page.jsx';
import { pages } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './AuditPage.css';

function AuditParagraph({ paragraph }) {
  const parts = paragraph.split(/(UFI)/g);

  return (
    <p>
      {parts.map((part, index) => part === 'UFI' ? (
        <a href="https://ufi.org" target="_blank" rel="noreferrer" key={`${part}-${index}`}>
          {part}
        </a>
      ) : part)}
    </p>
  );
}

export default function AuditPage({ lang = 'az' }) {
  const page = pages[lang];

  return (
    <Page title={page.titles.audit} lang={lang}>
      <TextPanel>
        {page.audit.map((paragraph) => <AuditParagraph paragraph={paragraph} key={paragraph} />)}
        <img className="wide-content-image" src={asset('2431579022.png')} alt={page.titles.audit} />
      </TextPanel>
    </Page>
  );
}
