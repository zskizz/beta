import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Carlos',
        lastName:  'Developer',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role", { default: "Desarrollador de Clases" }),
        avatar:    '/images/avatar.jpg',
        location:  'Europe/Madrid',
        languages: ['Español', 'Inglés']  
    };

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
        description: <>{t("newsletter.description", { default: "Esta web está en beta y puede contener errores." })}</>
    };

    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/carlos-dev-clases',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:carlos@developer.com',
        },
    ];

    const home = {
        label: t("home.label", { default: "Inicio" }),
        title: t("home.title", { name: person.name }),
        description: t("home.description", { role: person.role }),
        headline: <>{t("home.headline", { default: "Recursos para las Clases" })}</>,
        subline: <>{t("home.subline", { default: "Explora herramientas útiles y contenido educativo." })}</>
    };

    const about = {
        label: t("about.label", { default: "Acerca de" }),
        title: t("about.title", { default: "Sobre Carlos y su Trabajo" }),
        description: t("about.description", { name: person.name, role: person.role, location: person.location }),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://calendar.com/carlos'
        },
        intro: {
            display: true,
            title: t("about.intro.title", { default: "¿Quién soy?" }),
            description: <>{t("about.intro.description", { default: "Soy Carlos, un desarrollador apasionado por crear herramientas útiles para clases." })}</>
        },
        work: {
            display: true,
            title: t("about.work.title", { default: "Proyectos" }),
            experiences: [
                {
                    company: 'Clases IA',
                    timeframe: t("about.work.experiences.ClasesIA.timeframe", { default: "2023 - Presente" }),
                    role: t("about.work.experiences.ClasesIA.role", { default: "Desarrollador Principal" }),
                    achievements: t("about.work.experiences.ClasesIA.achievements", { default: "Automatización de tareas educativas; Diseño de interfaces intuitivas" }).split(";"),
                    images: []
                },
            ]
        },
        studies: {
            display: true,
            title: t("about.studies.title", { default: "Educación" }),
            institutions: [
                {
                    name: 'Universidad de la Tecnología',
                    description: <>{t("about.studies.institutions.UT.description", { default: "Ingeniería en Software Educativo." })}</>,
                }
            ]
        },
        technical: {
            display: true,
            title: t("about.technical.title", { default:
