// var createLoginLayer = (function () {
//     var div;
//     return function () {
//         if (!div) {
//             div = document.createElement('div');
//             div.innerHTML = '我是登录浮窗';
//             div.style.display = 'none';
//             document.body.appendChild(div);
//         }
//         return div;
//     }
// })();

// 单例模式
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer = getSingle(createLoginLayer);

var loginLayer1 = createSingleLoginLayer();
var loginLayer2 = createSingleLoginLayer();

alert(loginLayer1 === loginLayer2);