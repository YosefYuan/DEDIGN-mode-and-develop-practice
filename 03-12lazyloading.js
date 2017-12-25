// schema 1
var addEvent = function (elem, type, handler) {
    if (window.addEventListener) {
        return elem.addEventListener(type, hander, false);
    }
    if (window.attachEvent) {
        return elem.attachEvent('on' + type, hander);
    }
}

// schema2
var addEvent = (function () {
    if (window.addEventListener) {
        return function (elem, type, handler) {
            elem.addEventListener(type, handler, false);
        }
    }
    if (window.attachEvent) {
        return function (elem, type, handler) {
            elem.attachEvent('on' + type, handler);
        }
    }
})()

// schema3
var addEvent = function (elem, type, handler) {
    if (window.addEventListener) {
        addEvent = function (elem, type, handler) {
            elem.addEventListener(type, handler, false);
        }
    } else if (window.attachEvent) {
        addEvent = function (elem, type, handler) {
            elem.attachEvent('on' + type, handler);
        }
    }
    addEvent(elem, type, handler);
}