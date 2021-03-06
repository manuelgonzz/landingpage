/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async function (req, res) {

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
      
        return res.view('pages/homepage', { sliderInfo, team, navtabs, portfolio, features, partners, contact, products });
    }
};

