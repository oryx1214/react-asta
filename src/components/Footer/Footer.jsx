import { Mail, MapPin, Phone } from 'lucide-react';
import { pages, uiText } from '../../data/i18n.js';
import { asset } from '../../utils/assets.js';
import './Footer.css';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.5 8.1V6.7c0-.7.5-.9.9-.9h2.4V2.1L14.5 2c-3.6 0-4.4 2.7-4.4 4.4v1.7H7.3V12h2.8v10h4.1V12h3.4l.5-3.9h-3.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.9 8.9H3V21h3.9V8.9ZM5 3a2.3 2.3 0 1 0 0 4.6A2.3 2.3 0 0 0 5 3Zm16 11.4c0-3.6-1.9-5.8-4.9-5.8-2.2 0-3.2 1.2-3.8 2.1V8.9H8.5V21h3.9v-6c0-1.6.3-3.1 2.2-3.1s2 1.8 2 3.2V21H21v-6.6Z" />
    </svg>
  );
}

export default function Footer({ lang = 'az' }) {
  const text = uiText[lang];
  const title = pages[lang].titles.contact;
  const address = lang === 'az'
    ? 'Azərbaycan, Bakı, Nərimanov rayonu, Zaur Nudirəliyev küçəsi, 61, AZ1075'
    : 'Azerbaijan, Baku, Narimanov district, Zaur Nudiraliyev street, 61, AZ1075';

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={asset('logo_asta_az_clean.png')} width="230" height="69" alt="ASTA" />
          <p>{text.footerText}</p>
        </div>
        <div className="contact-list">
          <h2>{title}</h2>
          <a href="https://www.google.com/maps/place/Caspian+Event+Organisers+(CEO)/@40.4126151,49.85489,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d6d96a7a0e5:0xe466794cc2f694fc!8m2!3d40.4126151!4d49.85489!16s%2Fg%2F11swtc32qm?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"><MapPin size={18} /> <span>{address}</span></a>
          <a href="tel:+994554000540"><Phone size={18} /> <span>+994 55 400-05-40</span></a>
          <a href="mailto:info@asta.az"><Mail size={18} /> <span>info@asta.az</span></a>
          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=100091667512885&locale=ru_RU" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.instagram.com/asta.azerbaijan/" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/company/asta-azerbaijan/" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">{text.copyright}</div>
      </div>
    </footer>
  );
}
