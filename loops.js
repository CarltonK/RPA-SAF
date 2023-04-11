// Arrays
const fruitsArray = ['Banana', 'Apples', 'Oranges'];

// Loops
// Going through the array. element by element

// LOOP 1 - For Each
// fruitsArray.forEach(function announcer(element) {
//     console.log('I have eaten a', element);
// });

// LOOP 2 - For of
// for (const element of fruitsArray) {
//     console.log('I have eaten a', element);
// }

// LOOP 3 - for
for (let index = 0; index < fruitsArray.length; index++) {
    const element = fruitsArray[index];
    console.log('We are currently at position', index, 'the current item is', element);

    if (element == 'Banana') {
        console.log('Hey! We are now at the banana');
    }
}

// const myNumbers = [2, 4, 6, 8, 16, 32]
// let totalSum = 0;
// myNumbers.forEach(function numberAdder(element) {
//     console.log('I am adding', element, 'to', totalSum);
//     // totalSum = totalSum + element;
//     // Short Form of immediate above
//     totalSum += element;
// });
// console.log(totalSum);