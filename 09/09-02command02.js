var setCommand = function (button, func) {
    button.onclick = function () {
        func();
    }
};

var MenuBar = {
    refresh: function () {
        console.log('刷新菜单界面');
    }
};

var RefreshMenuBarCommand = function (receiver) {
    return function () {
        receiver.refresh();
    }
};

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);

setCommand(button1, refreshMenuBarCommand);



// 可供撤销
var RefreshMenuBarCommand = function (receiver) {
    return {
        execute: function () {
            receiver.refresh();
        }
    }
};

var setCommand = function (button, command) {
    button.onclick = function () {
        command.execute();
    }
};

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
setCommand(button1, refreshMenuBarCommand);