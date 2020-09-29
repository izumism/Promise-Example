function returnNumbersPromise(num: number): Promise<number[]>
{
    let data: number[] = [];
    for (let i = 0; i < num; ++i)
        data.push(i);
    return Promise.resolve(data);
}

const promisedNumbsers: Promise<number[]> = returnNumbersPromise(10);
promisedNumbsers.then((numbers) => {
    numbers.forEach(elem => console.log(elem));
});
