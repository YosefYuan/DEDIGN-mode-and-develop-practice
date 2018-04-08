Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};

window.onload = (window.onload || function () {}).after(function () {
    console.log(document.getElementsByTagName('*').length);
});