function returnNumbersPromise(num) {
    var data = [];
    for (var i = 0; i < num; ++i)
        data.push(i);
    return Promise.resolve(data);
}
var promisedNumbsers = returnNumbersPromise(10);
promisedNumbsers.then(function (numbers) {
    numbers.forEach(function (elem) { return console.log(elem); });
});
