/*
Elementary challenge 4
https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

https://www.w3schools.com/js/js_loop_for.asp


*/

function sumUp (lastNum) {
    // Sum all numbers from 1..lastnum
    totValue=0;
    if (lastNum > 0 ) {
        for (let i=0; i<= lastNum; i++) {
            totValue += i;
        }
    }
    return totValue
}


print("Sum 1..7 = "+ sumUp(7));
print("Sum 1..99 = "+ sumUp(99));
