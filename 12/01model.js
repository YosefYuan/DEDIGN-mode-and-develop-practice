var Model = function (sex, underwear) {
    this.sex = sex;
    this.underwear = underwear;
};

Model.prototype.takePhoto = function () {
    console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
};

for (var i = 1; i <= 50; i++) {
    var maleModel = new Model('male', 'underwear' + i);
    maleModel.takePhoto();
};

for (var j = 1; i <= 50; j++) {
    var femaleModel = new Model('female', 'underwear' + j);
    femaleModel.takePhoto();
};