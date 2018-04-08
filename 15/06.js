Function.prototype.before = function (beforefn) {
    var __self = this;
    return function () {
        beforefn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}

var ajax = function (type, url, param) {
    console.log(param);
};

var getToken = function () {
    return 'Token';
};

ajax = ajax.before(function (type, url, param) {
    param.Token = getToken();
});

ajax('get', 'url', {
    name: 'sven'
});