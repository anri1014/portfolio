//font

(function (d) {
    var config = {
        kitId: 'umz6jaj',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);


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

const tabMenuItems = document.querySelectorAll('.detail_circle ul li');
const tabContents = document.querySelectorAll('.summary');

tabMenuItems.forEach(tabMenuItem => {
  // マウスホバー時に発火するイベントは「mouseover」を使う。
  tabMenuItem.addEventListener('mouseover', () => {

    // 全てのタブからselectedクラスを外す。
    tabMenuItems.forEach(tabMenuItem => {
      tabMenuItem.classList.remove('selected');
    });
    
    // クリックされたタブのみselectedクラスを付ける。
    tabMenuItem.classList.add('selected');
    
    // 全てのタブのコンテンツからselectedクラスを外す。
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('selected');
    });

    // クリックされたタブのカスタムデータ属性と同じIDを持つコンテンツに、selectedクラスを付ける。
    // カスタムデータ属性については別記事で紹介しています。
    document.getElementById(tabMenuItem.dataset.id).classList.add('selected');
  });
});
