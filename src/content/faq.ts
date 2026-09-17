import type { LocalizedText } from "@/lib/i18n";

/** FAQ Schema source (blueprint Phase 3). Answers stay conservative. */
export const TALKS_FAQ: { q: LocalizedText; a: LocalizedText }[] = [
  {
    q: {
      es: "¿Sobre qué temas habla la Dra. Alba Corzo?",
      en: "What topics does Dr. Alba Corzo speak on?",
      pt: "Sobre quais temas a Dra. Alba Corzo fala?",
      fr: "Sur quels sujets intervient la Dre Alba Corzo ?",
      it: "Di quali temi parla la Dott.ssa Alba Corzo?",
      zh: "Alba Corzo 医生的演讲主题有哪些？",
    },
    a: {
      es: "Salud desde la práctica médica y el acompañamiento en hábitos: señales del cuerpo, descanso, alimentación y sostenibilidad del cambio.",
      en: "Health from clinical practice and habit coaching: the body's signals, rest, nutrition and making change sustainable.",
      pt: "Saúde a partir da prática médica e do acompanhamento de hábitos: sinais do corpo, descanso, alimentação e sustentabilidade da mudança.",
      fr: "La santé à partir de la pratique médicale et de l'accompagnement des habitudes : les signaux du corps, le repos, l'alimentation et la durabilité du changement.",
      it: "La salute a partire dalla pratica medica e dall'accompagnamento sulle abitudini: i segnali del corpo, il riposo, l'alimentazione e la sostenibilità del cambiamento.",
      zh: "从临床实践与习惯辅导出发的健康主题：身体信号、休息、饮食，以及如何让改变可持续。",
    },
  },
  {
    q: {
      es: "¿En qué idiomas presenta?", en: "In which languages does she present?",
      pt: "Em quais idiomas ela apresenta?", fr: "En quelles langues intervient-elle ?",
      it: "In quali lingue interviene?", zh: "她可以用哪些语言演讲？",
    },
    a: {
      es: "Español e inglés.", en: "Spanish and English.", pt: "Espanhol e inglês.",
      fr: "En espagnol et en anglais.", it: "Spagnolo e inglese.", zh: "西班牙语和英语。",
    },
  },
  {
    q: {
      es: "¿Cómo se solicita una conferencia?", en: "How do I book a talk?",
      pt: "Como solicitar uma palestra?", fr: "Comment réserver une conférence ?",
      it: "Come si richiede una conferenza?", zh: "如何邀请她演讲？",
    },
    a: {
      es: "A través del formulario de contacto de este sitio, indicando fecha, formato y audiencia del evento.",
      en: "Through the contact form on this site, including the event's date, format and audience.",
      pt: "Pelo formulário de contato deste site, informando data, formato e público do evento.",
      fr: "Via le formulaire de contact de ce site, en précisant la date, le format et le public de l'événement.",
      it: "Tramite il modulo di contatto di questo sito, indicando data, formato e pubblico dell'evento.",
      zh: "请通过本网站的联系表单提交，并注明活动日期、形式与听众。",
    },
  },
];
