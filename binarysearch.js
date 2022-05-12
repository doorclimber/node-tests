arr = [];

for (let i = 0; i < 1000; i++) {
    arr[i] = i+100;
}

const bs = function(a, min, max, data) {

    if (min > max){
        return false;
    }

    let mid = Math.floor((min+max)/2);

    console.log(a[mid]);

    if (data === a[mid]){
        return true;
    }

    if (data > a[mid]) {
        bs(a, mid+1, max, data);
    }
    else {
        bs(a, min, mid-1, data);
    }
}

bs(arr,0,arr.length, 198);
