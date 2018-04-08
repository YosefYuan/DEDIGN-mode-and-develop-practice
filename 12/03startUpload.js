var id = 0;

window.startUpload = function (uploadType, files) {
    for (var i = 0, file; file = files[i++];) {
        var uploadObj = new uploadObj(uploadType, file.fileName, file.fileSize);
        uploadObj.init(id++);
    }
};


var Upload = function (uploadType, fileName, fileSize) {
    this.uploadType = uploadType;
    this.fileName = fileName;
    this.fileSize = fileSize;
    this.dom = null;
};

Upload.prototype.init = function (id) {
    var that = this;
    this.id = id;
    this.dom = document.createElement('div');
    this.dom.innerHTML = `
        <span>文件名称: ${this.fileName}, 文件大小: ${this.fileSize}</span>
        <button class="delFile">删除</button>
    `;
    this.dom.querySelector('.delFile').onclick = function () {
        that.delFile();
    }
    document.body.appendChild(this.dom);
};

Upload.prototype.delFile = function () {
    if (this.fileSize < 3000) {
        return this.dom.parentNode.removeChild(this.dom);
    }

    if (window.confirm('确定要删除该文件吗? ' + this.fileName)) {
        return this.dom.parentNode.removeChild(this.dom);
    }
};

startUpload('plugin', [{
        fileName: '1.txt',
        fileSize: 1000
    },
    {
        fileName: '2.html',
        fileSize: 3000
    },
    {
        fileName: '3.txt',
        fileSize: 5000
    }
]);

startUpload('flash', [{
        fileName: '4.txt',
        fileSize: 1000
    },
    {
        fileName: '5.html',
        fileSize: 3000
    },
    {
        fileName: '6.txt',
        fileSize: 5000
    }
]);