/*
Lists/Strings challenge 3

https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

    https://attacomsian.com/blog/javascript-array-search
    https://www.w3schools.com/jsref/jsref_dowhile.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
    https://www.w3schools.com/jsref/jsref_if.asp

*/

/*
I add 5 elements a a time to a list and check if the number 55 occurs
if it does I exit, otherwise I repeat til the length of the array is >=40

*/

randNums=[];

function addFive(){
// Add 5 extra elements to the array
    for (let i=1; i<= 5; i++) {
        randNums.push(Math.floor(Math.random() * 100));
    }
}

// Look for number (arbitrary 55) in randNums, if not found add 5 more elements and check again
do {
    addFive();
}
while ( randNums.length < 40 && randNums.indexOf(55) < 0 );

if (randNums.indexOf(55)>0 ) {
    print("55 found in list: " + randNums.sort(function(a, b){return a-b}));
} else {
    print ("Can't find 55 in " + randNums.sort(function(a, b){return a-b}));
}
