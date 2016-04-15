describe('UserModel', function() {

    describe('User.find()', function() {

        it('should check find function', function (done) {
            User.create({
                name: 'seckin',
                surname: 'bostanci',
                password: '123',
                email: 'mail@mail.com'
            },function (err, record) {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
        });

    });

});