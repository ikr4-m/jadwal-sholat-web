const adhan = require('adhan');

var date = new Date();
let coordinates = new adhan.Coordinates(5.15, 119.46666666667);

var params = adhan.CalculationMethod.Other();
if (settings.adhan_settings.madhab === 1) params.madhab = adhan.Madhab.Shafi;
if (settings.adhan_settings.madhab === 2) params.madhab = adhan.Madhab.Hanafi;
params.fajrAngle = settings.adhan_settings.fajrAngle;
params.ishaAngle = settings.adhan_settings.ishaAngle;
params.adjustments.fajr = settings.time_adjustments.fajr;
params.adjustments.sunrise = settings.time_adjustments.dhuha;
params.adjustments.dhuhr = settings.time_adjustments.dhuhr;
params.adjustments.asr = settings.time_adjustments.asr;
params.adjustments.maghrib = settings.time_adjustments.maghrib;
params.adjustments.isha = settings.time_adjustments.isha;

var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
var formattedTime = adhan.Date.formattedTime;

// add imsyak
function addImsyak(subuhFormattedTime) {
    var sliced = subuhFormattedTime.match(/[0-9]/gm).join('');
    var hour = sliced.substring(0, 2);
    var minute = sliced.substring(2);
    var temp_new_minute = (Number.parseInt(minute) - 10).toString();

    var hrs, min;
    if (Number.parseInt(temp_new_minute) < 0) {
        min = (60 + Number.parseInt(temp_new_minute)).toString();
        hrs = (Number.parseInt(hour) - 1).toString();
    }
    else {
        min = temp_new_minute;
        hrs = hour;
    }

    var new_hrs = hrs.length === 1 ? `0${hrs}` : hrs;
    var new_min = min.length === 1 ? `0${min}` : min;

    return new_hrs + ":" + new_min;
}

// common adzan time
var _subuh = formattedTime(prayerTimes.fajr, +8, '24h');
var _imsyak = addImsyak(_subuh);
var _dhuha = formattedTime(prayerTimes.sunrise, +8, '24h');
var _duhur = formattedTime(prayerTimes.dhuhr, +8, '24h');
var _ashar = formattedTime(prayerTimes.asr, +8, '24h');
var _maghrib = formattedTime(prayerTimes.maghrib, +8, '24h');
var _isya = formattedTime(prayerTimes.isha, +8, '24h');

// parse adzan
function parsePhaseAdzan(formattedTime) {
    var jam = formattedTime.substring(0, 2);
    var menit = formattedTime.substring(3);
    return (jam * 3600) + (parseInt(menit) * 60);
}
var imsyak = parsePhaseAdzan(_imsyak);
var subuh = parsePhaseAdzan(_subuh);
var dhuha = parsePhaseAdzan(_dhuha);
var duhur = parsePhaseAdzan(_duhur);
var ashar = parsePhaseAdzan(_ashar);
var maghrib = parsePhaseAdzan(_maghrib);
var isya = parsePhaseAdzan(_isya);