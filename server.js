/**
 * Jadwal Sholat untuk wilayah Makassar
 * @author github/skymunn - Ikramullah Latif
 * 
 * Kode ini dilindungi oleh GNU Affero General Public License v3.0 (GNU AGPLv3).
 * Ketika menggunakan kode ini harap cantumkan sumbernya serta jangan
 * membuat kode anda menjadi close source.
 */

'use strict';

// panggil express untuk jadi web server
const express = require('express');
const app = express();

// beberapa konstant yang biasa dipanggil-panggil, makanya ditaruh dimari
const {router, site} = require('./main/constant');
const logger = require("." + router + "logger");

// atur enginenya semaksimal mungkin, dapat dikopas
app.use(express.static(__dirname + site));
app.set('views',__dirname + '/main');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

// trycatch untuk router dan listener
try{
    // daripada pake command.run, sama aja sih, kan panggil function doang
    // biar kece, beri sedikit "animasi"
    require("." + router + "router")(app, site, router, logger)
    require("." + router + "listener")(app, logger);
}
catch (err) {
    // panggil error
    console.log(logger("ERROR") + `${err.message}\n${err}`);
}
finally {
    setTimeout(function(){console.log(logger("Ready") + "Open https://localhost:3030/ now!");},1000)
}