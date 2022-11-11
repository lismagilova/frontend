function funcCounter() {
    let i = 1;
    return function()
    {return i++};
}

let func = funcCounter();

console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());