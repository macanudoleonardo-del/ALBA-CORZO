import type { LocalizedText } from "@/lib/i18n";

/**
 * "5 días de escucha" — a five-day habit challenge.
 *
 * Built entirely from Alba Corzo's own stated topics (the body's signals,
 * rest, nutrition, sustainability of change — see src/content/faq.ts).
 * Nothing here is borrowed from any other brand.
 *
 * Every prompt is a small, safe, general-wellbeing action. No prompt tells
 * anyone to change, reduce or stop a treatment, and none promises an outcome.
 */

export const CHALLENGE_TITLE: LocalizedText = {
  es: "5 días de escucha",
  en: "5 Days of Listening",
  pt: "5 dias de escuta",
  fr: "5 jours d'écoute",
  it: "5 giorni di ascolto",
  zh: "倾听身体的五天",
};

export const CHALLENGE_LEAD: LocalizedText = {
  es: "Cinco días, cuatro gestos pequeños al día. No es una dieta ni un plan de choque: es aprender a escuchar lo que tu cuerpo ya te está diciendo.",
  en: "Five days, four small actions a day. Not a diet and not a crash plan: a way to start hearing what your body is already telling you.",
  pt: "Cinco dias, quatro gestos pequenos por dia. Não é dieta nem plano de choque: é aprender a escutar o que seu corpo já está dizendo.",
  fr: "Cinq jours, quatre petits gestes par jour. Ni régime ni plan choc : apprendre à écouter ce que votre corps vous dit déjà.",
  it: "Cinque giorni, quattro piccoli gesti al giorno. Non è una dieta né un piano d'urto: è imparare ad ascoltare ciò che il tuo corpo ti sta già dicendo.",
  zh: "五天，每天四个小动作。这不是节食，也不是速成计划，而是学会听懂身体早已发出的信号。",
};

/** The four axes, repeated each day. */
export const AXES: { key: string; label: LocalizedText }[] = [
  {
    key: "listen",
    label: { es: "Escucha", en: "Listen", pt: "Escuta", fr: "Écoute", it: "Ascolto", zh: "倾听" },
  },
  {
    key: "table",
    label: { es: "Mesa", en: "Table", pt: "Mesa", fr: "Table", it: "Tavola", zh: "餐桌" },
  },
  {
    key: "movement",
    label: { es: "Movimiento", en: "Movement", pt: "Movimento", fr: "Mouvement", it: "Movimento", zh: "活动" },
  },
  {
    key: "rest",
    label: { es: "Descanso", en: "Rest", pt: "Descanso", fr: "Repos", it: "Riposo", zh: "休息" },
  },
];

export type ChallengeDay = {
  day: number;
  theme: LocalizedText;
  listen: LocalizedText;
  table: LocalizedText;
  movement: LocalizedText;
  rest: LocalizedText;
};

