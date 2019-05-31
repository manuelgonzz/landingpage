/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async function (req, res) {

        // let sliderInfo = [
        //     {
        //         h1Text: "Us",
        //         h2Text: "Develop your ideas with",
        //         image: "/images/slide/slide_glass_code.jpg"
        //     },
        //     {
        //         h1Text: "Bussiness",
        //         h2Text: "We innovate your",
        //         image: "/images/full-width-images/mechanic_keyboard.jpg"
        //     },
        //     {
        //         h1Text: "Amazing People",
        //         h2Text: "Create amazing products with",
        //         image: "/images/slide/code_alone.jpg"
        //     },
        // ];
        
        let sliderInfo = await Sliders.find();
        
        let team = await Team.find();

        let navtabs = {
            tabs: await Tabs.find(),
            sections: await Sections.find()
        }

        let portfolio = await Portfolio.find();

        let features = await Features.find();

        let partners = await Partners.find();

        let contacts = await Contact.find();

        let contact = contacts[0];

        let products = await Products.find();
        
        console.log(contact + "test");
      
        return res.view('pages/homepage', { sliderInfo, team, navtabs, portfolio, features, partners, contact, products });
    }
};

