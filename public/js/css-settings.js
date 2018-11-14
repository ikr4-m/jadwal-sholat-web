$().ready(() => {
    // bg height settings 
    var headerHeight = $('.header').height();
    var marqueeHeight = $('.running-text').height();
    $('.background').css('height', `calc(100% - ${headerHeight}px - ${marqueeHeight}px)`);
});