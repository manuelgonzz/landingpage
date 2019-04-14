/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function (req, res) {
        let sliderInfo = [{ h1Text: "Amazing Design", h2Text: "Create your dream with", image: "/images/slide/code_alone.jpg" }];
        let team = [
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Maximo De Leon",
                role: "CEO",
                picture: "/images/team/team-1.jpg",
                socials: [
                    { account: "blablablafacebook.com", icon: "fa fa-facebook" },
                    { account: "blablablatwitter.com", icon: "fa fa-twitter" },
                    { account: "blablablatwitter.com", icon: "fa fa-pinterest" }
                ]
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Eliezer De Leon",
                role: "CEO",
                picture: "/images/team/team-1.jpg",
                socials: [
                    { account: "blablablafacebook.com", icon: "fa fa-youtube" },
                    { account: "blablablafacebook.com", icon: "fa fa-facebook" },
                    { account: "blablablatwitter.com", icon: "fa fa-twitter" },
                    { account: "blablablatwitter.com", icon: "fa fa-pinterest" }
                ]
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Edwin Frias",
                role: "CEO",
                picture: "/images/team/team-1.jpg",
                socials: [
                    { account: "blablablafacebook.com", icon: "fa fa-facebook" },
                    { account: "blablablatwitter.com", icon: "fa fa-twitter" },
                    { account: "blablablatwitter.com", icon: "fa fa-pinterest" }
                ]
            }
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
                    tag: "service-cloudservices"

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
        return res.view('pages/homepage', { sliderInfo, team, navtabs, portfolio, features, partners });
    }
};

