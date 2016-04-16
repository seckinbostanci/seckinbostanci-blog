/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res){
        res.redirect('user/login');
    },

    'new':function newUserView(req, res) {
        res.view();
    },
    'login':function newUserView(req, res) {
        res.view();
    }

};

