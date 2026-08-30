import type { FormEvent } from "react";
import { Building2, LoaderCircle, Mail, MessageSquare, Send, User } from "lucide-react";
import { useI18nContext } from "@/i18n/client";
import { ModalFrame } from "@/components/common/ModalFrame";
import type { ContactForm } from "@/data/site";

export type ContactStatus = "idle" | "sending" | "sent" | "error";

interface ContactModalProps {
  error: string;
  form: ContactForm;
  onClose: () => void;
  onFieldChange: (field: keyof ContactForm, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  status: ContactStatus;
}

export function ContactModal({ error, form, onClose, onFieldChange, onSubmit, status }: ContactModalProps) {
  const { LL } = useI18nContext();

  return (
    <ModalFrame
      kicker={LL.contactModal.kicker()}
      onClose={onClose}
      title={LL.contactModal.title()}
    >
      <form className="mt-4 grid gap-4" onSubmit={onSubmit}>
        <label className="form-field">
          <span>
            <User size={16} />
            {LL.contactModal.fields.name()}
          </span>
          <input
            autoComplete="name"
            name="name"
            onChange={(event) => onFieldChange("name", event.target.value)}
            placeholder={LL.contactModal.placeholders.name()}
            required
            value={form.name}
          />
        </label>

        <label className="form-field">
          <span>
            <Mail size={16} />
            {LL.contactModal.fields.email()}
          </span>
          <input
            autoComplete="email"
            name="email"
            onChange={(event) => onFieldChange("email", event.target.value)}
            placeholder={LL.contactModal.placeholders.email()}
            required
            type="email"
            value={form.email}
          />
        </label>

        <label className="form-field">
          <span>
            <Building2 size={16} />
            {LL.contactModal.fields.company()}
          </span>
          <input
            autoComplete="organization"
            name="company"
            onChange={(event) => onFieldChange("company", event.target.value)}
            placeholder={LL.contactModal.placeholders.company()}
            value={form.company}
          />
        </label>

        <label className="form-field">
          <span>
            <MessageSquare size={16} />
            {LL.contactModal.fields.message()}
          </span>
          <textarea
            name="message"
            onChange={(event) => onFieldChange("message", event.target.value)}
            placeholder={LL.contactModal.placeholders.message()}
            required
            rows={5}
            value={form.message}
          />
        </label>

        {status === "sent" ? <p className="status-message status-success">{LL.contactModal.status.sent()}</p> : null}

        {status === "error" ? <p className="status-message status-error">{error}</p> : null}

        <button className="submit-button" disabled={status === "sending"} type="submit">
          {status === "sending" ? (
            <>
              <LoaderCircle className="animate-spin" size={19} />
              {LL.contactModal.sending()}
            </>
          ) : (
            <>
              <Send size={19} />
              {LL.contactModal.submit()}
            </>
          )}
        </button>
      </form>
    </ModalFrame>
  );
}
