describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`xyutils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(xyutils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('xyutils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(xyutils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`xyutils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(xyutils.arrayEqual(arr, arr))
        });
    });
});