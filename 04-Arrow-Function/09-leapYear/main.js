// หาร 4 ลง => true
// 1800 => false
// 1900 => flase
// 2000 => true

/* 100 ลงตัวไม่เป็น leap year *** ยกเว้นหาร 400 ลงตัวเป็น leap year 
ที่เหลือหาร 4 ลงตัวเป็น learp year */

// isLearYear => bo
olean 
// const isLearYear(year) => {
// #1
//     if(year % 4 === 0 && year % 100 !=0){
//     } else if( year % 100 === 0 && year % 400 !=0 ){
//         return false
//     }else if (year % 400 == 0){
//         return true;
//     }
// }

//  #2
// if (year % 400 == 0) {
//     return true;
//     }    else if(year % 100 == 0) {
//         return false;
//     }else if (year % 4 == 0){
//         return true 
//     }
// #3
// if (year % 400 == 0) {
//     return true;
// }
// if (year % 100 === 0) {
//     return false;
// }
 
// if ( year % 4 === 0) {
//     return true;
// }

// #4  
// if (year % 100 === 0) {
//     return year % 400 == 0;
// }
// return year % 4 === 0;


//#5 
return year % 100 === 0 ? year % 100 === 0 ? year % 400 == 0 ; year % 4 === 0;
const isLearYear = (year) => (year % 100 === 0 ? year % 400 == 0 : year % 4 === 0) ;









