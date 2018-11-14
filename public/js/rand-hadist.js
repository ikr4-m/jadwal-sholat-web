var hadist = hadist_list;
var hadistIntegral = (2 * 60) * 100;
$().ready(() => {
    function reloadHadist(array) { 
        return Math.floor(Math.random() * array.length) 
    }
    $('.footer').html(hadist[reloadHadist(hadist)].toString());
    setInterval(() => {
        $('.footer').html(hadist[reloadHadist(hadist)].toString());
    }, hadistIntegral);
})