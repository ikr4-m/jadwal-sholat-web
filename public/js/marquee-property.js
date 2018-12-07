$().ready(() => {
    var dzuhur_jumat = hari[day] === "Jum'at" ? "Jum'at" : "Dzuhur";
    $('.imsyak-text').html(`Imsyak:  ${_imsyak}`)
    $('.subuh-text').html(`Subuh:  ${_subuh}`);
    $('.dhuha-text').html(`Dhuha:  ${_dhuha}`);
    $('.duhur-text').html(`${dzuhur_jumat}:  ${_duhur}`);
    $('.ashar-text').html(`Ashar:  ${_ashar}`);
    $('.maghrib-text').html(`Maghrib:  ${_maghrib}`);
    $('.isya-text').html(`Isya:  ${_isya}`);
});