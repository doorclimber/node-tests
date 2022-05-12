arr = [];

for(let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 1000)
}

function quicksort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            arr2.push(arr[i]);
        }
        else {
            arr3.push(arr[i]);
        }
    }
    if (arr2.length > 0 && arr3.length > 0) {
        return [...quicksort(arr2), pivot, ...quicksort(arr3)];
    } 
    else if (arr2.length > 0) {
        return [...quicksort(arr2), pivot];
    } 
    else {
        return [pivot, ...quicksort(arr3)];
    }
}


console.log(arr);
console.log(quicksort(arr));