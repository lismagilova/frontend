function add1(x) {
    let sum = x;

    function addInner(y) {
        if(y){
            sum += y;
            return addInner
        }
        return sum
    }
    return addInner
}
console.log(add1(3)(2)(7)())