let w1 = "gallery";
let w2 = "allergy";

function checkAnagram(w1, w2) {

    if(!w1 || !w2 || w1.length !== w2.length)
    {return false;}

    let lS1 = w1.toLowerCase();
    let lS2 = w2.toLowerCase();

    if(lS1 === lS2)
    {return false;}

    let rS1 = lS1.split('').sort().join('');
    let rS2 = lS2.split('').sort().join('');

    return rS1 === rS2;
}

let result = checkAnagram(w1, w2);
console.log(result);