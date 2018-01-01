let Iterator = (obj) => {
    let current = 0;

    let next = () => {
        current += 1;
    };

    let isDone = () => {
        return current >= obj.length;
    };

    let getCurrItem = () => {
        return obj[current];
    };

    return {
        next,
        isDone,
        getCurrItem
    }
};

let compare = (iterator1, iterator2) => {
    while (!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
            throw new Error('iterator1 和 iterator2 不相等');
        }
        iterator1.next();
        iterator2.next();
    }
    alert('iterator1 和 iterator2 相等');
}

let iterator1 = Iterator([1, 2, 3]);
let iterator2 = Iterator([1, 2, 4]);

compare(iterator1, iterator2);