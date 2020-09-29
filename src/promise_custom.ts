function returnCustomPromise(num: number): Promise<string> 
{
    return new Promise(function(resolve, reject) {
        if (num < 0) {
            reject(new Error("Number must be greater than zero"));
        }
        resolve("Hello My Custom Promiss");
    });
}

const myPromise: Promise<string> = returnCustomPromise(2);
myPromise.then((message) => { console.log(message); });
