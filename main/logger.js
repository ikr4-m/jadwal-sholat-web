const chalk = require('chalk');
/**
 * @param {Number} x
 * @returns {String}
 */
function pad(x) {
    return (x.toString().length === 2) ? x : `0${x}`;
}
module.exports = function (addon_msg) {
    let D = new Date();
    let d = pad(D.getDate());
    let m = pad(D.getMonth());
    let y = D.getFullYear();
    let h = pad(D.getHours());
    let mm = pad(D.getMinutes());
    let s = pad(D.getSeconds());
    let var1 = chalk.green.bgWhite(`[${d}-${m}-${y}|${h}\:${mm}\:${s}]`);
    let var2 = chalk.red.bgWhite(`[${addon_msg}]`);
    return `${var1} ${var2} `;
};