var hadist = hadist_list;
var hadistIntegral = (1.5 * 60) * 1000;
$().ready(() => {
    function reloadHadist(array) {
        return Math.floor(Math.random() * array.length);
    }
    $('.footer').html(hadist[reloadHadist(hadist)].toString());
    setInterval(() => {
        $('.footer').html(hadist[reloadHadist(hadist)].toString());
    }, hadistIntegral);
});