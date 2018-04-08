var Attack = function (spirit) {
    this.spirit = spirit;
};

Attack.prototype.start = function(type){
    return this.list[type].call(this);
};

Attack.prototype.list = {
    waveBoxing: function(){
        console.log(this.spirit.name + ': 使用波动腿');
    },
    whirlKick: function(){
        console.log(this.spirit.name + ': 使用旋风腿');
    }
};

var Spirit = function(name){
    this.name = name;
    this.attackObj = new Attack(this);
};

Spirit.prototype.attack = function(type){
    this.attackObj.start(type);
};

var spirit = new Spirit('RYU');

spirit.attack('waveBoxing');
spirit.attack('whirlKick');