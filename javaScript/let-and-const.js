'use strict';
function main(raio) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const area = PI * (raio** 2);
    const perimeter = 2 * PI * raio;
    // Print the area of the circle:
    console.log(Number(area));
    
    // Print the perimeter of the circle:
    console.log(Number(perimeter));

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
main(2.6);