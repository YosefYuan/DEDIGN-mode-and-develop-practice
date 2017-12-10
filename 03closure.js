var mult = (function () {
    var cache = {};
    var calculate = function () {
        var a = 1;
        for (var i = 0, l = arguments.length; i < l; i++) {
            a = a * arguments[i];
        }
        return a;
    };
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
})();

var test1 = mult(1, 2, 3);
console.log(`mult: ${test1}`);

// 延续局部变量的寿命
var report = (function () {
    var imgs = [];
    return function (src) {
        var img = new Image();
        imgs.push(img);
        img.src = src;
    }
})();

// 闭包 《 》 面向对象
var extent1 = function () {
    var value = 0;
    return {
        call: function () {
            value++;
            console.log(`extent1: ${value}`);
        }
    }
};

var extent1 = extent1();

extent1.call();
extent1.call();
extent1.call();

var extent2 = {
    value: 0,
    call: function () {
        this.value++;
        console.log(`extent2: ${this.value}`);
    }
};

extent2.call();
extent2.call();
extent2.call();


var Extent = function () {
    this.value = 0;
};

Extent.prototype.call = function () {
    this.value++;
    console.log(this.value);
};

var extent3 = new Extent();

extent3.call();
extent3.call();
extent3.call();