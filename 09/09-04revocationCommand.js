var ball = document.getElementById('ball');
var pos = document.getElementById('pos');
var moveBtn = document.getElementById('moveBtn');
var cancelBtn = document.getElementById('cancelBtn');

var MoveCommand = function (receiver, pos) {
    this.receiver = receiver;
    this.pos = pos;
    this.oldPos = null; //记录原来的位置
};

MoveCommand.prototype.execute = function () {
    this.receiver.start('left', pos.value, 1000, 'strongEaseOut');
    this.oldPos = this.receiver.dom.getBoundingClientRect()[this.receiver.propertyName];
    // 记录小球开始移动前的位置
};

MoveCommand.prototype.undo = function () {
    this.receiver.start('left', this.oldPos, 1000, 'strongEaseOut');
    // 回到小球移动前记录的位置
};

var moveCommand;

moveBtn.onclick = function () {
    var animate = new Aniamte(ball);
    moveCommand = new MoveCommand(animate, pos.value);
    moveCommand.execute();
};

cancelBtn.onclick = function () {
    moveBtn.undo();
};

// moveBtn.onclick = function () {
//     var animate = new Animate(ball);
//     animate.start('left', pos.value, 1000, 'strongEaseOut');
// };