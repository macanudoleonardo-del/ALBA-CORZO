import type { LocalizedText, RouteKey } from "@/lib/i18n";

/**
 * Per-page SEO copy. Every title and description is unique per page AND
 * per language — no duplicated meta across the six locales.
 */
export const PAGE_SEO: Record<RouteKey, { title: LocalizedText; description: LocalizedText }> = {
  home: {
    title: {
      es: "Dra. Alba Corzo — Médica Health Coach",
      en: "Dr. Alba Corzo — Physician & Health Coach",
      pt: "Dra. Alba Corzo — Médica Health Coach",
      fr: "Dre Alba Corzo — Médecin et Health Coach",
      it: "Dott.ssa Alba Corzo — Medico e Health Coach",
      zh: "Alba Corzo 医生 — 医师与健康教练",
    },
    description: {
      es: "Médica y health coach. Salud desde la práctica clínica y el acompañamiento en hábitos sostenibles.",
      en: "Physician and health coach. Health from clinical practice and sustainable habit change.",
      pt: "Médica e health coach. Saúde a partir da prática clínica e de hábitos sustentáveis.",
      fr: "Médecin et health coach. La santé à partir de la pratique clinique et d'habitudes durables.",
      it: "Medico e health coach. La salute a partire dalla pratica clinica e da abitudini sostenibili.",
      zh: "医师与健康教练。从临床实践出发，陪伴可持续的习惯改变。",
    },
  },
  about: {
    title: {
      es: "Sobre mí — Dra. Alba Corzo", en: "About — Dr. Alba Corzo",
      pt: "Sobre mim — Dra. Alba Corzo", fr: "À propos — Dre Alba Corzo",
      it: "Chi sono — Dott.ssa Alba Corzo", zh: "关于我 — Alba Corzo 医生",
    },
    description: {
      es: "Formación médica, trayectoria clínica y el enfoque de la Dra. Alba Corzo en salud y hábitos.",
      en: "Medical training, clinical background and Dr. Alba Corzo's approach to health and habits.",
      pt: "Formação médica, trajetória clínica e a abordagem da Dra. Alba Corzo em saúde e hábitos.",
      fr: "Formation médicale, parcours clinique et approche de la Dre Alba Corzo en santé et habitudes.",
      it: "Formazione medica, percorso clinico e approccio della Dott.ssa Alba Corzo a salute e abitudini.",
      zh: "Alba Corzo 医生的医学训练、临床经历，以及她对健康与习惯的方法。",
    },
  },
  talks: {
    title: {
      es: "Conferencias — Dra. Alba Corzo", en: "Talks — Dr. Alba Corzo",
      pt: "Palestras — Dra. Alba Corzo", fr: "Conférences — Dre Alba Corzo",
      it: "Conferenze — Dott.ssa Alba Corzo", zh: "演讲 — Alba Corzo 医生",
    },
    description: {
      es: "Temas, formatos e información para invitar a la Dra. Alba Corzo a conferencias y eventos.",
      en: "Topics, formats and booking information for inviting Dr. Alba Corzo to speak.",
      pt: "Temas, formatos e informações para convidar a Dra. Alba Corzo para palestras e eventos.",
      fr: "Thèmes, formats et informations pour inviter la Dre Alba Corzo à intervenir.",
      it: "Temi, formati e informazioni per invitare la Dott.ssa Alba Corzo a intervenire.",
      zh: "邀请 Alba Corzo 医生演讲的主题、形式与相关信息。",
    },
  },
  press: {
    title: {
      es: "Prensa — Dra. Alba Corzo", en: "Press — Dr. Alba Corzo",
      pt: "Imprensa — Dra. Alba Corzo", fr: "Presse — Dre Alba Corzo",
      it: "Stampa — Dott.ssa Alba Corzo", zh: "媒体 — Alba Corzo 医生",
    },
    description: {
      es: "Apariciones en medios, material de prensa y contacto para periodistas.",
      en: "Media appearances, press materials and contact details for journalists.",
      pt: "Aparições na imprensa, material de imprensa e contato para jornalistas.",
      fr: "Apparitions médiatiques, dossier de presse et contact pour les journalistes.",
      it: "Apparizioni sui media, materiali stampa e contatti per i giornalisti.",
      zh: "媒体报道、新闻资料与记者联系方式。",
    },
  },
  blog: {
    title: {
      es: "Artículos — Dra. Alba Corzo", en: "Articles — Dr. Alba Corzo",
      pt: "Artigos — Dra. Alba Corzo", fr: "Articles — Dre Alba Corzo",
      it: "Articoli — Dott.ssa Alba Corzo", zh: "文章 — Alba Corzo 医生",
    },
    description: {
      es: "Educación en salud escrita con rigor clínico: señales del cuerpo, hábitos, descanso y alimentación.",
      en: "Health education written with clinical rigor: the body's signals, habits, rest and nutrition.",
      pt: "Educação em saúde escrita com rigor clínico: sinais do corpo, hábitos, descanso e alimentação.",
      fr: "Éducation à la santé écrite avec rigueur clinique : signaux du corps, habitudes, repos et alimentation.",
      it: "Educazione alla salute scritta con rigore clinico: segnali del corpo, abitudini, riposo e alimentazione.",
      zh: "以临床严谨写就的健康科普：身体信号、习惯、休息与饮食。",
    },
  },
  contact: {
    title: {
      es: "Contacto — Dra. Alba Corzo", en: "Contact — Dr. Alba Corzo",
      pt: "Contato — Dra. Alba Corzo", fr: "Contact — Dre Alba Corzo",
      it: "Contatti — Dott.ssa Alba Corzo", zh: "联系 — Alba Corzo 医生",
    },
    description: {
      es: "Contacto para conferencias, eventos corporativos, medios y colaboraciones.",
      en: "Contact for talks, corporate events, media enquiries and collaborations.",
      pt: "Contato para palestras, eventos corporativos, imprensa e colaborações.",
      fr: "Contact pour conférences, événements d'entreprise, médias et collaborations.",
      it: "Contatti per conferenze, eventi aziendali, stampa e collaborazioni.",
      zh: "演讲、企业活动、媒体与合作的联系方式。",
    },
  },
  challenge: {
    title: {
      es: "5 días de escucha — Dra. Alba Corzo",
      en: "5 Days of Listening — Dr. Alba Corzo",
      pt: "5 dias de escuta — Dra. Alba Corzo",
      fr: "5 jours d'écoute — Dre Alba Corzo",
      it: "5 giorni di ascolto — Dott.ssa Alba Corzo",
      zh: "倾听身体的五天 — Alba Corzo 医生",
    },
    description: {
      es: "Un reto de cinco días con cuatro gestos pequeños al día: escucha, mesa, movimiento y descanso. Educación en salud, sin dietas ni promesas.",
      en: "A five-day challenge with four small actions a day: listening, table, movement and rest. Health education, without diets or promises.",
      pt: "Um desafio de cinco dias com quatro gestos pequenos por dia: escuta, mesa, movimento e descanso. Educação em saúde, sem dietas nem promessas.",
      fr: "Un défi de cinq jours avec quatre petits gestes par jour : écoute, table, mouvement et repos. De l'éducation à la santé, sans régime ni promesses.",
      it: "Una sfida di cinque giorni con quattro piccoli gesti al giorno: ascolto, tavola, movimento e riposo. Educazione alla salute, senza diete né promesse.",
      zh: "五天挑战，每天四个小动作：倾听、餐桌、活动与休息。健康科普，不谈节食，不做承诺。",
    },
  },
};
