/**
 * SINGLE SOURCE OF TRUTH for the site.
 *
 * TRUTHFULNESS RULE — Alba Corzo is a real physician.
 * Never invent credentials, numbers, awards, media coverage or outcomes.
 * Anything not yet confirmed by her stays as a `[bracketed placeholder]`
 * and its section stays switched off in `sections` below.
 * See VERIFY.md for the open list.
 */

export const SITE = {
  domain: "draalbacorzomd.com",
  url: "https://draalbacorzomd.com",

  /** CONFIRMED — her own public profiles use this name. */
  name: "Alba Corzo",
  formalName: "Dra. Alba Corzo",

  /** CONFIRMED — stated on her public Facebook profile. */
  title: {
    es: "Médica Health Coach",
    en: "Physician & Health Coach",
    pt: "Médica Health Coach",
    fr: "Médecin et Health Coach",
    it: "Medico e Health Coach",
    zh: "医师与健康教练",
  },

  /** UNCONFIRMED — verify her exact credential wording before launch. */
  credential: {
    es: "[Médica Cirujana — confirmar universidad y año]",
    en: "[Medical Doctor — confirm university and year]",
    pt: "[Médica — confirmar universidade e ano]",
    fr: "[Docteur en médecine — confirmer université et année]",
    it: "[Medico chirurgo — confermare università e anno]",
    zh: "[医学博士——待确认院校与年份]",
  },

  tagline: {
    es: "[Frase de posicionamiento — pendiente de aprobación]",
    en: "[Positioning line — pending approval]",
    pt: "[Frase de posicionamento — pendente de aprovação]",
    fr: "[Phrase de positionnement — en attente de validation]",
    it: "[Frase di posizionamento — in attesa di approvazione]",
    zh: "[定位语——待确认]",
  },

  contact: {
    email: "[email@draalbacorzomd.com]",
    /** Assistant's WhatsApp — Phase 2 of the blueprint. Digits only, no +. */
    whatsapp: "[WHATSAPP_ASISTENTE]",
    assistantEmail: "[EMAIL_ASISTENTE]",
  },

  /** CONFIRMED — publicly listed profiles. */
  socials: {
    instagram: "https://www.instagram.com/albacorzo.md/",
    facebook: "https://www.facebook.com/Dra.AlbaCorzo/",
    youtube: "",
    tiktok: "",
    linkedin: "",
  },

  /** UNCONFIRMED — ZoomInfo lists Bucaramanga, Santander plus a Miami Beach FL entry. */
  location: {
    es: "[Ciudad, País — confirmar]",
    en: "[City, Country — confirm]",
    pt: "[Cidade, País — confirmar]",
    fr: "[Ville, Pays — à confirmer]",
    it: "[Città, Paese — da confermare]",
    zh: "[城市、国家——待确认]",
  },

  /**
   * Feature flags. A section only renders once its content is REAL.
   * Flip to true in the same commit that adds the verified content.
   */
  sections: {
    stats: false,        // needs real, countable numbers
    testimonials: false, // needs consented, attributable testimonials
    press: false,        // needs real published article URLs
    books: false,        // needs real publications
    talks: false,        // needs real past/upcoming talks
    blog: true,          // safe: our own educational content
  },
} as const;

/** Every profile URL we can prove, for Schema.org `sameAs`. */
export const SAME_AS: string[] = [
  SITE.socials.instagram,
  SITE.socials.facebook,
].filter(Boolean);
