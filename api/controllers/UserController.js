/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    new:function (req, res) {
        var userData = req.allParams();
        UserManager.createUser(userData,function usermanegerCreateUserCallback(createUserError,createUserRecord) {
            if (createUserError){
                res.send(createUserError);
            }else {
                res.send(createUserRecord);
            }
        });
    }

};

