document.onkeypress = (evt) => {
    var minute = 10, second = 0, con;
    var $sec = $('.countdown-second');
    var $min = $('.countdown-minute'); 

    evt = evt || window.event;
    var charcode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charcode);
    $().ready(() => {
        if (charStr.toLowerCase() === "s") {
            if ($('.penampung-tirai').css('display') === 'none') {
                $('.penampung-tirai').css({ display: 'block' });
                $('.tirai-kiri').animate({ left: '0%' }, 1000);
                $('.tirai-kanan').animate({ right: '0%' }, 1000);
                $('.penampung-tirai').animate({ opacity: 1 }, 1000, () => {
                    $('.final-countdown').animate({ opacity: 1 }, 500);
                    var pad = (x) => x.toString().length === 1 ? `0${x.toString()}` : x.toString();
                    $min.html(pad(minute));
                    $sec.html(pad(second));
                    con = setInterval(() => {
                        if ($min.html() === "00" && $sec.html() === "00") {
                            clearInterval(con);
                            minute = 10;
                            second = 0;
                            return;
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
                    }, 100);
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