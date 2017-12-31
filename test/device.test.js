describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`xyutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${xyutils.getExplore()}`)
            assert(/^Chrome:/.test(xyutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`xyutils.getOS() should return "windows"`, function () {
            console.log(`OS:${xyutils.getOS()}`)
            assert(xyutils.getOS() === 'windows' || xyutils.getOS() === 'MacOSX' || xyutils.getOS() === 'linux')
        });
    });
});