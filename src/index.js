/**
 * @desc webpack打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')
const arrayContains = require('./array/arrayContains')
const arrayDescendeSort = require('./array/arrayDescendeSort')
const arrayIncreaseSort = require('./array/arrayIncreaseSort')

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')

const getCookie = require('./cookie/getCookie')
const removeCookie = require('./cookie/removeCookie')
const setCookie = require('./cookie/setCookie')

const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')
const addFavorite = require('./device/addFavorite')
const getMobileScreenWidth = require('./device/getMobileScreenWidth')
const isAndroidMobileDevice = require('./device/isAndroidMobileDevice')
const isAppleMobileDevice = require('./device/isAppleMobileDevice')
const isMobile = require('./device/isMobile')
const isMobileUserAgent = require('./device/isMobileUserAgent')
const setHomepage = require('./device/setHomepage')

const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')
const windowResize = require('./dom/windowResize')

const debounce = require('./function/debounce')
const throttle = require('./function/throttle')

const getKeyName = require('./keycode/getKeyName')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isTel = require('./regexp/isTel')
const isUrl = require('./regexp/isUrl')

const digitUppercase = require('./string/digitUppercase')

const isSupportWebP = require('./support/isSupportWebP')

const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')
const isSameDay = require('./time/isSameDay')
const getDate = require('./time/getDate')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')
const removeUrlPrefix = require('./url/removeUrlPrefix')

module.exports = {
    // array
    arrayEqual,
    arrayContains,
    arrayDescendeSort,
    arrayIncreaseSort,

    // class
    addClass,
    hasClass,
    removeClass,

    // cookie
    getCookie,
    removeCookie,
    setCookie,

    // device
    getOS,
    getExplore,
    addFavorite,
    getMobileScreenWidth,
    isAndroidMobileDevice,
    isAppleMobileDevice,
    isMobile,
    isMobileUserAgent,
    setHomepage,

    // dom
    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,
    windowResize,

    // function
    debounce,
    throttle,

    // keycode
    getKeyName,

    // object
    deepClone,
    isEmptyObject,

    // random
    randomColor,
    randomNum,

    // regexp
    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
    isTel,

    // string
    digitUppercase,

    // support
    isSupportWebP,

    // time
    formatPassTime,
    formatRemainTime,
    isSameDay,
    getDate,

    // url
    parseQueryString,
    stringfyQueryString,
    removeUrlPrefix
}