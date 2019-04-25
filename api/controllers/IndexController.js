/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function (req, res) {
        let sliderInfo = [
            {
                h1Text: "Us",
                h2Text: "Develop your ideas with",
                image: "/images/slide/slide_glass_code.jpg"
            },
            {
                h1Text: "Bussiness",
                h2Text: "We innovate your",
                image: "/images/full-width-images/mechanic_keyboard.jpg"
            },
            {
                h1Text: "Amazing People",
                h2Text: "Create amazing products with",
                image: "/images/slide/code_alone.jpg"
            },
        ];

        let team = [
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Manuel Gonzalez",
                role: "SQA Automation Senior",
                picture: "https://previews.dropbox.com/p/thumb/AAYhsDaku5lYblPJ1XaqR1Cm95YR1-e8phbXSmoTRT0KJ-i8V133k_qNC7nXVeyCORNatQ6r7wGZuK_DPppIUHgzwvLl5JuvoiYoS8oP5CEB4OxYEU_xGpYxQapYInYK5jtfFJEQemRN7vbscvLTqWhRS0-oSpC8Y05Gz55f8rEL3AQyw-cnHaPt5DdeBW-IoSBxE5sihkoA-R7lK3bBdA2Ow3dlQHDYgafmtE7AegiGR27OweTF26OjUbQxWncrFmj7nfdtLf4FxAqyWk8acxMO129uSAHug68oj4as0MUjMwhH9pPy54wn-mYQCU2TDdV5opO0i3ySuNksA0rA0tOH/p.jpeg?size_mode=5",
                socials: [
                    { account: "https://instagram.com/manuel.gonzz?utm_source=ig_profile_share&igshid=1pvm0u5vvnacv", icon: "fa fa-instagram" },
                    { account: "https://www.linkedin.com/in/manuel-gonzalez-9b0066b1/", icon: "fa fa-linkedin" }
                ]
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Maximo De Leon",
                role: "Senior Software Engineer",
                picture: "https://previews.dropbox.com/p/thumb/AAZ8YGdNu64P7BvqDiWVPUVM3HRhHGaWiBKviOhZ6IRyDB4UXqDiFhlHmOeykOb1zpxlR5hLdx7H6novZa18xrcPYFHicp7FP_jMe6cQ_iJHOkmbqcdJUyyOXWpHA7RBC3PRdju4F6czcFIe5giNc7d_1EqQUzxwhD3PhCLvCRlNco2UGekHtTGUfoZI6b9kxZVOea3tkAt559h-0x_4vXu0Z02PCNVTvf5CNUXhHmTD6AHNZXL4xWV32nq9py8-QQ5elFIi8zUFiTMF5R8vPSSX4JEdEgokxrWx6L8cWCpWnUpLg6ykq5_KHZCJRkx1IjpVlUJuNuudkI0_pSK-5mMA/p.jpeg?size_mode=5",
                socials: [
                    { account: "https://instagram.com/max_lion?utm_source=ig_profile_share&igshid=1tf5zbsgm0z2k", icon: "fa fa-instagram" },
                    { account: "https://www.linkedin.com/in/maximo-de-le%C3%B3n-4b614199/", icon: "fa fa-linkedin" }
                ]
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Edwin Frias",
                role: "Software Developer",
                picture: "https://media.licdn.com/dms/image/C5603AQG94epnYPTSMA/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=3hbrzoMwlbWbqhacq_2vU6DXDGZusDwvBc2AWIAiVtk",
                socials: [
                    { account: "https://instagram.com/ing.edwinfrias?utm_source=ig_profile_share&igshid=etmy2c021hqb", icon: "fa fa-instagram" },
                    { account: "https://www.linkedin.com/in/ing-edwin-frias-marte-0b580938/", icon: "fa fa-linkedin" }
                ]
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Eliezer De Leon",
                role: "Software Developer",
                picture: "https://media.licdn.com/dms/image/C5603AQFOu-ySQR5zfQ/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=FfzbXBx3Lhv0ZNxT0BCEJPqLZqZWH1AeqXkMgBQM9eI",
                socials: [
                    { account: "https://instagram.com/eliezer.deleon?utm_source=ig_profile_share&igshid=i05iinh0li23", icon: "fa fa-instagram" },
                    { account: "https://www.linkedin.com/in/eliezer-de-le%C3%B3n-106964159/", icon: "fa fa-linkedin" }
                ]
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Johnny Gil",
                role: "Senior Mobile Developer",
                picture: "https://media.licdn.com/dms/image/C5603AQEomupXGC5XCg/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=I1Qby1mtJzMBsMIaT6ycEPS7Gc5CcsE6cKKIfrUISeM",
                socials: [
                    { account: "https://instagram.com/johnngil?utm_source=ig_profile_share&igshid=g9nngbrceitf", icon: "fa fa-instagram" },
                    { account: "https://www.linkedin.com/in/johnny-gil-mejia-529582b9/", icon: "fa fa-linkedin" }
                ]
            },
        ];

        let navtabs = {
            tabs: [
                { tittle: "Web Development", icon: "icon-desktop", tag: "#service-webdevelopment" },
                { tittle: "Web Design", icon: "icon-browser", tag: "#service-webdesign" },
                { tittle: "Mobile Development", icon: "icon-mobile", tag: "#service-mobiledevelopment" },
                { tittle: "Cloud Services", icon: "icon-cloud", tag: "#service-cloudservices" },
            ],
            sections: [
                {
                    quote: {
                        blockquote: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
                        author: "Jeff Bezos"
                    },
                    paragraphOne: "pOne",
                    paragraphTwo: "pTwo",
                    tag: "service-webdevelopment"

                },
                {
                    quote: {
                        blockquote: "What separates design from art is that design is meant to be... functional.",
                        author: "Cameron Moll"
                    },
                    paragraphOne: "pOne",
                    paragraphTwo: "pTwo",
                    tag: "service-webdesign"

                },
                {
                    quote: {
                        blockquote: "Innovation distinguishes between a leader and a follower.",
                        author: "Steve Jobs"
                    },
                    paragraphOne: "pOne",
                    paragraphTwo: "pTwo",
                    tag: "service-mobiledevelopment"

                },
                {
                    quote: {
                        blockquote: "Cloud is about how you do computing, not where you do computing.",
                        author: "Paul Maritz"
                    },
                    paragraphOne: "pOne",
                    paragraphTwo: "pTwo",
                    tag: "service-cloudservices",
                    pricing: "../layouts/cloud_pricing.ejs",
                    stacks: [
                        {
                            tittle: "Start",
                            icon: "fa fa-paper-plane-o",
                            list: [
                                "8 GB of Memory",
                                "2 vCPU's",
                                "25 GB SSD Disk",
                                "4 TB of Transfer"
                            ],
                            value: "63",
                            frequency: "per month"
                        },
                        {
                            tittle: "Start",
                            icon: "fa fa-paper-plane-o",
                            list: [
                                "16 GB of Memory",
                                "4 vCPU's",
                                "50 GB SSD Disk",
                                "5 TB of Transfer"
                            ],
                            value: "125",
                            frequency: "per month"
                        },
                        {
                            tittle: "Start",
                            icon: "fa fa-paper-plane-o",
                            list: [
                                "32 Gb of Memory",
                                "8 vCPU's",
                                "100 GB SSD Disk",
                                "6 TB of Transfer"
                            ],
                            value: "248",
                            frequency: "per month"
                        },
                        {
                            tittle: "Start",
                            icon: "fa fa-paper-plane-o",
                            list: [
                                "64 GB of Memory",
                                "16 vCPU's",
                                "200 GB SSD Disk",
                                "7 TB of Transfer"
                            ],
                            value: "490",
                            frequency: "per month"
                        },
                        {
                            tittle: "Start",
                            icon: "fa fa-paper-plane-o",
                            list: [
                                "128 Gb of Memory",
                                "32 vCPU's",
                                "400 SSD Disk",
                                "8 TB of Transfer"
                            ],
                            value: "1000",
                            frequency: "per month"
                        },
                        {
                            tittle: "Start",
                            icon: "fa fa-paper-plane-o",
                            list: [
                                "160 GB of Memory",
                                "40 vCPU's",
                                "500 GB SSD Disk",
                                "9 TB of Transfer"
                            ],
                            value: "1280",
                            frequency: "per month"
                        },
                    ]

                },
            ]
        };

        let portfolio = [
            {
                section: "service-webdevelopment",
                thumpnail: "",
                fullpicture: "https://udemy-images.udemy.com/course/750x422/11174_cbb1_116.jpg",
                name: "WorkName",
                client: "WorkClient"
            },
            {
                section: "service-webdesign",
                thumpnail: "",
                fullpicture: "https://blog.hubspot.com/hs-fs/hub/53/file-2542784971-jpeg/web-design.jpeg",
                name: "WorkName",
                client: "WorkClient"
            },
            {
                section: "service-mobiledevelopment",
                thumpnail: "",
                fullpicture: "https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2015/12/app-development-lifecycle.jpg",
                name: "WorkName",
                client: "WorkClient"
            },
            {
                section: "service-cloudservices",
                thumpnail: "",
                fullpicture: "https://www.supraits.com/wp-content/uploads/2018/01/Cloud-Computing-1.jpg",
                name: "WorkName",
                client: "WorkClient"
            }
        ];

        let features = [
            { icon: "icon-toolbox", tittle: "We're Responsible", description: "We take our work very seriously, which is why our commitments are the engine that drives our development and thus provide a product of high value and quality." },
            { icon: "icon-clock", tittle: "We're Efficient", description: "We make sure to treat each commitment with the level of importance it requires in order to achieve a delivery that presents optimal results in the shortest possible time." },
            { icon: "icon-anchor", tittle: "We're Transparent", description: "Our budgets are presented in a flat and uncomplicated way, in order to provide them with the greatest clarity possible when presenting the cost of purchase." },
            { icon: "icon-genius", tittle: "We Love to Innovate", description: "We love being at the forefront in order to provide our clients with solutions that adapt to the new requirements that only state-of-the-art technologies can provide in order to obtain better results in each of our deliveries." },
        ];

        let partners = [
            {
                name: "Wulpers",
                description: "Are a small team of great designers and marketers helping startups to give the Jump.",
                picture: "https://media.licdn.com/dms/image/C4D0BAQGOw0k89Qdsfg/company-logo_200_200/0?e=2159024400&v=beta&t=AnG0L-QlSR6IhEsdhvvlm5PbCiAptrVxyBCUEpIRamg",
            },
            {
                name: "Wulpers",
                description: "Are a small team of great designers and marketers helping startups to give the Jump.",
                picture: "https://media.licdn.com/dms/image/C4D0BAQGOw0k89Qdsfg/company-logo_200_200/0?e=2159024400&v=beta&t=AnG0L-QlSR6IhEsdhvvlm5PbCiAptrVxyBCUEpIRamg",
            },
            {
                name: "Wulpers",
                description: "Are a small team of great designers and marketers helping startups to give the Jump.",
                picture: "https://media.licdn.com/dms/image/C4D0BAQGOw0k89Qdsfg/company-logo_200_200/0?e=2159024400&v=beta&t=AnG0L-QlSR6IhEsdhvvlm5PbCiAptrVxyBCUEpIRamg",
            },
            {
                name: "Wulpers",
                description: "Are a small team of great designers and marketers helping startups to give the Jump.",
                picture: "https://media.licdn.com/dms/image/C4D0BAQGOw0k89Qdsfg/company-logo_200_200/0?e=2159024400&v=beta&t=AnG0L-QlSR6IhEsdhvvlm5PbCiAptrVxyBCUEpIRamg",
            },
        ];

        let contact = {
            phone: "xxx.xxx.xxxx",
            address: "xxxx.xxxx.xxxx.xxxx",
            email: "devincoderd@gmail.com"
        }

        let products = [
            {
                name:"Warehause App",
                description:"",
                tag:"warehause",
                pictures:["images/portfolio/full-project-1.jpg", "images/portfolio/full-project-2.jpg"],
                pricing: "../layouts/cloud_pricing.ejs",
                stacks:[
                    {
                        tittle:"Basic",
                        icon: "fa fa-leaf",
                        list:["Inventory","Billing", "Security", "Receivables"],
                        value:"",
                        frequency:""
                    },
                    {
                        tittle:"Intermediate",
                        icon: "fa fa-paper-plane-o",
                        list:["Inventory","Billing", "Security", "Receivables", "Accounts Payable", "Petty Cash"],
                        value:"",
                        frequency:""
                    },
                    {
                        tittle:"Advanced",
                        icon: "fa fa-fighter-jet",
                        list:["Inventory","Billing", "Security", "Receivables", "Accounts Payable", "Petty Cash", "User Management", "Bank"],
                        value:"",
                        frequency:""
                    },
                ]
            },
        ];

        return res.view('pages/homepage', { sliderInfo, team, navtabs, portfolio, features, partners, contact, products });
    }
};

