/*
Lists/Strings challenge 2

https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:


*/

randNums=[1,3,6,51,4,7,23,31];

for (let i=1; i<= 10; i++) {
    randNums.push(Math.floor(Math.random() * 100));
}

print("Full array: " + randNums);
randNums=randNums.reverse();
print("Reversed array: " + randNums);
