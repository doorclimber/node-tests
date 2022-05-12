const map1 = new Map();

map1.set('a', "alkaline");
map1.set('b', "banana");
map1.set("a", "alphabet");

function addMapWithCollision(m, key, data) {
    let ptrKey = key;
    while (m.has(ptrKey)) {
        ptrKey = ptrKey+1;
    }
    m.set(ptrKey, data);
}


addMapWithCollision(map1, 'b', 'baseball');
addMapWithCollision(map1, 'b', 'balloon');

console.log(map1);