var obj1 = {
    name: 'sven'
};

var obj2 = {
    getName: function () {
        return this.name;
    }
};

console.log(obj2.getName.call(obj1));


(function () {
    Array.prototype.push.call(arguments, 4);
    console.log(arguments);
})(1, 2, 3);    