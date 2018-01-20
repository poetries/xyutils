/**
 * 
 * @desc 判断是否移动设备访问
 */
function isMobileUserAgent(){
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}
module.exports = isMobileUserAgent;