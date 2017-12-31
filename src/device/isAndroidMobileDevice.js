/**
 * 
 * @desc 判断是否安卓移动设备访问
 */
function isAndroidMobileDevice(){
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}
module.exports = isAndroidMobileDevice;