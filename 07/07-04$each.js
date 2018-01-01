$.each = (obj, callback) => {
    let value,
        i = 0,
        length = obj.length,
        isArray = isArrayLike(obj);

    if (isArray) {
        for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
                break;
            }
        }
    }
    return obj;
};