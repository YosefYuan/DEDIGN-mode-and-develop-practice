var tween = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    strongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    sineaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    sineaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
};

var Animate = function (dom) {
    this.dom = dom;
    this.startTime = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.propertyName = null;
    this.easing = null;
    this.duration = null;
};

Animate.prototype.start = function (propertyName, endPos, duration, easing) {
    this.startTime = +new Date();
    this.startPos = this.dom.getBoundingClientRect()[propertyName];
    this.propertyName = propertyName;
    this.endPos = endPos;
    this.duration = duration;
    this.easing = tween[easing];

    var self = this;
    
    // var timeId = setInterval(function () {
    //     if (self.step() === false) {
    //         clearInterval(timeId);
    //     }
    // }, 19);

    function a() {
        if (self.step() !== false) {
            requestAnimationFrame(a);
        }
    }
    requestAnimationFrame(a);
};

Animate.prototype.step = function () {
    var t = +new Date();
    if (t >= this.startTime + this.duration) {
        this.update(this.endPos);
        return false;
    }
    var pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
    this.update(pos);
};

Animate.prototype.update = function (pos) {
    this.dom.style[this.propertyName] = pos + 'px';
};


// test
var div = document.getElementById('div');

var animate = new Animate(div);

animate.start('left', 500, 1000, 'sineaseIn');



function showStyle() {
    var style = div.getBoundingClientRect();
    console.log(style);
}
showStyle();
setTimeout(showStyle, 1100);




