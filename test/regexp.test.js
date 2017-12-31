describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('xyutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(xyutils.isEmail("leiquanlive.com"))
        });
        it('xyutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(xyutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('xyutils.isIdCard("622224188203234033") should return true ', function () {
            assert(xyutils.isIdCard("622224188203234033"))
        });
        it('xyutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!xyutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('xyutils.isPhoneNum("18882324234") should return true ', function () {
            assert(xyutils.isPhoneNum("18882324234"))
        });
        it('xyutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(xyutils.isPhoneNum("8618882324234"))
        });
        it('xyutils.isPhoneNum("5534553") should return false', function () {
            assert(!xyutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('xyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(xyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('xyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(xyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('xyutils.isUrl("www.baidu.com") should return true', function () {
            assert(xyutils.isUrl("www.baidu.com"))
        });
        it('xyutils.isUrl("baidu.com") should return true', function () {
            assert(xyutils.isUrl("baidu.com"))
        });
        it('xyutils.isUrl("http://baiducom") should return false', function () {
            assert(!xyutils.isUrl("http://baiducom"))
        });
    });

});