export const CHALLENGE_DAYS: ChallengeDay[] = [
  {
    day: 1,
    theme: {
      es: "Notar dónde estás", en: "Notice where you are", pt: "Notar onde você está",
      fr: "Remarquer où vous en êtes", it: "Notare dove sei", zh: "看清你现在的状态",
    },
    listen: {
      es: "Anota a qué hora del día apareció tu mayor bajón de energía. Sólo obsérvalo, no lo corrijas todavía.",
      en: "Write down the time of day your energy dipped most. Just observe it — don't fix it yet.",
      pt: "Anote em que hora do dia sua energia caiu mais. Apenas observe, ainda não corrija.",
      fr: "Notez à quel moment de la journée votre énergie a le plus chuté. Observez seulement, ne corrigez pas encore.",
      it: "Annota in che momento della giornata la tua energia è calata di più. Osserva soltanto, non correggere ancora.",
      zh: "记下今天精力最低落的时段。只观察，先不要改变。",
    },
    table: {
      es: "Come una comida sin pantallas. Nota cuándo aparece la señal de saciedad.",
      en: "Eat one meal with no screens. Notice when the signal of fullness arrives.",
      pt: "Faça uma refeição sem telas. Note quando aparece o sinal de saciedade.",
      fr: "Prenez un repas sans écran. Remarquez quand arrive le signal de satiété.",
      it: "Fai un pasto senza schermi. Nota quando arriva il segnale di sazietà.",
      zh: "吃一顿不看屏幕的饭，留意饱腹感在什么时候出现。",
    },
    movement: {
      es: "Camina diez minutos, aunque sea dentro de casa.",
      en: "Walk for ten minutes, even if it's indoors.",
      pt: "Caminhe dez minutos, mesmo dentro de casa.",
      fr: "Marchez dix minutes, même à l'intérieur.",
      it: "Cammina dieci minuti, anche in casa.",
      zh: "走十分钟，在家里走也可以。",
    },
    rest: {
      es: "Apunta a qué hora te acostaste. Sin juicio: es tu punto de partida.",
      en: "Note what time you went to bed. No judgement — it's your starting point.",
      pt: "Anote a que horas você foi dormir. Sem julgamento: é seu ponto de partida.",
      fr: "Notez l'heure à laquelle vous vous êtes couché. Sans jugement : c'est votre point de départ.",
      it: "Segna a che ora sei andata a letto. Senza giudizio: è il tuo punto di partenza.",
      zh: "记下你上床的时间。不评判，这只是起点。",
    },
  },
  {
    day: 2,
    theme: {
      es: "Empezar el día distinto", en: "Start the day differently", pt: "Começar o dia diferente",
      fr: "Commencer la journée autrement", it: "Iniziare la giornata in modo diverso", zh: "换一种方式开始一天",
    },
    listen: {
      es: "Antes de mirar el teléfono, quédate un minuto en silencio y pregúntate cómo amaneciste.",
      en: "Before looking at your phone, sit in silence for a minute and ask how you woke up feeling.",
      pt: "Antes de olhar o celular, fique um minuto em silêncio e pergunte-se como acordou.",
      fr: "Avant de regarder votre téléphone, restez une minute en silence et demandez-vous comment vous vous sentez au réveil.",
      it: "Prima di guardare il telefono, resta un minuto in silenzio e chiediti come ti sei svegliata.",
      zh: "在看手机之前，安静一分钟，问问自己今天醒来是什么感觉。",
    },
    table: {
      es: "Incluye una fuente de proteína en el desayuno y observa cómo llegas al mediodía.",
      en: "Include a source of protein at breakfast and notice how you arrive at midday.",
      pt: "Inclua uma fonte de proteína no café da manhã e observe como você chega ao meio-dia.",
      fr: "Incluez une source de protéines au petit-déjeuner et observez comment vous arrivez à midi.",
      it: "Includi una fonte di proteine a colazione e osserva come arrivi a mezzogiorno.",
      zh: "早餐加入一份蛋白质，留意自己到中午时的状态。",
    },
    movement: {
      es: "Sal a la luz natural en la primera hora del día, aunque sean cinco minutos.",
      en: "Get into natural light within the first hour of your day, even for five minutes.",
      pt: "Pegue luz natural na primeira hora do dia, nem que sejam cinco minutos.",
      fr: "Exposez-vous à la lumière naturelle dans la première heure de la journée, même cinq minutes.",
      it: "Esci alla luce naturale nella prima ora della giornata, anche solo cinque minuti.",
      zh: "在起床后的第一个小时里晒到自然光，哪怕只有五分钟。",
    },
    rest: {
      es: "Adelanta quince minutos la hora de acostarte.",
      en: "Move your bedtime fifteen minutes earlier.",
      pt: "Antecipe em quinze minutos a hora de dormir.",
      fr: "Avancez votre heure de coucher de quinze minutes.",
      it: "Anticipa di quindici minuti l'ora di andare a letto.",
      zh: "把上床时间提前十五分钟。",
    },
  },
  {
    day: 3,
    theme: {
      es: "La pausa antes del impulso", en: "The pause before the urge", pt: "A pausa antes do impulso",
      fr: "La pause avant l'impulsion", it: "La pausa prima dell'impulso", zh: "冲动之前的停顿",
    },
    listen: {
      es: "Cuando aparezca un antojo, espera sesenta segundos antes de decidir. Nota qué sentiste en ese minuto.",
      en: "When a craving shows up, wait sixty seconds before deciding. Notice what you felt in that minute.",
      pt: "Quando surgir uma vontade, espere sessenta segundos antes de decidir. Note o que sentiu nesse minuto.",
      fr: "Quand une envie apparaît, attendez soixante secondes avant de décider. Remarquez ce que vous avez ressenti.",
      it: "Quando arriva una voglia, aspetta sessanta secondi prima di decidere. Nota che cosa hai provato.",
      zh: "当渴望出现时，先等六十秒再决定。留意这一分钟里的感受。",
    },
    table: {
      es: "Bebe un vaso de agua antes de cada comida.",
      en: "Drink a glass of water before each meal.",
      pt: "Beba um copo de água antes de cada refeição.",
      fr: "Buvez un verre d'eau avant chaque repas.",
      it: "Bevi un bicchiere d'acqua prima di ogni pasto.",
      zh: "每餐前喝一杯水。",
    },
    movement: {
      es: "Levántate y muévete dos minutos por cada hora sentada.",
      en: "Stand up and move for two minutes for every hour you spend sitting.",
      pt: "Levante-se e movimente-se dois minutos a cada hora sentada.",
      fr: "Levez-vous et bougez deux minutes pour chaque heure passée assise.",
      it: "Alzati e muoviti due minuti per ogni ora seduta.",
      zh: "每坐一小时，起身活动两分钟。",
    },
    rest: {
      es: "Deja el teléfono fuera de la habitación, o al menos fuera de la cama.",
      en: "Leave your phone outside the bedroom, or at least out of the bed.",
      pt: "Deixe o celular fora do quarto, ou ao menos fora da cama.",
      fr: "Laissez votre téléphone hors de la chambre, ou au moins hors du lit.",
      it: "Lascia il telefono fuori dalla camera, o almeno fuori dal letto.",
      zh: "把手机放在卧室外，至少别放在床上。",
    },
  },
  {
    day: 4,
    theme: {
      es: "Lo que sostiene, no lo que exige", en: "What sustains, not what demands",
      pt: "O que sustenta, não o que exige", fr: "Ce qui soutient, pas ce qui exige",
      it: "Ciò che sostiene, non ciò che pretende", zh: "选择能支撑你的，而不是消耗你的",
    },
    listen: {
      es: "Identifica un hábito que hoy te costó menos de lo que esperabas. Ese es el que vas a conservar.",
      en: "Identify one habit that cost you less than you expected today. That's the one you'll keep.",
      pt: "Identifique um hábito que hoje custou menos do que você esperava. Esse é o que vai manter.",
      fr: "Identifiez une habitude qui vous a moins coûté que prévu aujourd'hui. C'est celle que vous garderez.",
      it: "Individua un'abitudine che oggi ti è costata meno del previsto. È quella che terrai.",
      zh: "找出今天做起来比预想中轻松的一个习惯。那就是你要保留的。",
    },
    table: {
      es: "Prepara una comida en casa, aunque sea sencilla.",
      en: "Cook one meal at home, however simple.",
      pt: "Prepare uma refeição em casa, mesmo que simples.",
      fr: "Préparez un repas à la maison, même simple.",
      it: "Prepara un pasto a casa, anche semplice.",
      zh: "在家做一顿饭，简单也没关系。",
    },
    movement: {
      es: "Elige un movimiento que disfrutes, no uno que te castigue.",
      en: "Choose a movement you enjoy, not one that punishes you.",
      pt: "Escolha um movimento que você goste, não um que a castigue.",
      fr: "Choisissez un mouvement qui vous plaît, pas un qui vous punit.",
      it: "Scegli un movimento che ti piace, non uno che ti punisce.",
      zh: "选一种你享受的活动，而不是惩罚自己的方式。",
    },
    rest: {
      es: "Baja la intensidad de las luces una hora antes de dormir.",
      en: "Dim the lights an hour before sleep.",
      pt: "Diminua as luzes uma hora antes de dormir.",
      fr: "Baissez les lumières une heure avant de dormir.",
      it: "Abbassa le luci un'ora prima di dormire.",
      zh: "睡前一小时把灯光调暗。",
    },
  },
  {
    day: 5,
    theme: {
      es: "Quedarte con una sola cosa", en: "Keep just one thing", pt: "Ficar com uma só coisa",
      fr: "N'en garder qu'une seule", it: "Tenere una cosa sola", zh: "只留下一件事",
    },
    listen: {
      es: "Compara cómo amaneciste hoy con lo que anotaste el día 1.",
      en: "Compare how you woke up today with what you wrote on day 1.",
      pt: "Compare como você acordou hoje com o que anotou no dia 1.",
      fr: "Comparez votre réveil d'aujourd'hui avec ce que vous aviez noté au jour 1.",
      it: "Confronta come ti sei svegliata oggi con quello che avevi annotato il giorno 1.",
      zh: "把今天醒来的感觉和第一天写下的做个对比。",
    },
    table: {
      es: "Repite la comida que mejor te sentó esta semana.",
      en: "Repeat the meal that sat best with you this week.",
      pt: "Repita a refeição que melhor lhe caiu nesta semana.",
      fr: "Refaites le repas qui vous a le mieux convenu cette semaine.",
      it: "Ripeti il pasto che questa settimana ti ha fatto sentire meglio.",
      zh: "重复本周让你感觉最好的那一餐。",
    },
    movement: {
      es: "Agenda tu próxima caminata antes de que termine el día.",
      en: "Schedule your next walk before the day ends.",
      pt: "Agende sua próxima caminhada antes de o dia terminar.",
      fr: "Planifiez votre prochaine marche avant la fin de la journée.",
      it: "Programma la prossima camminata prima che finisca la giornata.",
      zh: "在今天结束前，安排好下一次散步。",
    },
    rest: {
      es: "Elige UN solo hábito para sostener el mes que viene. Uno. El que ya demostró que puedes.",
      en: "Choose ONE habit to carry into next month. One. The one that already proved you can.",
      pt: "Escolha UM único hábito para sustentar no próximo mês. Um. Aquele que já provou que você consegue.",
      fr: "Choisissez UNE seule habitude à poursuivre le mois prochain. Une. Celle qui a déjà prouvé que vous en êtes capable.",
      it: "Scegli UNA sola abitudine da portare avanti il mese prossimo. Una. Quella che ha già dimostrato che puoi.",
      zh: "选出唯一一个要延续到下个月的习惯。就一个——那个已经证明你做得到的。",
    },
  },
];

