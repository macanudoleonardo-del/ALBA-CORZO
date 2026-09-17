"use client";

import { useState } from "react";
import { tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");

  const topics = [
    tr(DICT.topicTalk, locale),
    tr(DICT.topicCorporate, locale),
    tr(DICT.topicMentoring, locale),
    tr(DICT.topicCollab, locale),
    tr(DICT.topicMedia, locale),
    tr(DICT.topicOther, locale),
  ];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg border border-accent/40 bg-accent/5 p-6 text-sm leading-relaxed text-foreground">
        {tr(DICT.formSuccess, locale)}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Honeypot — bots fill this, humans never see it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm text-muted">{tr(DICT.formName, locale)}</span>
          <input required name="name" className={FIELD} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted">{tr(DICT.formEmail, locale)}</span>
          <input required type="email" name="email" className={FIELD} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm text-muted">{tr(DICT.formWhatsapp, locale)}</span>
          <input name="whatsapp" inputMode="tel" className={FIELD} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted">{tr(DICT.formCompany, locale)}</span>
          <input name="company" className={FIELD} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm text-muted">{tr(DICT.formTopic, locale)}</span>
        <select name="topic" className={FIELD} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm text-muted">{tr(DICT.formMessage, locale)}</span>
        <textarea required name="message" rows={5} className={FIELD} />
      </label>

      {status === "error" && (
        <p className="text-sm text-accent-soft">{tr(DICT.formError, locale)}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? tr(DICT.formSending, locale) : tr(DICT.formSubmit, locale)}
      </button>
    </form>
  );
}
