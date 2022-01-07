/*
Lists/Strings challenge 4

https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:



*/

/*
I add 5 elements a a time to a list and check if the number 55 occurs
if it does I exit, otherwise I repeat til the length of the array is >=40

*/

randNums=[];

// Add random number of elements (between 10-19) to the array
numToAdd=(10 + Math.floor(Math.random() * 10));
for (let i=1; i<= numToAdd; i++) {
    randNums.push(Math.floor(Math.random() * 100));
}
print("Array of elements: " + randNums);

// Print odd numbered elements
arrayLen=randNums.length;
numElements=(Math.floor((arrayLen+1)/2));
print("There are "+ arrayLen + " elements.");
for (let i=0; i<numElements; i++){
    print ("Element " + (i*2) + ": " + randNums[i*2]);
}
