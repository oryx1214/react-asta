import Page, { TextPanel } from '../../components/UI/Page.jsx';
import { pages, uiText } from '../../data/i18n.js';
import './NotFoundPage.css';

export default function NotFoundPage({ lang = 'az' }) {
  return (
    <Page title={pages[lang].titles.notFound} lang={lang}>
      <TextPanel>
        <p>{uiText[lang].notFoundText}</p>
      </TextPanel>
    </Page>
  );
}
