function leaveUnique(str) {
    let new_str = str.split('')
    for (let i = 0; i < new_str.length; i++) {
        for (let k = 0; k < new_str.length; k++) {
            if (new_str[i] === new_str[k]) {
                str = str.replace(new_str[i], '')
                str = str.replace(new_str[k], '')
            }
        }
    }
    return new_str
}

console.log(leaveUnique('qyw1terwwbteywtqrw7ey'))
// 1b7
