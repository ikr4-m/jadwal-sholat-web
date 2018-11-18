/**
 * Jadwal Sholat untuk wilayah Makassar
 * @author github/skymunn - Ikramullah Latif
 * 
 * Kode ini dilindungi oleh GNU Affero General Public License v3.0 (GNU AGPLv3).
 * Ketika menggunakan kode ini harap cantumkan sumbernya serta jangan
 * membuat kode anda menjadi close source.
 */

'use strict';

// logika untuk header app
const cal = new Date();
const pack = require('./package.json');
const logger = require('./main/logger');
const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

let header1 = ` ${pack.description} (${pack.name}) v${pack.version} ${pack.license}`;
let header2 = ` Run in ${process.arch} arch with ${memoryUsage} MB memory usage. (C) 2018-${cal.getFullYear()} ${pack.author}`;
function kotaque(h1, h2) {
    let justice = (h1.length > h2.length || h1.length === h2.length) ? h1.length : h2.length;
    let ret = new Array();
    for (let i = 1; i <= justice; i++) {
        if (i === 1) ret.push("+");
        else if (i === justice) ret.push("-+");
        else ret.push("-");
    }
    return ret.join('');
}
console.log(`${kotaque(header1, header2)}\n${header1}\n${header2}\n${kotaque(header1, header2)}`);
console.log(logger("INFO") + "Press ALT + TAB to switch to this console (if you didn't open any application)");
console.log(logger("INFO") + "Press CTRL + C from this console to shutdown the server and app.\n");

setTimeout(() => {
    // panggil express untuk jadi web server
    const express = require('express');
    const app = express();

    // beberapa konstant yang biasa dipanggil-panggil, makanya ditaruh dimari
    const { router, site } = require('./main/constant');

    // atur enginenya semaksimal mungkin, dapat dikopas
    app.use(express.static(__dirname + site));
    app.set('views', __dirname + '/main');

    app.engine('pug', require('pug').renderFile);
    app.set('view engine', 'pug');

    // trycatch untuk router dan listener
    try {
        // daripada pake command.run, sama aja sih, kan panggil function doang
        // biar kece, beri sedikit "animasi"
        require("." + router + "router")(app, site, logger);
        require("." + router + "listener")(app, logger);
    }
    catch (err) {
        // panggil error
        console.log(logger("ERROR") + `${err.message}\n${err}`);
    }
    finally {
        setTimeout(() => {
            console.log(logger("Preparing") + "Calling chrome to open http://localhost:3030/ for you.");
        }, 1000);
        setTimeout(() => {
            require("." + router + "call-chrome")(logger);
        }, 2500);
    }
}, 3000);