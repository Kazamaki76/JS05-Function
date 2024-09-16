/* example 
Team Liquid 
Total match = 38
win = 30 => 30 * 3 = 90 
draw = 4 => 4 * 1 = 4
lose = 4 => 0 can ignore this

Total = 94

Abstraction 
= Hiding complexity 
= Easy interact */

// win, draw = total
const calMatchPoint = ( win, draw) => win * 3 + draw ;
