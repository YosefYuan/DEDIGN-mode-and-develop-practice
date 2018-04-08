var UploadFactory = (function () {
    var createdFlyWeightObjs = {};

    return {
        create: function (uploadType) {
            if (createdFlyWeightObjs[uploadType]) {
                return createdFlyWeightObjs[uploadType];
            }

            return createdFlyWeightObjs[uploadType] = new UploadFactory(uploadType);
        }
    }
})();