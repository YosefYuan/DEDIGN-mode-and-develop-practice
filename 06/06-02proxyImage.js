var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

myImage.setSrc('http://img3.redocn.com/tupian/20150318/qingxinshuzhibiankuang_4021000.jpg');