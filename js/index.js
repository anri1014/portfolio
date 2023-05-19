
$(function () {

    // ハンバーガー
    $('.sp_btn, .sp_nav li').click(function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('active');
    });
});

const b01 = document.getElementById("btn01");
const b02 = document.getElementById("btn02");
const b03 = document.getElementById("btn03");
const aboutmyworks = document.getElementById("aboutmyworks")
const process = document.getElementById("process")
const review = document.getElementById("review")


//works detail のメニュー

// ボタンにhoverした時
b01.addEventListener('mouseover', () => {
    aboutmyworks.style.display = 'block';
  }, false);
//ボタンからhoverを外した時
b01.addEventListener('mouseleave', () => {
    aboutmyworks.style.display = 'none';
  }, false);

b02.addEventListener('mouseover', () => {
    process.style.display = 'block';
  }, false);
//ボタンからhoverを外した時
b02.addEventListener('mouseleave', () => {
    process.style.display = 'none';
  }, false);
  b03.addEventListener('mouseover', () => {
    review.style.display = 'block';
  }, false);
//ボタンからhoverを外した時
  b03.addEventListener('mouseleave', () => {
    review.style.display = 'none';
  }, false);