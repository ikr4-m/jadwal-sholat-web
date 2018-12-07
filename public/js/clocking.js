// inisialisasi perangkat tanggal
var d = new Date(),
    hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds(),
    day = d.getDay(),
    date = d.getDate(),
    month = d.getMonth(),
    year = d.getFullYear(),
    hari = new Array("Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"),
    bulan = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember");
$().ready(function () {
    $('.date').html(`${hari[day]}, ${date} ${bulan[month]} ${year}`);
    // animasikan kota dan tanggal di ujung kanan
    setInterval(() => {
        var dateRiteNow = `${hari[day]}, ${date} ${bulan[month]} ${year}`;
        var city = settings.city_name;
        var jDate = $('.date').html();
        var $date = $('.date');
        if (jDate === city) {
            $date.animate({ opacity: 0 }, 500, () => {
                $date.html(dateRiteNow);
                $date.animate({ opacity: 1 }, 500);
            })
        }
        else if (jDate === dateRiteNow){
            $date.animate({ opacity: 0 }, 500, () => {
                $date.html(city);
                $date.animate({ opacity: 1 }, 500);
            })
        }
    }, 5000);
    //hour = 00; minute = 00; second = 00; // debugging purposes

    // realtime clocking system
    var integral = 1000;
    setInterval(() => {
        // Menganimasikan detik seperti pada umumnya
        second++;
        if (second === 60) { second = 0; minute++; }
        if (minute === 60) { minute = 0; hour++; }
        if (hour === 24) { hour = 0; minute = 0; second = 0; location.reload(); }
        // 2 >> 02 || 10 >> 10
        function pad(angka) {
            return (angka.toString().length === 1) ? "0" + angka : angka;
        }
        $('.hour').html(pad(hour));
        $('.minute').html(pad(minute));
        $('.second').html(pad(second));

        // date to integer
        var clock = (hour * 3600) + (minute * 60) + second;
        //$('.min-clock').html(clock);

        /**
         * Penjelasan ini mungkin agak ribet sedikit:
         * int hasil >> waktu selanjutnya - jam sekarang
         * int maximum >> waktu selanjutnya - waktu sekarang (selisih)
         * persentase == fx(turnOpacity)
         * .<waktuLalu> >> opacity: 0
         * .<waktuSkrg> >> opacity: persentase/100
         * .<waktuSelanjutnya> >> opacity: ((100-persentase)/100)
         */

        // begin real clocking
        var display, hasil, maximum;
        function turnOpacity(hasil, maximum) {
            return (hasil / maximum) * 100;
        }
        function modalLaunch(menit, waktu) {
            let interval = 500;
            $('.remind-minute').html(menit.toString());
            $('.remind-time').html(waktu.toString());
            $('.modal-bg').css({ display: 'block', opacity: 1 });
            setTimeout(() => {
                $('.modal-isi').animate({ top: '-300px' }, interval);
                $('.modal-bg').animate({ opacity: 0 }, interval, () => {
                    $('.modal-bg').css({ display: 'none' });
                    $('.modal-isi').css({ top: '0px' });
                });
            }, 5000);
        }
        function modalMasukWaktu(waktu) {
            let interval = 500;
            $('.masuk-waktu').html(waktu.toString());
            $('.modal-switch').css({ display: 'block', opacity: 1 });
            setTimeout(() => {
                $('.modal-isi-switch').animate({ top: '-300px' }, interval);
                $('.modal-switch').animate({ opacity: 0 }, interval, () => {
                    $('.modal-switch').css({ display: 'none' });
                    $('.modal-isi-switch').css({ top: '0px' });
                });
            }, 5000);
        }
        if (clock < subuh) {
            display = "Tengah Malam";
            $('.subuh').css({ opacity: 1 });
            $('.subuhbg').css({ opacity: 1 });
            if (clock === (subuh - (10 * 60))) modalLaunch(10, "Subuh");
            else if (clock === (subuh - (20 * 60))) modalLaunch(20, "Subuh");
            else if (clock === (subuh - (30 * 60))) modalLaunch(30, "Subuh");
        }
        else if (clock >= subuh && clock < dhuha) {
            display = "Subuh";
            maximum = dhuha - subuh;
            hasil = dhuha - clock;
            $('.subuh').css({ opacity: 1 });
            $('.dhuha').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            $('.subuhbg').css({ opacity: 1 });
            $('.dhuhabg').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            if (clock === subuh) modalMasukWaktu(display);
            else if (clock === (dhuha - (10 * 60))) modalLaunch(10, "Dhuha");
            else if (clock === (dhuha - (20 * 60))) modalLaunch(20, "Dhuha");
            else if (clock === (dhuha - (30 * 60))) modalLaunch(30, "Dhuha");
        }
        else if (clock >= dhuha && clock < duhur) {
            display = "Dhuha";
            maximum = duhur - dhuha;
            hasil = duhur - clock;
            $('.subuh').css({ opacity: 0 });
            $('.dhuha').css({ opacity: 1 });
            $('.duhur').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            $('.subuhbg').css({ opacity: 0 });
            $('.dhuhabg').css({ opacity: 1 });
            $('.duhurbg').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            if (clock === dhuha) modalMasukWaktu(display);
            else if (clock === (duhur - (10 * 60))) modalLaunch(10, "Duhur");
            else if (clock === (duhur - (20 * 60))) modalLaunch(20, "Duhur");
            else if (clock === (duhur - (30 * 60))) modalLaunch(30, "Duhur");
        }
        else if (clock >= duhur && clock < ashar) {
            display = hari[day] === "Jum'at" ? "Jum'at" : "Dzuhur";
            maximum = ashar - duhur;
            hasil = ashar - clock;
            $('.dhuha').css({ opacity: 0 });
            $('.duhur').css({ opacity: 1 });
            $('.ashar').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            $('.dhuhabg').css({ opacity: 0 });
            $('.duhurbg').css({ opacity: 1 });
            $('.asharbg').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            if (clock === duhur) modalMasukWaktu(display);
            else if (clock === (ashar - (10 * 60))) modalLaunch(10, "Ashar");
            else if (clock === (ashar - (20 * 60))) modalLaunch(20, "Ashar");
            else if (clock === (ashar - (30 * 60))) modalLaunch(30, "Ashar");
        }
        else if (clock >= ashar && clock < maghrib) {
            display = "Ashar";
            maximum = maghrib - ashar;
            hasil = maghrib - clock;
            $('.duhur').css({ opacity: 0 });
            $('.ashar').css({ opacity: 1 });
            $('.maghrib').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            $('.duhurbg').css({ opacity: 0 });
            $('.asharbg').css({ opacity: 1 });
            $('.maghribbg').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            if (clock === ashar) modalMasukWaktu(display);
            else if (clock === (maghrib - (10 * 60))) modalLaunch(10, "Maghrib");
            else if (clock === (maghrib - (20 * 60))) modalLaunch(20, "Maghrib");
            else if (clock === (maghrib - (30 * 60))) modalLaunch(30, "Maghrib");
        }
        else if (clock >= maghrib && clock < isya) {
            display = "Maghrib";
            maximum = isya - maghrib;
            hasil = isya - clock;
            $('.ashar').css({ opacity: 0 });
            $('.maghrib').css({ opacity: 1 });
            $('.isya').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            $('.asharbg').css({ opacity: 0 });
            $('.maghribbg').css({ opacity: 1 });
            $('.isyabg').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
            if (clock === maghrib) modalMasukWaktu(display);
            else if (clock === (isya - (10 * 60))) modalLaunch(10, "Isya");
            else if (clock === (isya - (20 * 60))) modalLaunch(20, "Isya");
            else if (clock === (isya - (30 * 60))) modalLaunch(30, "Isya");
        }
        else if (clock >= isya && clock < (24 * 3600)) {
            display = "Isya";
            $('.maghrib').css({ opacity: 0 });
            $('.isya').css({ opacity: 1 });
            $('.maghribbg').css({ opacity: 0 });
            $('.isyabg').css({ opacity: 1 });
            if (clock === isya) modalMasukWaktu(display);
        }
        else display = "null";
        $('.waktu').html(display);
    }, integral);
});