module.exports = {

    createUser: function(userData,createUserCallback) {

        User.findOrCreate({
            email: userData.email
        }, {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: userData.password
        }).exec(function findOrCreateCallback(error, foundOrCreatedRecords){

            console.log('What\'s cookin\' '+foundOrCreatedRecords+'?');

            createUserCallback(error, foundOrCreatedRecords);
        });

    }
};