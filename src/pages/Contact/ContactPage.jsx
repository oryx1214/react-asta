import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Page from '../../components/UI/Page.jsx';
import { pages, uiText } from '../../data/i18n.js';
import '../../components/UI/Form.css';
import './ContactPage.css';

export default function ContactPage({ lang = 'az' }) {
  const page = pages[lang];
  const address = lang === 'az'
    ? 'Azərbaycan, Bakı, Nərimanov rayonu, Zaur Nudirəliyev küçəsi, 61, AZ1075'
    : 'Azerbaijan, Baku, Narimanov district, Zaur Nudiraliyev street, 61, AZ1075';
  const fieldNames = ['name', 'email', 'phone', 'subject'];
  const [submitStatus, setSubmitStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitStatus('sending');
    const form = event.currentTarget;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    try {
      const formData = new FormData(form);
      formData.set('_url', window.location.href);

      const response = await fetch('https://formsubmit.co/ajax/info@asta.az', {
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
    <Page title={page.titles.contact} lang={lang}>
      <div className="contact-page-grid">
        <div className="contact-card">
          <h3>ASTA</h3>
          <a href="https://maps.google.com/?q=Zaur%20Nudir%C9%99liyev%2061%20Baku">
            <MapPin size={18} /> {address}
          </a>
          <a href="tel:+994554000540"><Phone size={18} /> +994 55 400-05-40</a>
          <a href="mailto:info@asta.az"><Mail size={18} /> info@asta.az</a>
        </div>
        <form
          className="form-grid compact-form"
          action="https://formsubmit.co/info@asta.az"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New message from ASTA contact form" />
          <input type="hidden" name="_cc" value="anvar.mammadov@ceo.az" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          {page.contactFields.map((field, index) => (
            <label className="field" key={field}>
              <span>{field}</span>
              <input
                type={fieldNames[index] === 'email' ? 'email' : 'text'}
                name={fieldNames[index]}
                placeholder={field}
                required={index < 2}
              />
            </label>
          ))}
          <label className="field full">
            <span>{page.message}</span>
            <textarea name="message" placeholder={page.message} required />
          </label>
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
      </div>
    </Page>
  );
}
