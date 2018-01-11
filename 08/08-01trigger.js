let salesOffices = {}

salesOffices.clientList = []

salesOffices.listen = function (fn) {
    this.clientList.push(fn)
}

salesOffices.trigger = function () {
    console.log(this)
    for (var i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments)
    }
}

salesOffices.listen((price, squareMeter) => {
    console.log('价格=' + price)
    console.log('squareMeter= ' + squareMeter)
})

salesOffices.listen((price, squareMeter) => {
    console.log('价格=' + price)
    console.log('squareMeter= ' + squareMeter)
})

salesOffices.trigger(2000000, 88)
salesOffices.trigger(3000000, 110)