/**
 * User.js
 *
 * @description :: Kullanıcı modeli.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

    connections: ['mongoConnection', 'elasticConnection'],

    elasticSearch: {
        mappings: {
            person: {
                properties: {
                    name: {
                        type: 'string'
                    },

                    surname: {
                        type: 'string'
                    },

                    password: {
                        type: 'string'
                    },

                    email: {
                        type: 'string'
                    }
                }
            }
        }
    },

    attributes: {

        name: {
            type: 'string'
        },

        surname: {
            type: 'string'
        },

        password: {
            type: 'string'
        },

        email: {
            type: 'string'
        }

    },

    // afterCreate: function (value, callback) {
    //     this.createIndex(value, callback)
    // },
    // afterUpdate: function (value, callback) {
    //     this.updateIndex(value.id, value, callback)
    // },
    // afterDestroy: function (value, callback) {
    //     this.destroyIndex(value.id, callback)
    // }

};

