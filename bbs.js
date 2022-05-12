arr = [];

for(let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 1000)
}

console.log(arr);

function bbs(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    console.log(a);
}

function is(a) {
    for (let i = 1; i < a.length; i++) {

        let key = a[i];
        let j = i-1;

        while ((j > -1) && (key < a[j])) {
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = key;
    }
    console.log(a);
}



is(arr);