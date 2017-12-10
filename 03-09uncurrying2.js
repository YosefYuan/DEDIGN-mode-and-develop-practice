Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    };
};

var push = Array.prototype.push.uncurrying();

(function () {
    push(arguments, 4);
    console.log(arguments);
})(1, 2, 3);

for (var i = 0, fn, ary = ['push', 'shift', 'forEach']; fn = ary[i++];) {
    Array[fn] = Array.prototype[fn].uncurrying();
};

var obj = {
    'length': 3,
    '0': 1,
    '1': 2,
    '2': 3
};

Array.push(obj, 4);
console.log(obj.length);

var first = Array.shift(obj);
console.log(obj.length);
console.log(obj);

Array.forEach(obj, function (i, n) {
    console.log(i);
});