/*
Elementary challenge 6
https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

https://www.delftstack.com/howto/javascript/javascript-float-to-int/

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

function getProduct (lastNum) {
    // Sum all numbers from 1..lastnum
    totValue=1;
    if (lastNum > 0 ) {
        for (let i=1; i<= lastNum; i++) {
            totValue = totValue*i;
        }
    }
    return totValue
}

for (let num=1; num <20; num++){
    print("Sum 1.." + num + " = "+ sumUp(num) + "   Product: " + getProduct(num));
}

