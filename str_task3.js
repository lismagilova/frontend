let inp = 'А роза у Азора';
let new_inp = inp.toLowerCase()
let new_str = new_inp.replace(/[ ]+/g, '')

function isPalindrome(str) {
    let len = str.length;
    let med = Math.floor(len / 2);

    for (let i = 0; i < med; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true
}

console.log(isPalindrome(new_str))