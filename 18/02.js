var appendDiv = function (data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var div = document.createElement('div');
        div.innerHTML = data[i];
        document.body.appendChild(div);
    }
};
appendDiv([1, 2, 3, 4, 5, 6]);