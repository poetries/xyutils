describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`xyutils.getKeyName(13) should return "Enter"`, function () {
            assert(xyutils.getKeyName(13) === 'Enter')
        });
    });

});