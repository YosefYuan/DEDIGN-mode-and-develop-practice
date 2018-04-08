var players = [];

function Player(name, teamColor) {
    this.partners = [];
    this.enemies = [];
    this.state = 'live';
    this.name = name;
    this.teamColor = teamColor;
};

Player.prototype.win = function () {
    console.log('winner: ' + this.name);
};

Player.prototype.lose = function () {
    console.log('loser: ' + this.name);
};

Player.prototype.die = function () {
    var all_dead = true;
    this.state = 'dead';

    for (var i = 0, partner; partner = this.partners[i++];) {
        if (partner.state !== 'dead') {
            all_dead = false;
            break;
        }
    }

    if (all_dead === true) {
        this.lose();
        for (var i = 0, partner; partner = this.partners[i++];) {
            partner.lose();
        }
        for (var i = 0, enemy; enemy = this.enemies[i++];) {
            enemy.win();
        }
    }
};

var playerFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor);

    for (var i = 0, player; player = player[i++];) {
        if (player.teamColor === newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        } else {
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);

    return newPlayer;
}