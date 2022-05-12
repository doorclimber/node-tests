


//takes a string and checks for if the parameters match
function checkParens(s) {
    let arr = [];
    //convert s to an array
    let parenArray = s.split('');
    //if i is an opening parenthesis, then push it onto this new array
    for (let i = 0; i < parenArray.length; i++) {
        if (parenArray[i] === '(' || parenArray[i] === '[' || parenArray[i] === '{') {
            arr.push(parenArray[i]);
        }
        //if closing parenthesis, check to make sure the opening and closing match
        if (parenArray[i] === ')' || parenArray[i] === ']' || parenArray[i] === '}') {
            let together = arr[arr.length - 1] + parenArray[i];
            //together is the parens together
            console.log(together);
            //if they match, pop the opening paren off of arr
            if (together === '()' || together === '[]' || together === '{}'){
                console.log(arr)
                arr.pop();
            }
            else { 
                return false;
            }
            //if arr has a length of 0, return true
        }
    }
    return true;
}

console.log(checkParens('[{{[]}}]'));
