let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
let n = A.length;
let j = 0;
for (let i = 0; i < n; i++) {
    if (A[i] !== 0) {
        moveAllZeros(A, j, i);
        j++;
    }
}

for (let i = 0; i < n; i++) {
    console.log(A[i] + " ");
}

function moveAllZeros(A, a, b) {
    let raw = A[a];
    A[a] = A[b];
    A[b] = raw;
}