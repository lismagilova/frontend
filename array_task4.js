let arr = [1, 3, 4, 7, 10, 15, 19, 22, 23];
let theSearch = 7;
function binarySearch(arr, n) {
    let f_endpoint = 0;
    let l_endpoint = arr.length - 1;
    let pos = -1;
    let mid;
    let found = false;

    while (found === false && f_endpoint <= l_endpoint) {
        mid = Math.floor((f_endpoint + l_endpoint)/2);
        if (arr[mid] === n) {
            found = true;
            pos = mid;
        }
        else if (arr[mid] > n) {
            l_endpoint = mid - 1;
        }
        else {
            f_endpoint = mid + 1
        }
    }
    return [arr[pos], pos]
}

console.log(binarySearch(arr, theSearch))