/**
 * 检查数组中是否含有某元素
 * @param {Array} arr
 * @return {Boolean}
 */

function arrayContains(arr,key){
    for (i in arr) {
        if (arr[i] == key){
            return true;
        }
    }
    return false;
}

module.exports = arrayContains;