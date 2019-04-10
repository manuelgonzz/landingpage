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
            },
            {
                greeting: "Hello!",
                postGreeting: "Devin Activo post gretting.",
                name: "Manuel Gonzalez",
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
                name: "Jhonny Gil",
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
                name: "Jhonny Gil",
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
                name: "Jhonny Gil",
                role: "CEO",
                picture: "/images/team/team-1.jpg",
                socials: [
                    { account: "blablablafacebook.com", icon: "fa fa-facebook" },
                    { account: "blablablatwitter.com", icon: "fa fa-twitter" },
                    { account: "blablablatwitter.com", icon: "fa fa-pinterest" }
                ]
            }
        ]
        return res.view('pages/homepage', { sliderInfo, team });
    }
};

