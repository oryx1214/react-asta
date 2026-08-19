import { CheckCircle2 } from 'lucide-react';
import Page, { TextPanel } from '../../components/UI/Page.jsx';
import { pages } from '../../data/i18n.js';
import './AboutPage.css';

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}><CheckCircle2 size={19} /> {item}</li>
      ))}
    </ul>
  );
}

export default function AboutPage({ lang = 'az' }) {
  const about = pages[lang].about;

  return (
    <Page title={about.title} lang={lang}>
      <TextPanel>
        <p>{about.paragraphs[0]}</p>
        <p>{about.paragraphs[1]}</p>
        <h3>{about.tasksTitle}</h3>
        <CheckList items={about.tasks} />
      </TextPanel>
    </Page>
  );
}
