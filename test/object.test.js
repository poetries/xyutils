describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual xyutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, xyutils.deepClone(person))
        });

        it(`person === xyutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, xyutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`xyutils.isEmptyObject({}) should return true`, function () {
            assert(xyutils.deepClone({}))
        });

        it(`xyutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(xyutils.isEmptyObject({
                one: 1
            }))
        });

        it(`xyutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(xyutils.isEmptyObject([]))
        });
    });
})