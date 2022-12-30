import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
} from "../assets";

//? Opciones de navbar
export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Características",
    },
    {
        id: "product",
        title: "Productos",
    },
    {
        id: "clients",
        title: "Clientes",
    },
];

//? Sección de características
export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Recompensas",
        content:
            "Las mejores tarjetas de crédito ofrecen algunas combinaciones tentadoras de promociones y premios.",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Seguro",
        content:
            "Tomamos medidas proactivas para asegurarnos de que su información y sus transacciones estén seguras.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Balance de Transferencia",
        content:
            "Una tarjeta de crédito de transferencia de saldo puede ahorrarle mucho dinero en cargos por intereses.",
    },
];

//? Sección de Feedbacks
export const feedback = [
    {
        id: "feedback-1",
        content:
            "El dinero es sólo una herramienta. Te llevará a donde quieras, pero no te reemplazará como conductor.",
        name: "Herman Jensen",
        title: "Fundador y lider",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "El dinero te hace la vida más fácil. Si tienes suerte de tenerlo, tienes suerte.",
        name: "Steve Mark",
        title: "Fundador y lider",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "Por lo general, son las personas en el negocio del dinero, las finanzas y el comercio internacional las que son realmente ricas.",
        name: "Kenn Gallagher",
        title: "Fundador y lider",
        img: people03,
    },
];

//? Sección de estadísticas
export const stats = [
    {
        id: "stats-1",
        title: "Usuarios activos",
        value: "3800+",
    },
    {
        id: "stats-2",
        title: "Empresas que nos utiliza",
        value: "230+",
    },
    {
        id: "stats-3",
        title: "Transacciones",
        value: "$230M+",
    },
];

//? Footer
export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Contenido",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "¿Como funciona?",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Crear",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explorar",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terminos & Condiciones",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Comunidad",
        links: [
            {
                name: "Centro de ayuda",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Patrocinadores",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Sugerencias",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Boletines",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Patrocinadores",
        links: [
            {
                name: "Nuestros socios",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Conviertete en un patrocinador",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

//? Redes socilaes
export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

//? Clientes
export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];
