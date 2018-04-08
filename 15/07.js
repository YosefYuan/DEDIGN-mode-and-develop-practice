Function.prototype.before = function (beforefn) {
    var __self = this;
    return function () {
        if (beforefn.apply(this, arguments) === false) return;
        return __self.apply(this, arguments);
    }
}


var ajax = function (type, url, param) {
    console.log(param);
};

var username = document.getElementById('username'),
    password = document.getElementById('password'),
    submitBtn = document.getElementById('submitBtn');

var validata = function () {
    if (username.value === '') {
        alert('用户名不能为空');
        return false;
    }
    if (password.value === '') {
        alert('密码不能为空');
        return false;
    }
}

var formSubmit = function () {
    var param = {
        username: username.value,
        password: password.value
    }
    ajax('get','xxx',{a:"a"});
}

formSubmit = formSubmit.before(validata);

submitBtn.onclick = function () {
    formSubmit();
}