/**
 * 将数组进行递增排序
 * @param {Array} arr
 * @return {Boolean}
 */

function arrayIncreaseSort (arr){
    arr.sort ( new Function ( "a" , "b" , " return b-a " ) ) ; //设置比较函数
    var sortedArr = [ ] ;
    for ( var i = 0 ; i < arr.length ; i ++ ) {
        sortedArr.push ( arr [ i ] )
    }
    return sortedArr
}

module.exports = arrayIncreaseSort;