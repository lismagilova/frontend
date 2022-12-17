let arr1 = [1, 1, 1, 2, 3, 4, 5];
let arr2 = [1, 1, 5, 7, 8, 9];
function findInt(arg1, arg2) {
    return arr1.filter(x => arr2.includes(x))
}

console.log(findInt(arr1, arr2))