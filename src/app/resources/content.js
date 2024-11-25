import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Carlos',
    lastName: 'Martínez',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Creador de recursos educativos',
    avatar: '/images/avatar.jpg',
    location: '', // IANA time zone identifier, e.g., 'Europe/Madrid'
    languages: ['Español', 'English'] // Idiomas disponibles
};

const newsletter = {
    display: true,
    title: <>Bienvenidos a la web para las clases</>,
    description: <>Este sitio está en fase beta y todavía se están añadiendo más funcionalidades.</>
};

const social = [
    {
        name: 'Email',
        icon: 'email',
        link: 'carlos.educacion@example.com',
    },
];

const home = {
    label: 'Inicio',
    title: `Inicio`,
    description: `Web de recursos educativos creada por ${person.name}`,
    headline: <>Recursos educativos</>,
    subline: <>Explora herramientas y materiales para las clases.</>
};

const about = {
    label: 'Sobre la web',
    title: 'Información sobre este proyecto',
    description: `Este proyecto está diseñado para facilitar las clases y está en constante desarrollo.`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendario-clases.example.com'
    },
    intro: {
        display: true,
        title: 'Acerca del creador',
        description: <>Carlos ha desarrollado esta plataforma para ayudar a estudiantes y profesores.</>
    },
    features: [
        {
            company: 'Pizarra Digital',
            timeframe: 'Beta',
            role: 'Escribe y comparte ideas en tiempo real',
            achievements: [
                <>Función colaborativa para grupos</>,
                <>Compatible con dispositivos móviles</>
            ],
            images: []
        },
        {
            company: 'Calendario de Clases',
            timeframe: 'Beta',
            role: 'Organiza tus horarios fácilmente',
            achievements: [
                <>Sincronización con Google Calendar</>,
                <>Recordatorios automáticos</>
            ],
            images: []
        }
    ],
    studies: {
        display: true,
        title: 'Educación',
        institutions: [
            {
                name: 'Universidad de la Educación',
                description: <>Especialización en tecnologías educativas.</>
            },
            {
                name: 'Cursos Avanzados',
                description: <>Estudios en metodologías activas de aprendizaje.</>
            }
        ]
    },
    technical: {
        display: true,
        title: 'Habilidades técnicas',
        skills: [
            {
                title: 'Next.js',
                description: <>Desarrollo de aplicaciones educativas interactivas.</>,
                images: []
            },
            {
                title: 'Supabase',
                description: <>Gestión eficiente de bases de datos para recursos educativos.</>,
                images: []
            }
        ]
    }
};

const blog = {
    label: 'Blog',
    title: 'Escribiendo sobre educación y tecnología...',
    description: `Lee las últimas actualizaciones y reflexiones de ${person.name}.`
};

const work = {
    label: 'Proyectos',
    title: 'Mis proyectos',
    description: `Explora los proyectos educativos desarrollados por ${person.name}.`
};

const gallery = {
    label: 'Galería',
    title: 'Galería de recursos',
    description: `Colección de imágenes y recursos útiles seleccionados por ${person.name}.`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'Recurso 1',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'Recurso 2',
            orientation: 'horizontal'
        }
    ]
};

export { person, social, newsletter, home, about, blog, work, gallery };

