/* 用return退出多重循环 */

// method1
var func = function () {
    var flag = false;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                flag = true;
                break;
            }
        }
        if (flag = true) {
            break;
        }
    }
};

// method2
var func = function () {
    outrloop: for (var i = 0; i < 10; i++) {
        innerloop: for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                break outerloop;
            }
        }
    }
};

// method3
var func = function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                return;
            }
        }
    }
};

// method4
var func = function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                return;
            }
        }
    }
    console.log(i);
};

// method5
var print = function (i) {
    console.log(i);
};

var func = function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                return print(i);
            }
        }
    }
};

func();