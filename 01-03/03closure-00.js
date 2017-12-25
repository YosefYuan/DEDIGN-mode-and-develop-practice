var Type = {};

for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
    (function (type) {
        Type['is' + type] = function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    })(type)
};
console.log(Type.isArray([]));
console.log(Type.isString('str'));

var mult = (function () {
    var cache = {};
    var calculte = function () {
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
        return cache[args] = calculte.apply(null, arguments);
    }
})();
var cache1 = mult(1, 2, 3);
console.log(cache1);