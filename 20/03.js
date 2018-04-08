var getUserInfo = function (cb) {
    $.ajax('url', cb);
};

getUserInfo(function (data) {
    console.log(data.userName);
});

getUserInfo(function (data) {
    console.log(data.userId);
});


/* 模拟 Array.prototype.map */
var arrayMap = function (ary, cb) {
    var i = 0,
        length = ary.length,
        val,
        ret = [];

    for (; i < length; i++) {
        val = cb(i, ary[i]);
        ret.push(val);
    }

    return ret;
}

var a = arrayMap([1, 2, 3], function (i, n) {
    return n * 2;
});

var b = arrayMap([1, 2, 3], function (i, n) {
    return n * 3;
});

console.log(a);
console.log(b);
