function mergeArrays(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let mergedArr = [];
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            mergedArr.push(arr1[index1]);
            index1++
        }
        else {
            mergedArr.push(arr2[index2]);
            index2++
        }
    }
    while (index1 < arr1.length) {
        mergedArr.push(arr1[index1]);
        index1++
    }
    while (index2 < arr2.length) {
        mergedArr.push(arr2[index2]);
        index2++
    }
    return mergedArr
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let firstArr = arr.slice(0, mid);
    let secondArr = arr.slice(mid);
    return mergeArrays(mergeSort(firstArr), mergeSort(secondArr))
}

console.log(mergeSort([2, 6, 9, 1, 4, 9, 4, 5]))