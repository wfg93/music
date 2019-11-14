const sayMsg={


//数字转换汉字
  tamun() {
    var myDate = new Date();
    let n = '';
    switch (myDate.getDay()) {
      case 1:
        n = "一";
        break;
      case 2:
        n = "二";
        break;
      case 3:
        n = "三";
        break;
      case 4:
        n = "四";
        break;
      case 5:
        n = "五";
        break;
      case 6:
        n = "六";
        break;
      case 0:
        n = "日";
        break;
    }
    return n;
},
//时间转换
myDatE(data) {
  var s;
  var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = parseInt((data % (1000 * 60)) / 1000);
  s =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  return s;
},

//获取当前日期
  myDate() {
    var myDate = new Date();
    return myDate.getDate();
  },

  /*转换万，亿*/
  exchangeNumber(num) {
    if (num < 10000) {
      return num;
    } else if (num > 10000) {
      let newNum = num/10000;
      return Math.round(newNum) + "万";
    }
  },



}

export default sayMsg
