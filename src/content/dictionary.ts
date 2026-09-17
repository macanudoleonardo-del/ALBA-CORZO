import type { LocalizedText } from "@/lib/i18n";

export const DICT = {
  navHome:    { es: "Inicio", en: "Home", pt: "Início", fr: "Accueil", it: "Home", zh: "首页" },
  navAbout:   { es: "Sobre mí", en: "About", pt: "Sobre mim", fr: "À propos", it: "Chi sono", zh: "关于" },
  navTalks:   { es: "Conferencias", en: "Talks", pt: "Palestras", fr: "Conférences", it: "Conferenze", zh: "演讲" },
  navPress:   { es: "Prensa", en: "Press", pt: "Imprensa", fr: "Presse", it: "Stampa", zh: "媒体" },
  navBlog:    { es: "Blog", en: "Blog", pt: "Blog", fr: "Blog", it: "Blog", zh: "文章" },
  navChallenge: { es: "Reto de 5 días", en: "5-Day Challenge", pt: "Desafio de 5 dias", fr: "Défi 5 jours", it: "Sfida di 5 giorni", zh: "五天挑战" },
  navContact: { es: "Contacto", en: "Contact", pt: "Contato", fr: "Contact", it: "Contatti", zh: "联系" },

  heroCta: { es: "Hablemos", en: "Get in touch", pt: "Vamos conversar", fr: "Parlons-en", it: "Parliamone", zh: "联系我" },
  heroCtaSecondary: {
    es: "Conoce mi enfoque", en: "See my approach", pt: "Conheça minha abordagem",
    fr: "Découvrir mon approche", it: "Scopri il mio approccio", zh: "了解我的方法",
  },

  aboutTitle: { es: "Sobre mí", en: "About", pt: "Sobre mim", fr: "À propos", it: "Chi sono", zh: "关于我" },
  approachTitle: { es: "Mi enfoque", en: "My approach", pt: "Minha abordagem", fr: "Mon approche", it: "Il mio approccio", zh: "我的方法" },
  approachLead: {
    es: "Medicina que escucha al cuerpo entero, no sólo al síntoma.",
    en: "Medicine that listens to the whole body, not just the symptom.",
    pt: "Medicina que escuta o corpo inteiro, não apenas o sintoma.",
    fr: "Une médecine qui écoute le corps entier, pas seulement le symptôme.",
    it: "Una medicina che ascolta tutto il corpo, non solo il sintomo.",
    zh: "倾听整个身体的医学，而不只是症状。",
  },

  talksTitle: { es: "Conferencias y eventos", en: "Talks & events", pt: "Palestras e eventos", fr: "Conférences et événements", it: "Conferenze ed eventi", zh: "演讲与活动" },
  pressTitle: { es: "Prensa", en: "Press", pt: "Imprensa", fr: "Presse", it: "Stampa", zh: "媒体报道" },
  blogTitle:  { es: "Artículos", en: "Articles", pt: "Artigos", fr: "Articles", it: "Articoli", zh: "文章" },
  blogLead: {
    es: "Educación en salud, escrita con rigor y sin promesas fáciles.",
    en: "Health education, written with rigor and without easy promises.",
    pt: "Educação em saúde, escrita com rigor e sem promessas fáceis.",
    fr: "De l'éducation à la santé, écrite avec rigueur et sans promesses faciles.",
    it: "Educazione alla salute, scritta con rigore e senza promesse facili.",
    zh: "严谨的健康科普，不做轻易的承诺。",
  },
  contactTitle: { es: "Contacto", en: "Contact", pt: "Contato", fr: "Contact", it: "Contatti", zh: "联系方式" },
  contactLead: {
    es: "Para conferencias, medios y colaboraciones.",
    en: "For talks, media and collaborations.",
    pt: "Para palestras, imprensa e colaborações.",
    fr: "Pour les conférences, les médias et les collaborations.",
    it: "Per conferenze, stampa e collaborazioni.",
    zh: "演讲、媒体与合作洽谈。",
  },

  formName:     { es: "Nombre", en: "Name", pt: "Nome", fr: "Nom", it: "Nome", zh: "姓名" },
  formEmail:    { es: "Email", en: "Email", pt: "Email", fr: "E-mail", it: "Email", zh: "电子邮箱" },
  formWhatsapp: { es: "WhatsApp (opcional)", en: "WhatsApp (optional)", pt: "WhatsApp (opcional)", fr: "WhatsApp (facultatif)", it: "WhatsApp (facoltativo)", zh: "WhatsApp（选填）" },
  formCompany:  { es: "Empresa u organización", en: "Company or organization", pt: "Empresa ou organização", fr: "Entreprise ou organisation", it: "Azienda o organizzazione", zh: "公司或机构" },
  formTopic:    { es: "Tipo de consulta", en: "Type of enquiry", pt: "Tipo de consulta", fr: "Type de demande", it: "Tipo di richiesta", zh: "咨询类型" },
  formMessage:  { es: "Mensaje", en: "Message", pt: "Mensagem", fr: "Message", it: "Messaggio", zh: "留言" },
  formSubmit:   { es: "Enviar", en: "Send", pt: "Enviar", fr: "Envoyer", it: "Invia", zh: "发送" },
  formSending:  { es: "Enviando…", en: "Sending…", pt: "Enviando…", fr: "Envoi…", it: "Invio…", zh: "发送中…" },
  formSuccess: {
    es: "Gracias. Hemos recibido tu mensaje y te responderemos pronto.",
    en: "Thank you. We've received your message and will reply shortly.",
    pt: "Obrigada. Recebemos sua mensagem e responderemos em breve.",
    fr: "Merci. Nous avons bien reçu votre message et vous répondrons rapidement.",
    it: "Grazie. Abbiamo ricevuto il tuo messaggio e ti risponderemo presto.",
    zh: "谢谢。我们已收到您的留言，会尽快回复。",
  },
  formError: {
    es: "No pudimos enviar el mensaje. Escríbenos directamente por email.",
    en: "We couldn't send the message. Please email us directly.",
    pt: "Não conseguimos enviar a mensagem. Escreva diretamente por email.",
    fr: "L'envoi a échoué. Écrivez-nous directement par e-mail.",
    it: "Non siamo riusciti a inviare il messaggio. Scrivici direttamente via email.",
    zh: "消息发送失败，请直接发邮件给我们。",
  },

  topicTalk:      { es: "Conferencia / Keynote", en: "Talk / Keynote", pt: "Palestra / Keynote", fr: "Conférence / Keynote", it: "Conferenza / Keynote", zh: "主题演讲" },
  topicCorporate: { es: "Evento corporativo", en: "Corporate event", pt: "Evento corporativo", fr: "Événement d'entreprise", it: "Evento aziendale", zh: "企业活动" },
  topicMentoring: { es: "Mentoría", en: "Mentoring", pt: "Mentoria", fr: "Mentorat", it: "Mentoring", zh: "个人辅导" },
  topicCollab:    { es: "Colaboración", en: "Collaboration", pt: "Colaboração", fr: "Collaboration", it: "Collaborazione", zh: "合作" },
  topicMedia:     { es: "Medios", en: "Media", pt: "Imprensa", fr: "Médias", it: "Stampa", zh: "媒体" },
  topicOther:     { es: "Otro", en: "Other", pt: "Outro", fr: "Autre", it: "Altro", zh: "其他" },

  comingSoon: { es: "Próximamente", en: "Coming soon", pt: "Em breve", fr: "Bientôt disponible", it: "Presto disponibile", zh: "敬请期待" },
  emptyBlog: {
    es: "Los primeros artículos se publicarán muy pronto.",
    en: "The first articles will be published very soon.",
    pt: "Os primeiros artigos serão publicados em breve.",
    fr: "Les premiers articles paraîtront très bientôt.",
    it: "I primi articoli saranno pubblicati molto presto.",
    zh: "首批文章即将发布。",
  },

  medicalNoteTitle: { es: "Nota importante", en: "Important note", pt: "Nota importante", fr: "Note importante", it: "Nota importante", zh: "重要提示" },
  medicalNote: {
    es: "El contenido de este sitio es educación general en salud y no sustituye la consulta, el diagnóstico ni el tratamiento médico individual. No suspendas ni modifiques ningún medicamento sin hablar antes con tu médico tratante.",
    en: "The content on this site is general health education and does not replace individual medical consultation, diagnosis or treatment. Do not stop or change any medication without first speaking to your treating physician.",
    pt: "O conteúdo deste site é educação geral em saúde e não substitui consulta, diagnóstico ou tratamento médico individual. Não suspenda nem altere nenhum medicamento sem antes falar com seu médico.",
    fr: "Le contenu de ce site relève de l'éducation générale à la santé et ne remplace ni consultation, ni diagnostic, ni traitement médical individuel. N'arrêtez et ne modifiez aucun médicament sans en parler d'abord à votre médecin traitant.",
    it: "I contenuti di questo sito sono educazione sanitaria generale e non sostituiscono la visita, la diagnosi o il trattamento medico individuale. Non sospendere né modificare alcun farmaco senza averne prima parlato con il tuo medico curante.",
    zh: "本网站内容为一般健康教育，不能替代个体化的医疗咨询、诊断或治疗。在未咨询主治医生之前，请勿停用或更改任何药物。",
  },

  rights: { es: "Todos los derechos reservados.", en: "All rights reserved.", pt: "Todos os direitos reservados.", fr: "Tous droits réservés.", it: "Tutti i diritti riservati.", zh: "保留所有权利。" },
  socialLabel: { es: "Redes", en: "Social", pt: "Redes", fr: "Réseaux", it: "Social", zh: "社交媒体" },
} satisfies Record<string, LocalizedText>;
