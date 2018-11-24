var hadist = hadist_list;
var hadistIntegral = (settings.hadist_duration * 60) * 1000;
$().ready(() => {
    function reloadHadist(array) {
        return Math.floor(Math.random() * array.length);
    }
    $('.isi-footer').html(hadist[reloadHadist(hadist)].toString());
    setInterval(() => {
        $('.isi-footer').animate({opacity: 0}, 400, () => {
            $('.isi-footer').html(hadist[reloadHadist(hadist)].toString());
            $('.isi-footer').animate({opacity: 1}, 400);
        });
    }, hadistIntegral);
});