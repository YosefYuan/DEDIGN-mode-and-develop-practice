event.remove = (key, fn) => {
    var fns = this.cientList[key];

    if (!fns) {
        return false;
    }

    if (!fn) {
        fns && (fns.length = 0);
    } else {
        for (var l = fns.length; l >= 0; l--) {
            var _fn = fns[l];
            if (_fn === fn) {
                fns.splice(l, 1);
            }
        }
    }
}