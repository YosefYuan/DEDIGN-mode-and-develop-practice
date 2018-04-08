// 装饰者模式
Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};

var showLogin = function () {
    console.log('打开登录浮层');
};

var log = function () {
    console.log('上报标签为：' + this.getAttribute('tag'));
};

document.getElementById('button').onclick = showLogin.after(log);