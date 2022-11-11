let str = 'aa sss frgfgt ge dsaa gredfaa ddrwaa';

function replaceAll(find, replace, str) {
    while(str.indexOf(find) > -1) {
        str = str.replace(find, replace)
    }
    return str
}

console.log(replaceAll('aa', 'kyky', str))