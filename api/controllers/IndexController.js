/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function (req, res) {
        let sliderInfo = [{ h1Text: "Amazing Design", h2Text: "Create your dream with", image: "/images/slide/code_alone.jpg" }];
        return res.view('pages/homepage', { sliderInfo });
    }
};

