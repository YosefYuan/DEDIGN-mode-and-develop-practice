var MacroCommand = () => {
    return {
        commandsList: [],
        add(command) {
            this.commandsList.push(command);
        },
        execute() {
            for (var i = 0, command; command = this.commandsList[i++];) {
                command.execute();
            }
        }
    }
};

// 第1组
var openAcCommand = {
    execute(){
        console.log('打开空调');
    }
};

// 第2组
var openTvCommand = {
    execute(){
        console.log('打开电视');
    }
};

var openSoundCommand = {
    execute(){
        console.log('打开音响');
    }
};

var macroCommand1 = MacroCommand();
macroCommand1.add(openTvCommand);
macroCommand1.add(openSoundCommand);

// 第3组
var closeDoorCommand = {
    execute() {
        console.log('关门');
    }
};

var openPcCommand = {
    execute() {
        console.log('开电脑');
    }
};

var openQQCommand = {
    execute() {
        console.log('登录QQ');
    }
};

var macroCommand2 = MacroCommand();
macroCommand2.add(closeDoorCommand);
macroCommand2.add(openPcCommand);
macroCommand2.add(openQQCommand);


// 1组、2组和3组合并
var macroCommand = MacroCommand();
macroCommand.add(openAcCommand);
macroCommand.add(macroCommand1);
macroCommand.add(macroCommand2);

var setCommand = (function (command) {
    document.getElementById('button').onclick = function () {
        command.execute();
    }
})(macroCommand);