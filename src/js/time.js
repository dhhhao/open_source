function getCurDate() {
    let d = new Date();
    let week;
    switch (d.getDay()) {
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
        default:
            week = "星期天";
    }
    let years = d.getFullYear();
    let month = add_zero(d.getMonth() + 1);
    let days = add_zero(d.getDate());
    let hours = add_zero(d.getHours());
    let minutes = add_zero(d.getMinutes());
    let seconds = add_zero(d.getSeconds());
    let str = years + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
    let element = document.getElementById("logInfo");
    element.innerHTML = str;
}

function add_zero(temp) {
    if (temp < 10)
        return "0" + temp;
    else
        return temp;
}

setInterval("getCurDate()", 100);