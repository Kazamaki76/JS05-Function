/*

2 main function
 1 function declaration / name function
 2 fucntion expression / normally written in anonymous function 
 */
/*
 How to use function
 1 declare function =>  ******** set name and input  **************
 2 call
*/
//  1 define 
function sayHi() {
    console.log(`hello ${name}`);
}

// 2 call 

sayHi('John', "Doe");
sayHi('Kanut', "lnwza" );




// /* Return value*/ = result จากการ  run funciton จนเสร็จ
// add(5,6) == return value, FN result



function add (x, y) {
    let result = x + y ;

    return result;
}

console.log(11 === add(5, 6 ))  // Done : add (5, 6 ) === result

let r = add(5, 6) // reusable result 
console.log(r);
console.log(r);


console.log(add(5, 6)); // one time use
console.log(add(5, 6)); // one time use



function isEven(n) {
    if(n % 2 == 0 ) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(8));
console.log(isEven(7));

/* CheckPoint
Declare
Param รับ input
call รัน function
return result */


/* ####### Function Expression */

let a = 5 * 2 + 7;
/* 
expression 
single value : 7 
combine expression : 7+ 2
FN result : add(7, 2) 
*/

let myFunc = add;
let z = console.log;
// Format : variable = FN (FN Expression)
// FN EXpression : การ assign FN ให้กับ variable

console.log(myFunc(5, 2)) ;
z('hi') ; //z = console.log;







// ANONYMOUS FN

//SYNTAX = FN Expression
//อธืบาย : กำลัง assign anon fn ให้กับตัวแปร sayHello

const sayHello = function () {
    console.log('hi' + name); 
}

sayHello('Expression');

/* 1. function add () {} 
2A. let add = function () {}
2B. let add = () => {} 
*/

// const minus = (a, b ) =>{
//     return a - b; 
// };
const minus = (a, b) => a - b;
const minusTwo = (a) => a - 2;
const two = 2;

/* console.log */