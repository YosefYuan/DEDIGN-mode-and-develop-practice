var each = function (obj, cb) {
    var val,
        i = 0,
        length = obj.length,
        isArray = isArraylike(obj); //isArraylike函数未实现，见jQuery源代码

    if (isArray) {
        for (; i < length; i++) {
            cb.call(obj[i], i, obj[i]);
        }
    } else {
        for (i in obj) {
            val = cb.call(obj[i], i, obj[i]);
        }
    }
    return obj;
};

var appendDiv = function (data) {
    each(data, function (i, n) {
        var div = document.createElement('div');
        div.innerHTML = n;
        document.body.appendChild(div);
    });
};

appendDiv([1, 2, 3, 4, 5, 6]);
appendDiv({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
});