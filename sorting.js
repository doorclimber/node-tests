let arr = [];

 for (let i = 0; i < 100000; i++) {
    arr[i] = Math.floor(Math.random() * 100000);
}

let arr2 = [];

for (let i = 0; i < 100000; i++) {
    arr2[i] = arr[i];
}



function bubbleSort(a) {
    console.log(arr);
    let itt = 0;
    for (let i = 0; i < a.length; i++) {
        for(let j = 0; j < (a.length - i - 1); j++) {
            if (a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                itt++;
            }
        }
    }
    console.log(a);
    console.log('bubblesort iterations');
    console.log(itt);

}




function is(a) {
    console.log(arr2);
    let itt2 = 0;
    for(let i = 1; i < a.length; i++) {
        
        let key = a[i];
        let j = i-1;

        while((j > -1) && (key < a[j])) {
            a[j+1] = a[j];
            j--;
            itt2++;
        }
        a[j+1] = key;
    }
    console.log(a);
    console.log('insertionsort iterations');
    console.log(itt2);
    return a;
}

bubbleSort(arr);
is(arr2);
