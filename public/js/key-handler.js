// panggil menit dan detik sesuai jadwal
var defMin = 10; var defSec = 0;
var countdownIntegral = 1000;

// inisialisasi jam
var pad = (x) => x.toString().length === 1 ? `0${x.toString()}` : x.toString();
var minute = defMin, second = defSec, con;
var countingDown = false;

document.onkeypress = (evt) => {
    var $sec = $('.countdown-second');
    var $min = $('.countdown-minute');

    // pengidentifikasian key yang ditekan
    evt = evt || window.event;
    var charcode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charcode);
    $().ready(() => {
        // membuat section tiap hurufnya
        // 10 minute iqomah
        if (charStr.toLowerCase() === "s") {
            if ($('.penampung-tirai').css('display') === 'none') {
                countingDown = true;
                $('.penampung-tirai').css({ display: 'block' });
                $('.tirai-kiri').animate({ left: '0%' }, 1000);
                $('.tirai-kanan').animate({ right: '0%' }, 1000);
                $('.penampung-tirai').animate({ opacity: 1 }, 1000, () => {
                    $('.final-countdown').animate({ opacity: 1 }, 500);
                    $min.html(pad(minute));
                    $sec.html(pad(second));

                    function anima() {
                        if (countingDown === true) {
                            if ($min.html() === "00" && $sec.html() === "00") {
                                clearInterval(con);
                                minute = defMin;
                                second = defSec;
                                $('.final-countdown').animate({ opacity: 0 }, 500, () => {
                                    $('.final-cwd').animate({ opacity: 1 }, 500, () => {
                                        setTimeout(() => { $('.final-cwd').animate({ opacity: 0 }, 500) }, 5000);
                                    })
                                })
                            }
                            else {
                                $min.html(pad(minute));
                                $sec.html(pad(second));
                                second--;
                                if (second < 0) {
                                    minute -= 1;
                                    second = 59;
                                }
                            }
                        }
                    }

                    // bug fixed untuk timer-repeat-gaguna
                    if (!con) {
                        con = setInterval(anima, countdownIntegral);
                    }
                    else {
                        clearInterval(con);
                        $min.html(pad(defMin));
                        $sec.html(pad(defSec));
                        minute = defMin;
                        second = defSec;
                        con = setInterval(anima, countdownIntegral);
                    }
                });
            }
            else {
                countingDown = false;
                minute = defMin;
                second = defSec;
                $('.tirai-kiri').animate({ left: '-50%' }, 1000);
                $('.tirai-kanan').animate({ right: '-50%' }, 1000);
                $('.penampung-tirai').animate({ opacity: 0 }, 1000, () => {
                    $('.penampung-tirai').css({ display: 'none' });
                    $('.final-countdown').css({ opacity: 0 });
                });
            }
        }
        // force sholat
        else if (charStr.toLowerCase() === "w") {
            if ($('.penampung-tirai').css('display') === 'none') {
                $('.penampung-tirai').css({ display: 'block' });
                $('.tirai-kiri').animate({ left: '0%' }, 1000);
                $('.tirai-kanan').animate({ right: '0%' }, 1000);
                $('.penampung-tirai').animate({ opacity: 1 }, 1000, () => {
                    $('.final-cwd').animate({ opacity: 1 }, 500, () => {
                        setTimeout(() => { $('.final-cwd').animate({ opacity: 0 }, 500) }, 5000);
                    });
                });
            }
            else {
                $('.tirai-kiri').animate({ left: '-50%' }, 1000);
                $('.tirai-kanan').animate({ right: '-50%' }, 1000);
                $('.penampung-tirai').animate({ opacity: 0 }, 1000, () => {
                    $('.penampung-tirai').css({ display: 'none' });
                    $('.final-countdown').css({ opacity: 0 });
                });
            }
        }
    });
}