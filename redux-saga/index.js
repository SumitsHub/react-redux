// generators

function* getNum() {
    let i = 1;
    while(i < 10) {
        yield i++
    }
    return i
} 

const numGenerator = getNum();
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next());
console.dir(numGenerator.next()); // {value: 10, done: true}

const numGenerator2 = getNum();
//* iterating using for of loop - only prints yielded values
for(value of numGenerator2) {
    console.log(value);
}
console.log(numGenerator2.next()); // { value: undefined, done: true }
console.log(numGenerator2.next()); // { value: undefined, done: true }


