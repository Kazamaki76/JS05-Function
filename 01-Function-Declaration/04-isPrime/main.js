/* prime number
ตัวตั้ง n (fixed)
ตั้วหาร dynamic => 1 loop */

let n = 5;
let isPrime = true;

for (let divider = 2; divider < n; divider++ ) {
    if( n % divider == 0) {
        isPrime = false ;
        break; 

    }
}
if (isPrime) console.log(n); 

/* design fn
1 input ? => number ที่ใช้เช็ค
2 logic implement ?  
3 output ? => boolean true, false 
number => boolean */

function checkPrime(num) {
    let isPrime = true 
    
}


/* Abstaction 
simple idea => one idea
hiding complexity 
simple interaction */