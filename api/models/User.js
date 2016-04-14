/**
 * User.js
 *
 * @description :: Kullanıcı modeli.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    surname: {
      type: 'string'
    },

    password: {
      type: 'string',
      required: true
    },

    email: {
      type: 'email',
      unique: true,
      required: true
    }

  }

};

