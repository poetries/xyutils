/**
 * 
 * @desc   验证是否为有效的座机电话号码
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
function isTel(str) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str)
}

module.exports = isTel