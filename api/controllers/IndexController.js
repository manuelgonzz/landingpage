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
        return res.view('pages/homepage', { sliderInfo, team, navtabs });
    }
};

