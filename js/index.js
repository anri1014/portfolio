
$(function () {

    // ハンバーガー
    $('.sp_btn, .sp_nav li').click(function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('active');
    });
});