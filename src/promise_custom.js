function returnCustomPromise(num) {
    return new Promise(function (resolve, reject) {
        if (num < 0) {
            reject(new Error("Number must be greater than zero"));
        }
        resolve("Hello My Custom Promiss");
    });
}
var myPromise = returnCustomPromise(2);
myPromise.then(function (message) { console.log(message); });
