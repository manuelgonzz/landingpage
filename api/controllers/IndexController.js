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
                picture: "https://uc8c15ee523b3caea18cc83a0720.previews.dropboxusercontent.com/p/thumb/AAbp0e-xsXgUMknXzwPZMxouIHjsuftHAYVLsl6Epc_A6Bs9UpzgI--adnCw7E99Mdi00BiXi9Rd5gcFeMXW4f5DyNLZf2g1aqdekxo3QPy9qEk5iWGQs2JcF6yKpBgIiluB59gG4idaguKvm0nzvCHl81SJ6o0zknnnQBF2yivAetqfGbYXTGpKGVeRd-nL5uiqpnsQbzTOVgsR3SQNCtU_5QCPhKzCo4RffyZ_SxRrP4zsWT4YhvnaZYzp7PZVwfIY2dLifPAvoZylwt9n-8p_2GU2FSUoYQnCx5ojCuDk352OYHGEvBgC4ciZl4Ju1jk6CXlTO63RvGhIPOuwxhkwAJ3jai1_9vf34cI3OmPXGuktHOfzKQRiSNoKPEc5ja8/p.jpeg?size_mode=5",
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
                picture: "https://uc523b397b3def57828fc6350d83.previews.dropboxusercontent.com/p/thumb/AAbq92hbxtlyVFx5XU896yze3ToIaP8e2rk5TI1CzjWWj_eY0pz8tGLuhPeS6ZIxdZfcSAhQ5TQ8zDvz8QemIMrRK8Iydr-126avjLTAHQ3AkFWsbyXsRbm09DaHJfMlNJaTZELR67FhGAYWwes9Jm9oL_DmRP9OsM2QCDYTtyw8kdGXiz9x9xCmV5HiHxkJbDamDoaqts-yB8INnhzg2PQoFisE7vc5t4v9c-uM8kM01UH7ZIV9SAR44w_OiozNXrXjGyBTroMr0u0BGPf3KNOthJZThU3AQwWuArSoFl7ik8nT8ef0Alj6I7wJ6hPxBv5JmHIX4I1Bk5pT27ELlthEwE_YelAV1D8e6l4ZnPpqRU2eyRhJGo9J29SlQU0dTLQ/p.jpeg?size_mode=5",
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
                                "1 Gb Storage",
                                "3 Domain Names",
                                "5 FTP Users",
                                "Free Support"
                            ],
                            value: "199",
                            frequency: "per month"
                        },
                        {
                            tittle: "Standard",
                            icon: "fa fa-gift",
                            list: [
                                "3 Gb Storage",
                                "5 Domain Names",
                                "7 FTP Users",
                                "Free Support"
                            ],
                            value: "239",
                            frequency: "per month"
                        },
                        {
                            tittle: "Optima",
                            icon: "fa fa-desktop",
                            list: [
                                "5 Gb Storage",
                                "9 Domain Names",
                                "15 FTP Users",
                                "Free Support"
                            ],
                            value: "399",
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
        return res.view('pages/homepage', { sliderInfo, team, navtabs, portfolio, features, partners, contact });
    }
};

