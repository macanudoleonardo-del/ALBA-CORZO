import type { LocalizedText } from "@/lib/i18n";

/**
 * PLACEHOLDER BIO — nothing here is yet a claim about Alba Corzo.
 * Replace each bracketed block with her own approved words before launch.
 * Never add credentials, numbers or outcomes she has not confirmed.
 */
export const BIO_SHORT: LocalizedText = {
  es: "[Bio corta — 2 frases, en sus propias palabras: quién es y a quién acompaña.]",
  en: "[Short bio — 2 sentences, in her own words: who she is and who she helps.]",
  pt: "[Bio curta — 2 frases, nas palavras dela: quem é e quem acompanha.]",
  fr: "[Bio courte — 2 phrases, dans ses mots : qui elle est et qui elle accompagne.]",
  it: "[Bio breve — 2 frasi, con le sue parole: chi è e chi accompagna.]",
  zh: "[简短介绍——两句话，用她自己的话：她是谁，她帮助谁。]",
};

export const BIO_LONG: LocalizedText[] = [
  {
    es: "[Párrafo 1 — formación médica: universidad, título, años de práctica clínica.]",
    en: "[Paragraph 1 — medical training: university, degree, years in clinical practice.]",
    pt: "[Parágrafo 1 — formação médica: universidade, título, anos de prática clínica.]",
    fr: "[Paragraphe 1 — formation médicale : université, diplôme, années de pratique clinique.]",
    it: "[Paragrafo 1 — formazione medica: università, titolo, anni di pratica clinica.]",
    zh: "[第一段——医学训练：大学、学位、临床执业年数。]",
  },
  {
    es: "[Párrafo 2 — el giro hacia el acompañamiento en hábitos y estilo de vida, y por qué.]",
    en: "[Paragraph 2 — the turn toward habit and lifestyle coaching, and why.]",
    pt: "[Parágrafo 2 — a virada para o acompanhamento de hábitos e estilo de vida, e por quê.]",
    fr: "[Paragraphe 2 — le tournant vers l'accompagnement des habitudes et du mode de vie, et pourquoi.]",
    it: "[Paragrafo 2 — la svolta verso l'accompagnamento su abitudini e stile di vita, e perché.]",
    zh: "[第二段——转向习惯与生活方式辅导的经过，以及原因。]",
  },
  {
    es: "[Párrafo 3 — a quién acompaña hoy y cómo trabaja con sus pacientes.]",
    en: "[Paragraph 3 — who she works with today and how.]",
    pt: "[Parágrafo 3 — quem ela acompanha hoje e como trabalha.]",
    fr: "[Paragraphe 3 — qui elle accompagne aujourd'hui et comment elle travaille.]",
    it: "[Paragrafo 3 — chi accompagna oggi e come lavora.]",
    zh: "[第三段——她目前服务的人群，以及她的工作方式。]",
  },
];

/** Pillars of her work. Wording is deliberately careful and non-curative. */
export const PILLARS: { title: LocalizedText; body: LocalizedText }[] = [
  {
    title: {
      es: "Escuchar al cuerpo", en: "Listening to the body", pt: "Escutar o corpo",
      fr: "Écouter le corps", it: "Ascoltare il corpo", zh: "倾听身体",
    },
    body: {
      es: "El dolor y el cansancio son señales, no fallas. El primer paso es entender qué está pidiendo el cuerpo antes de silenciarlo.",
      en: "Pain and fatigue are signals, not failures. The first step is understanding what the body is asking for before silencing it.",
      pt: "Dor e cansaço são sinais, não falhas. O primeiro passo é entender o que o corpo está pedindo antes de silenciá-lo.",
      fr: "La douleur et la fatigue sont des signaux, pas des défaillances. La première étape est de comprendre ce que le corps demande avant de le faire taire.",
      it: "Il dolore e la stanchezza sono segnali, non guasti. Il primo passo è capire che cosa sta chiedendo il corpo prima di zittirlo.",
      zh: "疼痛与疲惫是信号，不是故障。第一步是理解身体在要求什么，而不是先让它安静下来。",
    },
  },
  {
    title: {
      es: "Hábitos sostenibles", en: "Sustainable habits", pt: "Hábitos sustentáveis",
      fr: "Des habitudes durables", it: "Abitudini sostenibili", zh: "可持续的习惯",
    },
    body: {
      es: "Cambios pequeños que se sostienen en el tiempo pesan más que un plan perfecto que dura dos semanas.",
      en: "Small changes that hold over time matter more than a perfect plan that lasts two weeks.",
      pt: "Pequenas mudanças que se sustentam ao longo do tempo valem mais que um plano perfeito que dura duas semanas.",
      fr: "De petits changements qui tiennent dans la durée valent mieux qu'un plan parfait qui dure deux semaines.",
      it: "Piccoli cambiamenti che durano nel tempo contano più di un piano perfetto che dura due settimane.",
      zh: "能长期坚持的小改变，胜过只维持两周的完美计划。",
    },
  },
  {
    title: {
      es: "Acompañamiento, no promesas", en: "Support, not promises", pt: "Acompanhamento, não promessas",
      fr: "Un accompagnement, pas des promesses", it: "Accompagnamento, non promesse", zh: "陪伴，而非承诺",
    },
    body: {
      es: "Un proceso de salud se acompaña con evidencia y con honestidad sobre lo que sí y lo que no se puede esperar.",
      en: "A health journey is supported with evidence and with honesty about what can and cannot be expected.",
      pt: "Um processo de saúde se acompanha com evidência e com honestidade sobre o que se pode e o que não se pode esperar.",
      fr: "Un parcours de santé s'accompagne avec des preuves et avec honnêteté sur ce que l'on peut — et ne peut pas — attendre.",
      it: "Un percorso di salute si accompagna con le evidenze e con onestà su ciò che si può e non si può aspettare.",
      zh: "健康之路需要循证的陪伴，也需要诚实说明什么可以期待、什么不能。",
    },
  },
];
