/**
 * 
 * @desc   去掉url前缀
 */
function removeUrlPrefix(a){
    a=a.replace(/：/g,":").replace(/．/g,".").replace(/／/g,"/");
    while(trim(a).toLowerCase().indexOf("http://")==0){
        a=trim(a.replace(/http:\/\//i,""));
    }
    return a;
}

module.exports = removeUrlPrefix