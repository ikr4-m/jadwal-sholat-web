// panggil menit dan detik sesuai jadwal
var defMin = 10; var defSec = 0;

var pad = (x) => x.toString().length === 1 ? `0${x.toString()}` : x.toString();
var minute = defMin, second = defSec, con;
var countingDown = false;

document.onkeypress = (evt) => {
    var $sec = $('.countdown-second');
    var $min = $('.countdown-minute');

    evt = evt || window.event;
    var charcode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charcode);
    $().ready(() => {
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

                    if (!con) {
                        con = setInterval(() => {
                            if (countingDown === true) {
                                if ($min.html() === "00" && $sec.html() === "00") {
                                    clearInterval(con);
                                    minute = 10;
                                    second = 0;
                                    $min.html(pad(minute));
                                    $sec.html(pad(second));
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
                        }, 100);
                    }
                });
            }
            else {
                countingDown = false;
                minute = 10;
                second = 0;
                $min.html(pad(minute));
                $sec.html(pad(second));
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