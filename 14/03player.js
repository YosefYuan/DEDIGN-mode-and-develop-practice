function Player(name, teamColor) {
    this.name = name;
    this.teamColor = teamColor;
    this.state = 'alive';
};

Player.prototype.win = function () {
    console.log(this.name + ' won')
}

Player.prototype.lose = function(){
    console.log(this.name + ' lost');
};

// 玩家死亡
Player.prototype.die = function(){
    this.state = 'dead';
    playerDirector.ReceiveMessage('playerDead', this);
};

// 移除玩家
Player.prototype.remove = function(){
    playerDirector.ReceiveMessage('removePlayer', this);
};

// 玩家换队
Player.prototype.changeTeam = function(color){
    playerDirector.ReceiveMessage('changeTeam', this, color);
};

