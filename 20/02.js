// 原有
var makeSound = function (animal) {
    if (animal instanceof Duck) {
        console.log('嘎嘎嘎');
    } else if (animal instanceof Chicken) {
        console.log('咯咯咯');
    }
};

var Duck = function () {};
var Chicken = function () {};

makeSound(new Duck());
makeSound(new Chicken());


// 修改后
var makeSound = function (animal) {
    if (animal instanceof Duck) {
        console.log('嘎嘎嘎');
    } else if (animal instanceof Chicken) {
        console.log('咯咯咯');
    } else if (animal instanceof Dog) {
        console.log('汪汪汪');
    }
};

var Duck = function () {};
var Chicken = function () {};
var Dog = function () {};

makeSound(new Duck());
makeSound(new Chicken());
makeSound(new Dog());


// 多态 优化版
var makeSound = function (animal) {
    animal.sound();
};

var Duck = function () {};

Duck.prototype.sound = function () {
    console.log('嘎嘎嘎');
};

var Chicken = function () {};

Chicken.prototype.sound = function () {
    console.log('咯咯咯');
};

makeSound(new Duck());
makeSound(new Chicken());

/* 增加动物狗，不用改动原有的 makeSound 函数 */

var Dog = function () {};
Dog.prototype.sound = function () {
    console.log('汪汪汪');
};

makeSound(new Dog());