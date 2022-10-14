

let arr = []

function fibs(n) {
    if(n < 2) {
        return n;
    } else {
        return fibs(n-1) + fibs(n-2)
    }
}

const nTerms = prompt('Enter the number of terms: ');

if(nTerms <= 0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        // console.log(fibs(i));
        arr.push(fibs(i));
        console.log(arr)
    }
}

// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }