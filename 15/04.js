Function.prototype.after = function (afterfn) {
    var __self = this;
    return function () {
        var ret = __self.apply(this, arguments);
        console.log('test');
        afterfn.apply(this, arguments);
        return ret;// 保留原来函数返回值
    }
};

var showLogin = function () {
    console.log('打开登录浮层');
}

var log = function () {
    console.log('上报标签为: ' + this.getAttribute('tag'));
}

showLogin = showLogin.after(log);

document.getElementById('button').onclick = showLogin;