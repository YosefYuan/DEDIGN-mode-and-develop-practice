Function.prototype.before = function (beforefn) {
    var __self = this;
    return function () {
        beforefn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}

var func = function (param) {
    console.log(param);
}

func = func.before(function (param) {
    param.b = 'b';
});

func({a:'a'});

