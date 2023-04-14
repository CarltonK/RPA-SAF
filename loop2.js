// List of items
const myTeamList = ['Gor', 'Afc', 'Sofapaka'];

// Loop 1 -> For each
myTeamList.forEach(function (value, index) {
    // console.log('We are currently at position', index, 'which contains the value', value);
});
// Expected results
// We are currently at position 0 which contains the value Gor
// We are currently at position 1 which contains the value Afc
// We are currently at position 2 which contains the value Sofapaka

// Loop 2 -> For of
for (const iterator of myTeamList) {
    // How can I know what is the index of the current element
    let index = myTeamList.indexOf(iterator);
    // console.log('We are currently at position', index, 'which contains the value', iterator);
}

// Loop 3 -> For
for (let index = 0; index < myTeamList.length; index++) {
    const element = myTeamList[index];
    // console.log('We are currently at position', index, 'which contains the value', element);
}

// Looping through objects
const myObject = {
    'name': 'David De Gea',
    'team': 'Manchester United',
}

for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        // console.log('I am currently at the key', key, 'and the element is', element);
    }
}

// Getting keys and values in an object without constructing a loop
const keys = Object.keys(myObject);
const values = Object.values(myObject);
console.log(keys);
console.log(values);