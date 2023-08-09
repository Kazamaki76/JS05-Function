function max(...args) {
    let maxValue = -Infinity;
  
    for (const arg of args) {
      if (typeof arg !== 'number') {
        return NaN;
      }
  
      if (arg > maxValue) {
        maxValue = arg;
      }
    }
  
    return maxValue;
  }
  
  console.log(max(10, 5, 8, 3));     
  console.log(max(3, 7, 2, 9));      
  console.log(max(1, 1, 1, 1));      
  console.log(max(5, "hello", 2));   
  