/** Shown above the days. Non-negotiable on a physician's site. */
export const CHALLENGE_SAFETY: LocalizedText = {
  es: "Este reto es educación general en salud y no sustituye la consulta médica. Ninguna de estas acciones reemplaza tu tratamiento: no suspendas ni modifiques ningún medicamento por tu cuenta. Si vives con diabetes, tomas medicación para la glucosa o la presión, o estás embarazada, consulta antes con tu médico tratante.",
  en: "This challenge is general health education and does not replace medical consultation. None of these actions replaces your treatment: do not stop or change any medication on your own. If you live with diabetes, take glucose or blood-pressure medication, or are pregnant, speak with your treating physician first.",
  pt: "Este desafio é educação geral em saúde e não substitui a consulta médica. Nenhuma destas ações substitui seu tratamento: não suspenda nem altere medicamentos por conta própria. Se você vive com diabetes, toma medicação para glicose ou pressão, ou está grávida, fale antes com seu médico.",
  fr: "Ce défi relève de l'éducation générale à la santé et ne remplace pas une consultation médicale. Aucune de ces actions ne remplace votre traitement : n'arrêtez et ne modifiez aucun médicament seule. Si vous vivez avec un diabète, prenez un traitement pour la glycémie ou la tension, ou êtes enceinte, parlez-en d'abord à votre médecin.",
  it: "Questa sfida è educazione sanitaria generale e non sostituisce la visita medica. Nessuna di queste azioni sostituisce la tua terapia: non sospendere né modificare farmaci da sola. Se convivi con il diabete, assumi farmaci per la glicemia o la pressione, o sei incinta, parlane prima con il tuo medico curante.",
  zh: "本挑战属于一般健康教育，不能替代就医。其中任何做法都不能替代你的治疗：请勿自行停药或改变用药。如果你患有糖尿病、正在服用降糖或降压药物，或处于孕期，请先咨询你的主治医生。",
};
