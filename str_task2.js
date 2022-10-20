let str = 'qwer 45RF(*&GT HYJU&^%';

function deleteTrash(str) {
    return str.replace(/[^a-zA-Z0-9]+/g, '')
}

console.log(deleteTrash(str))