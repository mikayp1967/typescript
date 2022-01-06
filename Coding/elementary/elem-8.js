/*
Elementary challenge 8
https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

https://www.w3schools.com/jsref/jsref_sqrt.asp


*/

function testPrime (Num) {
    // Print mukltiplication table for given number
    maxFactor=parseInt(Math.sqrt(Num));
    if (maxFactor > Num) maxFactor=Num;
    isPrime=true;
    
    for (let i=1; i<= maxFactor; i++) {
        if (i > 1 ) {
            if ((Num / i) == parseInt(Num / i) ) {
                if (isPrime) {
                    print("\nFactors of " + Num );
                    isPrime=false;
                }
                print("  " + i + " & " + Num/i);
            }
        }
    }
        if (isPrime) {
        print("\n" + Num + " is *** PRIME ***");
    }
}

for (let num=1; num <=100; num++){
    testPrime(num);
}
