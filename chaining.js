// Sort the numbers in descending order (10, 9, 8, 7, etc). (DONE)
// Remove any integers greater than 19. (DONE)
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var newArry = integers.sort(function(a,b){return b-a})
.filter(a => a < 19)
.map(a => (a * 1.5)-1);
console.log(newArry);
