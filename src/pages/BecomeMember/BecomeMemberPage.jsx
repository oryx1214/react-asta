import { useState } from 'react';
import { Send } from 'lucide-react';
import Page from '../../components/UI/Page.jsx';
import { pages, uiText } from '../../data/i18n.js';
import '../../components/UI/Form.css';
import './BecomeMemberPage.css';

export default function BecomeMemberPage({ lang = 'az' }) {
  const page = pages[lang];
  const [submitStatus, setSubmitStatus] = useState('idle');
  const fieldNames = [
    'company',
    'activity_type',
    'address',
    'phone',
    'website',
    'company_description',
    'contact_person',
    'email',
    'contact_number',
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitStatus('sending');
    const form = event.currentTarget;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    try {
      const formData = new FormData(form);
      formData.set('_url', window.location.href);

      const response = await fetch('https://formsubmit.co/ajax/anvar.mammadov@ceo.az', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <Page title={page.titles.becomeMember} lang={lang}>
      <form
        className="form-grid"
        action="https://formsubmit.co/anvar.mammadov@ceo.az"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New ASTA membership request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {page.joinFields.map((field, index) => (
          <label className="field" key={field}>
            <span>{field}</span>
            <input
              type={fieldNames[index] === 'email' ? 'email' : 'text'}
              name={fieldNames[index]}
              placeholder={field}
              required={['company', 'phone', 'contact_person', 'email'].includes(fieldNames[index])}
            />
          </label>
        ))}
        <button className="primary-action form-submit" type="submit" disabled={submitStatus === 'sending'}>
          <Send size={18} /> {submitStatus === 'sending' ? 'Sending...' : uiText[lang].send}
        </button>
        {submitStatus === 'success' && (
          <p className="form-status success">Message sent successfully.</p>
        )}
        {submitStatus === 'error' && (
          <p className="form-status error">Message could not be sent. Please try again.</p>
        )}
      </form>
    </Page>
  );
}
