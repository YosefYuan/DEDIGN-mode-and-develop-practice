var goods = {
    "red|32G": 3,
    "red|16G": 0,
    "blue|32G": 1,
    "blue|16G": 6
};

var mediator = (function () {
    var colorSelect = document.getElementById('colorSelect'),
        memorySelect = document.getElementById('memorySelect'),
        numberInput = document.getElementById('numberInput'),
        colorInfo = document.getElementById('colorInfo'),
        memoryInfo = document.getElementById('memoryInfo'),
        numberInfo = document.getElementById('numberInfo'),
        nextBtn = document.getElementById('nextBtn');

    return {
        changed: function (obj) {
            var color = colorSelect.value,
                memory = memorySelect.value,
                number = numberInput.value,
                stock = goods[color + '|' + memory];


            if (obj === colorSelect) {
                colorInfo.innerHTML = color;
            } else if (obj === memorySelect) {
                memoryInfo.innerHTML = memory;
            } else if (obj === numberInput) {
                numberInfo.innerHTML = number;
            }

            if (!color) {
                nextBtn.disbled = true;
                nextBtn.innerHTML = '请选择手机颜色';
                return;
            }

            if (!memory) {
                nextBtn.disabled = true;
                nextBtn.innerHTML = '请选择内存大小';
                return;
            }

            if (((number - 0) | 0) !== number - 0) {
                nextBtn.disabled = true;
                nextBtn.innerHTML = '请输入正确的购买数量';
                return;
            }
        }
    }

})();