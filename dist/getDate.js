/**
 * @desc  获取日期的快捷方式
 */

const moment = require('moment')

function getDate() {

    return {
        DATE_TODAY: moment().format('YYYY-MM-DD'),
        DATE_YESTERDAY: moment().subtract(1, 'days').format('YYYY-MM-DD'),
        DATE_1_WEEK_BEFORE: moment().subtract(1, 'weeks').format('YYYY-MM-DD'),
        DATE_2_WEEKS_BEFORE: moment().subtract(2, 'weeks').format('YYYY-MM-DD'),
        DATE_3_WEEKS_BEFORE: moment().subtract(3, 'weeks').format('YYYY-MM-DD'),
        DATE_1_MONTH_BEFORE: moment().subtract(1, 'months').format('YYYY-MM-DD'),
        DATE_2_MONTH_BEFORE: moment().subtract(2, 'months').format('YYYY-MM-DD'),
        DATE_3_MONTHS_BEFORE: moment().subtract(3, 'months').format('YYYY-MM-DD'),
        DATE_1_YEAR_BEFORE: moment().subtract(1, 'years').format('YYYY-MM-DD'),

        DATE_3_MONTHS_AFTER: moment().add(3, 'months').format('YYYY-MM-DD'),
        DATE_1_YEAR_AFTER: moment().add(1, 'year').format('YYYY-MM-DD'),

        DATE_FIRST_DAY_OF_MONTH: moment().startOf('month').format('YYYY-MM-DD'),
        DATE_LAST_DAY_OF_MONTH: moment().endOf('month').format('YYYY-MM-DD'),

        DATE_7_DAYS_BEFORE: moment().subtract(7, 'days').format('YYYY-MM-DD'),
        DATE_30_DAYS_BEFORE: moment().subtract(30, 'days').format('YYYY-MM-DD'),
        DATE_90_DAYS_BEFORE: moment().subtract(90, 'days').format('YYYY-MM-DD'),
        DATE_100_DAYS_BEFORE: moment().subtract(100, 'days').format('YYYY-MM-DD'),
    }
}

module.exports = getDate