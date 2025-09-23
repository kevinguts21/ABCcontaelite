import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  discord,
  telegram,
  x,
  yourlogo,
  whatsapp,
  gmail,
  cliref,
  ruedas_caiman,
  unaicc,
  excel,
  dujo,
  preger,
  quintana,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Sobre Nosotros",
    url: "#about",
  },
  {
    id: "1",
    title: "Servicios",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Qué hacemos",
    url: "#services",
  },
  {
    id: "3",
    title: "Contáctanos",
    url: "#footer",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  dujo,
  cliref,
  ruedas_caiman,
  unaicc,
  preger,
  quintana,
];

export const brainwaveServices = [
  "Gestión precisa",
  "Cumplimiento legal",
  "Asesoramiento personalizado",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "excel",
    icon: excel,
    width: 50,
    height: 50,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Control de las operaciones contables mensuales",
    description: "Gestión contable básica para autónomos y pequeñas empresas",
    
    features: [
      "Registro y control de ingresos y gastos mensuales",
      "Elaboración de balances y estados financieros básicos",
      "Cumplimiento de obligaciones fiscales periódicas",
    ],
  },
  {
    id: "1",
    title: "Asesoría Fiscal",
    description: "Optimización tributaria para maximizar tus beneficios",
    
    features: [
      "Análisis personalizado de tu situación fiscal",
      "Estrategias legales para reducir tu carga impositiva",
      "Presentación y seguimiento de declaraciones fiscales",
    ],
  },
  {
    id: "2",
    title: "Consultoría Económica",
    description: "Apoyo estratégico para decisiones financieras clave",
    
    features: [
      "Evaluación financiera de proyectos o inversiones",
      "Proyecciones económicas y análisis de rentabilidad",
      "Recomendaciones basadas en indicadores financieros",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Consulta cualquier duda contable",
    text: "Facilita a los usuarios la obtención ágil de respuestas claras a sus preguntas contables y financieras, optimizando su tiempo y recursos.",
    backgroundUrl: "./src/assets/benefits/card-1-red-border.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mejora cada día",
    text: "Nuestro equipo de profesionales capacitados en contabilidad está preparado para responder con precisión y claridad a tus consultas financieras, facilitando la gestión diaria de tu empresa.",
    backgroundUrl: "./src/assets/benefits/card-1-red-border.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Conéctate desde donde quieras",
    text: "Accede a nuestros servicios contables desde cualquier lugar y dispositivo, facilitando la gestión financiera de tu empresa con flexibilidad y comodidad.",
    backgroundUrl: "./src/assets/benefits/card-1-red-border.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Fácil Acceso",
    text: "accede a nuestra sede fácilmente, atendemos de 8am – 4pm",
    backgroundUrl: "./src/assets/benefits/card-1-red-border.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Horario Flexible",
    text: "Nuestros especialistas y técnicos que trabajen en empresas estatales lo harán lunes, miércoles y viernes, en el horario comprendido de 8 y 30 am hasta la 1 y 30 pm",
    backgroundUrl: "./src/assets/benefits/card-1-red-border.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Qué actividades no desarrollamos",
    text: "Cajeros, almaceneros o dependientes de Almacén.",
    backgroundUrl: "./src/assets/benefits/card-1-red-border.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "X",
    iconUrl: x,
    url: "https://x.com/ABContaelite",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/abc_contaelite?igsh=MWU5ZDM2NHNicjM2dg==",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/share/1CDiXFHVKh/?mibextid=wwXIfr",
  },
  {
    id: "4",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: "https://wa.me/+5354638504",
  },
  {
    id: "5",
    title: "Gmail",
    iconUrl: gmail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=abccontaelite.oficial@gmail.com",
  },
];
