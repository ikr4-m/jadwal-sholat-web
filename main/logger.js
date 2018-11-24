const chalk = require('chalk');
const os = require('os');
let pad = (x) => x.toString().length === 2 ? x : `0${x}`;

let D = new Date();
let d = pad(D.getDate());
let m = pad(D.getMonth());
let y = D.getFullYear();
let h = pad(D.getHours());
let mm = pad(D.getMinutes());
let s = pad(D.getSeconds());

let comp_name = os.hostname();
let pid = process.pid;
let proj_name = require('../package.json').name;

let ret1 = `[${d}-${m}-${y}|${h}:${mm}:${s}]`
let ret2 = `${comp_name}/${pid} on ${proj_name}:`

const logger =   {
    info: (value) => console.log(`${ret1} ${chalk.default.blue("INFO")}: ${ret2}\n> ${chalk.default.cyan(value)}`),
    warn: (value) => console.log(`${ret1} ${chalk.default.yellow("WARN")}: ${ret2}\n> ${chalk.default.cyan(value)}`),
    error: (value) => console.log(`${ret1} ${chalk.default.red("ERRR")}: ${ret2}\n> ${chalk.default.cyan(value)}`)
}

module.exports = logger;