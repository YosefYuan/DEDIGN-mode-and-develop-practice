var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

var bindEvent = getSingle(function(){
    document.getElementById('div1').onclick = function(){
        alert('click');
    }
    return true;
});

var render = function(){
    console.log('開始渲染列表');
    bindEvent();
};

render();
render();
render();