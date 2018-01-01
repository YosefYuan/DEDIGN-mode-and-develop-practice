// miniConsole.js代码
miniConsole = {
    log: function () {
        // 真正代码
        console.log(Array.prototype.join.call(arguments));
    }
}