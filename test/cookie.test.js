describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            xyutils.setCookie('test', 'getTestValue')
        })
        it(`xyutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(xyutils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            xyutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            xyutils.setCookie('test', 'removeTestValue')
        })
        it(`xyutils.removeCookie('test') should return false`, function () {
            xyutils.removeCookie('test')
            assert.notEqual(xyutils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`xyutils.getCookie('test', 'setCookie') should return true`, function () {
            xyutils.setCookie('test', 'setCookie')
            assert(xyutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            xyutils.removeCookie('test')
        })
    })
})