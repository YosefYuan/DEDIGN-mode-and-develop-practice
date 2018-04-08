var toolTipFactory = (function () {
    var toolTipPool = [];

    return {
        create: function () {
            if (toolTipPool.length === 0) {
                var div = document.createElement('div');
                document.body.appendChild(div);
                return div;
            } else {
                return toolTipPool.shift();
            }
        },
        recover: function (tooltipDom) {
            return toolTipPool.push(tooltipDom);
        }
    }
})();


var ary = [];

for (var i = 0, str; str = ['A', 'B'][i++];) {
    var toolTip = toolTipFactory.create();
    toolTip.innerHTML = str;
    ary.push(toolTip);
}

for (var i = 0, toolTip; toolTip = ary[i++];) {
    toolTipFactory.recover(toolTip);
};

for (var i = 0, str; str = ['A', 'B', 'C', 'D', 'E', 'F'][i++];) {
    var toolTip = toolTipFactory.create();
    toolTip.innerHTML = str;
};

var objectPoolFactory = function (createObjFn) {
    var objectPool = [];

    return {
        create: function () {
            var obj = objectPool.length === 0 ? createObjFn.apply(this, arguments) : objectPool.shift();

            return obj;
        },
        recover: function (obj) {
            objectPool.push(obj);
        }
    }
};

var iframeFactory = objectPoolFactory(function () {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    iframe.onload = function () { 
        iframe.onload = null;
        iframeFactory.recover(iframe);
    }

    return iframe;
});

var iframe1 = iframeFactory.create();
iframe1.src = 'http://baidu.com';

var iframe2 = iframeFactory.create();
iframe2.src = 'http://QQ.com';

setTimeout(function () {
    var iframe3 = iframeFactory.create();
    iframe3.src = 'http://163.com';
}, 3000);