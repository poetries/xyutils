describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`xyutils.addClass($ele, 'test') should return true`, function () {
            xyutils.addClass($ele, 'test')
            assert(xyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            xyutils.addClass($ele, 'test')
        })
        it(`xyutils.hasClass($ele, 'test') should return true`, function () {
            assert(xyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            xyutils.addClass($ele, 'test')
        })
        it(`xyutils.removeClass($ele, 'test') should return false`, function () {
            xyutils.removeClass($ele, 'test')
            assert.notEqual(xyutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});