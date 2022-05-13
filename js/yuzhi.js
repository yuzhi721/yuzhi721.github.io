import c from "./config.js";


window.onload = function () {
    let r = c.reading;
    //$(".ul").empty();
    for (let i = 0; i < r.length; i++) {
        $(".ul").append('<li><a href="' + r[i].url + '" target="_blank">' + r[i].title + '>></a></li>');
    }
    auto = window.setInterval(loveTime, 1000);

    //body点击事件
    $("body").bind("click", function (e) {
        var $i = $("<img>").attr("src", "./img/love.png");
        var x = e.pageX, y = e.pageY;//鼠标点击的位置
        $i.css({
            "z-index": 99999,
            "top": y - 15,
            "left": x,
            "position": "absolute",
            "width": 20,
            "vertical-align": "middle"
        });
        $("body").append($i);
        $i.animate(
            {"top": y - 180, "opacity": 0},
            1500,
            function () {
                $i.remove();
            }
        );
        e.stopPropagation();
    });

};
let auto;
let s = Date.parse(c.loveTime);
let r = [];
let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

function loveTime() {
    let diff = new Date() - s;
    let day = Math.floor(diff / days);
    let hour = Math.floor((diff % days) / hours);
    let minute = Math.floor((diff % hours) / minutes);
    let second = Math.floor((diff % minutes) / seconds);
    $(".loveTime").html(day + '天' + hour + '时' + minute + '分' + second + '秒');

}
