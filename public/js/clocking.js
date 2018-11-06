$().ready(function () {
    // inisialisasi perangkat tanggal
    var d = new Date(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        second = d.getSeconds(),
        day = d.getDay(),
        date = d.getDate(),
        month = d.getMonth(),
        year = d.getFullYear(),
        hari = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"),
        bulan = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus",
            "September", "Oktober", "November", "Desember");
    $('.date').html(`${hari[day]}, ${date} ${bulan[month]} ${year}`);
    //hour = 0; minute = 0; second = 0; // debugging purposes

    // realtime clocking system
    var integral = 1000;
    setInterval(() => {
        // Menganimasikan detik seperti pada umumnya
        second++;
        if (second == 60) { second = 0; minute++ }
        if (minute == 60) { minute = 0; hour++ }
        if (hour == 24) { hour = 0; minute = 0; second = 0; location.reload() }
        // 2 >> 02 || 10 >> 10
        function pad(angka) {
            return (angka.toString().length == 1) ? "0" + angka : angka
        }
        $('.hour').html(pad(hour));
        $('.minute').html(pad(minute));
        $('.second').html(pad(second));

        // date to integer
        var clock = (hour * 60) + minute;
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
        var display, hasil, maximum;
        function turnOpacity(hasil, maximum) {
            return (hasil / maximum) * 100;
        }
        if (clock < subuh) {
            display = "Tengah Malam";
            $('.subuh').css({ opacity: 1});
        }
        else if (clock >= subuh && clock < terbit) {
            display = "Subuh";
            maximum = terbit - subuh;
            hasil = terbit - clock;
            $('.subuh').css({ opacity: (turnOpacity(hasil, maximum) / 100) });
            $('.terbit').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
        }
        else if (clock >= terbit && clock < duhur) {
            display = "Terbit";
            maximum = duhur - terbit;
            hasil = duhur - clock;
            $('.subuh').css({ opacity: 0 });
            $('.terbit').css({ opacity: (turnOpacity(hasil, maximum) / 100) });
            $('.duhur').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
        }
        else if (clock >= duhur && clock < ashar) {
            display = "Duhur";
            maximum = ashar - duhur;
            hasil = ashar - clock;
            $('.terbit').css({ opacity: 0 });
            $('.duhur').css({ opacity: (turnOpacity(hasil, maximum) / 100) });
            $('.ashar').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
        }
        else if (clock >= ashar && clock < maghrib) {
            display = "Ashar";
            maximum = maghrib - ashar;
            hasil = maghrib - clock;
            $('.duhur').css({ opacity: 0 });
            $('.ashar').css({ opacity: (turnOpacity(hasil, maximum) / 100) });
            $('.maghrib').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
        }
        else if (clock >= maghrib && clock < isya) {
            display = "Maghrib";
            maximum = isya - maghrib;
            hasil = isya - clock;
            $('.ashar').css({ opacity: 0 });
            $('.maghrib').css({ opacity: (turnOpacity(hasil, maximum) / 100) });
            $('.isya').css({ opacity: ((100 - turnOpacity(hasil, maximum)) / 100) });
        }
        else if (clock >= isya && clock < (24 * 60)) {
            display = "Isya";
            $('.maghrib').css({ opacity: 0 });
            $('.isya').css({ opacity: 1 });
        }
        else display = "null"
        $('.waktu').html(display)
    }, integral)
})