var hadist = new Array(
    "Hadist 1", "Hadist 2", "Hadist 3", "Hadist 4", "Hadist 5",
    "Hadist 6", "Hadist 7", "Hadist 8"
);
var hadistIntegral = 5000;
$().ready(() => {
    function reloadHadist(array) { 
        return Math.floor(Math.random() * array.length) 
    }
    $('.footer').html(hadist[reloadHadist(hadist)].toString());
    setInterval(() => {
        var randHadist = Math.floor(Math.random() * hadist.length);
        $('.footer').html(hadist[reloadHadist(hadist)].toString());
    }, hadistIntegral);
})