Function.prototype.bind = function () {
    var self = this,
        context = [].shift.call(arguments),
        args = [].slice.call(arguments);

    return function () {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
}


var obj = {
    name: 'sven'
};

var func = function (a, b, c, d) {
    alert(this.name);
    alert([a, b, c, d]);
}.bind(obj, 1, 2);

func(3, 4);