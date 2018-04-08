var Upload = function (uploadType) {
    this.uploadType = uploadType;
};

Upload.prototype.delFile = function (id) {
    uploadManager.setExternalState(id, this);

    if (this.fileSize < 3000) {
        return this.dom.parentNode.removeChild(this.dom);
    }

    if(window.confirm('确实要删除该文件吗? ' + this.fileName)){
        return this.dom.parentNode.removeChild(this.dom);
    }
};

