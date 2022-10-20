let inp = "опа опа америка европа";

function changeRegister(str) {
    let new_str = str.split(' ');
    let output_str = '';

    for (let i = 0; i < new_str.length; i++) {
        let word = new_str[i].split('')
        word[0] = word[0].toUpperCase()
        output_str += word.join('') + ' '
    }
    return output_str
}

console.log(changeRegister(inp))
