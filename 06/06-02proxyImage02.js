var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();


var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('file:// /C:/Users/lenovo/Desktop/456.jpg');
            img.src = src;
        }
    }
})()

proxyImage.setSrc('http://img3.redocn.com/tupian/20150318/qingxinshuzhibiankuang_4021000.jpg');