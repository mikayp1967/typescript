/*
Lists/Strings challenge 1

https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_random.asp
Added about compare functions to cheatsheet


*/

// Seed an array but add random 0-99 values cos why not...
randNums=[1,3,6,51,4,7,23,31];
for (let i=1; i<= 10; i++) {
    randNums.push(Math.floor(Math.random() * 100));
}


print("Full array: " + randNums);
print("Elements in array: " + randNums.length);
print("Array sorted: " + randNums.sort(function(a, b){return a-b}));
print("Largest number in list: "+ randNums[(randNums.length-1)]);
