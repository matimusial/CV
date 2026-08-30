import { useState } from "react";
import { Eye, Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";
import { profile } from "@/data/site";
import { useI18nContext } from "@/i18n/client";

export function Footer() {
  const { LL } = useI18nContext();
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  const currentYear = new Date().getFullYear();
  const emailHref = `mailto:${profile.email}`;
  const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer id="contact" className="site-footer px-5 pb-24 pt-14 sm:px-8 lg:pb-12">
      <div className="content-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="section-kicker">{LL.footer.kicker()}</p>
          <h2>{LL.footer.title()}</h2>
          {/* <button className="action-button action-button-primary mt-6 gap-2" onClick={onOpenContact}>
            <Mail size={18} />
            Napisz wiadomość
          </button> */}

          <div className="site-footer-contact-grid">
            {isPhoneRevealed ? (
              <a className="contact-reveal-card" href={phoneHref}>
                <span className="contact-reveal-icon">
                  <Phone size={20} />
                </span>
                <span className="contact-reveal-copy">
                  <small>{LL.footer.contact.phone.prompt()}</small>
                  <strong>{profile.phone}</strong>
                </span>
                <span className="contact-reveal-action">
                  <PhoneCall size={16} />
                  {LL.footer.contact.phone.call()}
                </span>
              </a>
            ) : (
              <button
                className="contact-reveal-card"
                onClick={() => setIsPhoneRevealed(true)}
              >
                <span className="contact-reveal-icon">
                  <Phone size={20} />
                </span>
                <span className="contact-reveal-copy">
                  <small>{LL.footer.contact.phone.prompt()}</small>
                  <strong className="is-blurred">{profile.phone}</strong>
                </span>
                <span className="contact-reveal-action">
                  <Eye size={16} />
                  {LL.footer.contact.phone.reveal()}
                </span>
              </button>
            )}

            {isEmailRevealed ? (
              <a className="contact-reveal-card" href={emailHref}>
                <span className="contact-reveal-icon">
                  <Mail size={20} />
                </span>
                <span className="contact-reveal-copy">
                  <small>{LL.footer.contact.email.prompt()}</small>
                  <strong>{profile.email}</strong>
                </span>
                <span className="contact-reveal-action">
                  <Send size={16} />
                  {LL.footer.contact.email.write()}
                </span>
              </a>
            ) : (
              <button
                className="contact-reveal-card"
                onClick={() => setIsEmailRevealed(true)}
              >
                <span className="contact-reveal-icon">
                  <Mail size={20} />
                </span>
                <span className="contact-reveal-copy">
                  <small>{LL.footer.contact.email.prompt()}</small>
                  <strong className="is-blurred">{profile.email}</strong>
                </span>
                <span className="contact-reveal-action">
                  <Eye size={16} />
                  {LL.footer.contact.email.reveal()}
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="site-footer-meta">
          <span>
            <MapPin size={16} />
            {LL.profile.location()}
          </span>
        </div>
      </div>
      <p className="site-footer-copy">{LL.footer.copyright({ year: currentYear })}</p>
    </footer>
  );
}
