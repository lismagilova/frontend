let arr = [2, 7, 3, 6, 8, 2, 9, 7];
let arr_2 = arr.filter((item, index) => {
    return arr.indexOf(item) === index
});
console.log(arr_2)