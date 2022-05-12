let arr = [];

for (let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}

function quicksort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        }
        else {
            rightArray.push(arr[i]);
        }
    }
    if (leftArray.length !== 0 && rightArray.length !== 0) {
        return [...quicksort(leftArray), pivot, ...quicksort(rightArray)];
    }
    else if (leftArray.length !== 0) {
        return [...quicksort(leftArray), pivot];
    }
    else {
        return [pivot, ...quicksort(rightArray)];
    }
}







console.log(arr);

console.log(quicksort(arr));