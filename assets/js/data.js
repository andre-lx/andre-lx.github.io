const main = [{
    intro: {
        image: "../images/index/pic01.JPG"
    },
    creating_opportunities: {
        image: "../images/index/pic02.jpeg",
        title: {
            pt: "Criando oportunidades",
            en: "Creating opportunities",
        },
        text: {
            pt: "Apaixonada por",
            en: "Passionate about creativity and designing sustainable projects.<br>The world will not be entirely sustainable overnight, but with effort, dedication and making the right and well thought-out choices, we can build the best path for that. If the big companies don't do it, it's up to the small companies to change the world.",
        }
    },
    projects: {
        title: {
            pt: "Projectos",
            en: "PROJECTS",
        },
        text: {
            pt: "lalala1",
            en: "Integer mollis egestas nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.",
        },
    },
    carrer_path: {
        title: {
            pt: "Carreira",
            en: "Career Path",
        },
        text: {
            pt: "",
            en: "",
        },
        subsections: {
            education: {
                title: {
                    pt: "Educação",
                    en: "Education",
                },
                text: {
                    pt: "Cada passo conta. A minha jornada do nada a alguma coisa.",
                    en: "Every step counts. My journey from nothing to something.",
                },
                courses: [{
                        name: {
                            pt: "LSD - Lisbon School Design - Modelista [2021]",
                            en: "LSD - Lisbon School Design - Pattern Maker [2021]",
                        },
                        favicon: "fa-tshirt"
                    },
                    {
                        name: {
                            pt: "Modatex - Workshop - Moda Praia 2 [2021]",
                            en: "Modatex - Workshop - BeashWear 2 [2021]",
                        },
                        favicon: "fa-umbrella-beach"
                    },
                    {
                        name: {
                            pt: "Modatex - Workshop - Moda Praia [2020]",
                            en: "Modatex - Workshop - Beachwear [2020]",
                        },
                        favicon: "fa-umbrella-beach"
                    },
                    {
                        name: {
                            pt: "Modatex - Técnicas de Arranjos em Confeção [2020]",
                            en: "Modatex - Técnicas de Arranjos em Confeção en [2020]",
                        },
                        favicon: "fa-cut"
                    },
                    {
                        name: {
                            pt: "IEFP - Design gráfico [2018-2020]",
                            en: "IEFP - Graphic Design [2018-2020]",
                        },
                        favicon: "fa-paint-roller"
                    },
                    {
                        name: {
                            pt: "Colégio São Miguel - Design",
                            en: "Fátima São Miguel Highschool - Design",
                        },
                        favicon: "fa-chalkboard-teacher"
                    }
                ],
                minicourses: {
                    title: {
                        pt: "mini-cursos",
                        en: "mini-courses",
                    },
                    items: [{
                            name: {
                                pt: "Modatex - Marketing Digital de Moda [2021-2022]",
                                en: "Modatex - Fashion Digital Marketing [2021-2022]",
                            },
                            favicon: "fa-search-dollar"
                        },
                        {
                            name: {
                                pt: "Modatex - Interpretação de croquis técnicos [2021-2022]",
                                en: "Modatex - Interpretação de croquis técnicos en [2021-2022]",
                            },
                            favicon: "fa-wrench"
                        },
                        {
                            name: {
                                pt: "Modatex - Plano de negócio - Criação de micronegócio [2020]",
                                en: "Modatex - business - - Criação de micronegócio [2020]",
                            },
                            favicon: "fa-tasks"
                        },
                    ]
                },
            },
            work: {
                title: {
                    pt: "Trabalho",
                    en: "Work",
                },
                text: {
                    pt: "Aprende algo novo todos os dias",
                    en: "Learn something new every day.",
                },
                items: [{
                        name: {
                            pt: "LIP Lisboa - Design gráfico [MAR 2020-presente]",
                            en: "LIP Lisboa - Graphic Designer [MAR 2020-present]",
                        },
                        favicon: "fa-edit"
                    },
                    {
                        name: {
                            pt: "Ajudante de costureira [2017-presente]",
                            en: "Ajudante de costureira en [2017-present]",
                        },
                        favicon: "fa-female"
                    },
                    {
                        name: {
                            pt: "Zara - Assistente de vendas [2019-2020]",
                            en: "Zara - Sales assistant [2019-2020]",
                        },
                        favicon: "fa-shopping-bag"
                    },
                ]
            },
            skills: {
                title: {
                    pt: "Skills pt",
                    en: "Skills",
                },
                text: {
                    pt: "Põe em prática.",
                    en: "Put it in practice",
                },
                items: [{
                        name: {
                            pt: "Photoshop",
                            en: "Photoshop",
                        },
                        favicon: "fa-images"
                    },
                    {
                        name: {
                            pt: "Illustrator",
                            en: "Illustrator",
                        },
                        favicon: "fa-pencil-ruler"
                    },
                    {
                        name: {
                            pt: "... +skills??? ...",
                            en: "... +skills en??? ...",
                        },
                        favicon: "fa-arrow-alt-circle-right"
                    },
                ]
            }
        }
    },
    get_in_touch: {
        image: "../images/index/pic03.jpeg",
        email: "sonia.r.94@gmail.com",
        addresstitle: {
            pt: "Localização",
            en: "Address",
        },
        address: {
            pt: "Lisboa, PT",
            en: "Lisbon, PT",
        },
        title: {
            pt: "Contactos",
            en: "GET IN TOUCH",
        },
        text: {
            pt: "Esteja a vontade",
            en: "Fell free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        },
        elsewhere: {
            pt: "Outros",
            en: "Elsewhere",
        },
    },
}, ]

const projects = {
    config: {
        paths: {
            images: "../images/gallery/fulls/",
            thumbnails: "../images/gallery/thumbs/",
        }
    },
    projects: [{
            title: {
                pt: "Bikinis",
                en: "Bikinis",
            },
            description: {
                pt: "isto é a descrição do projeto",
                en: "this is the project description",
            },
            images: [{
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem visivel",
                        en: "this is the visible image 1",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
                {
                    visible: false,
                    caption: {
                        pt: "isto é uma imagem invisivel 1",
                        en: "this is a not visible image 1",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
                {
                    visible: false,
                    caption: {
                        pt: "isto é uma imagem invisivel 2",
                        en: "this is a not visible image 2",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
                {
                    visible: false,
                    caption: {
                        pt: "isto é uma imagem invisivel 3",
                        en: "this is a not visible image 3",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
                {
                    visible: false,
                    caption: {
                        pt: "isto é uma imagem invisivel 4",
                        en: "this is a not visible image 4",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
                {
                    visible: false,
                    caption: {
                        pt: "isto é uma imagem invisivel 5",
                        en: "this is a not visible image 5",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 2",
                        en: "this is a not visible image 2",
                    },
                    thumbnail: "02.jpg",
                    fullimage: "02.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 3",
                        en: "this is a not visible image 3",
                    },
                    thumbnail: "03.jpg",
                    fullimage: "03.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 4",
                        en: "this is a not visible image 4",
                    },
                    thumbnail: "04.jpg",
                    fullimage: "04.jpg"
                },
            ],
        },
        {
            title: {
                pt: "Casacos",
                en: "Coats",
            },
            description: {
                pt: "isto é a descrição do projeto 2",
                en: "this is the project description 2",
            },
            images: [{
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 2.1",
                        en: "this is a not visible image 2.1",
                    },
                    thumbnail: "05.jpg",
                    fullimage: "05.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 2.2",
                        en: "this is a not visible image 2.2",
                    },
                    thumbnail: "06.jpg",
                    fullimage: "06.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 2.3",
                        en: "this is a not visible image 2.3",
                    },
                    thumbnail: "07.jpg",
                    fullimage: "07.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 2.4",
                        en: "this is a not visible image 2.4",
                    },
                    thumbnail: "08.jpg",
                    fullimage: "08.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 2.5",
                        en: "this is a not visible image 2.5",
                    },
                    thumbnail: "011.png",
                    fullimage: "011.png"
                },
            ],
        },
        {
            title: {
                pt: "Camisas",
                en: "Shirts",
            },
            description: {
                pt: "isto é a descrição do projeto 3",
                en: "this is the project description 3",
            },
            images: [{
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 3.1",
                        en: "this is a not visible image 3.1",
                    },
                    thumbnail: "09.jpg",
                    fullimage: "09.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 3.2",
                        en: "this is a not visible image 3.2",
                    },
                    thumbnail: "10.jpg",
                    fullimage: "10.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 3.3",
                        en: "this is a not visible image 3.3",
                    },
                    thumbnail: "08.jpg",
                    fullimage: "08.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 3.4",
                        en: "this is a not visible image 3.4",
                    },
                    thumbnail: "09.jpg",
                    fullimage: "09.jpg"
                },
            ],
        },
        {
            title: {
                pt: "Calças",
                en: "Pants",
            },
            description: {
                pt: "isto é a descrição do projeto 4",
                en: "this is the project description 4",
            },
            images: [{
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 4.1",
                        en: "this is a not visible image 4.1",
                    },
                    thumbnail: "09.jpg",
                    fullimage: "09.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 4.2",
                        en: "this is a not visible image 4.2",
                    },
                    thumbnail: "10.jpg",
                    fullimage: "10.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 4.3",
                        en: "this is a not visible image 4.3",
                    },
                    thumbnail: "08.jpg",
                    fullimage: "08.jpg"
                },
                {
                    visible: true,
                    caption: {
                        pt: "isto é uma imagem invisivel 4.4",
                        en: "this is a not visible image 4.4",
                    },
                    thumbnail: "09.jpg",
                    fullimage: "09.jpg"
                },
            ],
        }
    ]
}