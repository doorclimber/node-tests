arr = [];

for (let i = 0; i < 100; i++) {
    arr[i] = i+100;
}

function bs(a, x, start, end) {
    if (start > end) {
        return 'false';
    }
    else {
        mid = Math.floor((start+end)/2);
        console.log(a[mid]);
        if (a[mid] === x) {
            return 'true';
        }
        if (a[mid] > x) {
            return bs(a, x, start, mid-1);
        }
        else {
            return bs(a, x, mid+1, end);
        }
    }
}

console.log(bs(arr,101,0, arr.length));