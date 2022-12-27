// String
const singleQuotes = 'single quotes';
const doubleQuotes = "double quotes";
const stringInterpolation = `
I can inject variables into myself: ${singleQuotes}, ${doubleQuotes},
${2 + 5}
withNoReturn: ${withNoReturn()}
withReturnOfNothing: ${withReturnOfNothing()}
withReturnSomeValue: ${withReturnSomeValue(1)}
 `;

 // Numbers

 const x = 2;
//  const y = 3;
 const t1 = 2_000_000_000
//  const i = 2.2;
 
 // Booleans
 const t = true; // true
 const f = false; // false
 const truthy = -1 // truthy -> 1, -1, ' ', '1', '1asdba'
 const falsy = null // falsy -> null, undefined, NaN, '', 0
 if (Element.textContent) {
    console.log('worked');
 }

// Functions
function withNoReturn() {};
function withReturnOfNothing() {
    return;
}
         withReturnSomeValue(  1        )
function withReturnSomeValue(a = 2, b = 2) {
    return a + b;
}

        //  addEventListener('click', callbackFunction);
function addEventListener(action, callback) {
    const event = 'event';
    // console.log(truthy);
    if (action === 'click') {
        callback(event)
    }

    function eventFunction() {
        const one = 0;
        // console.log(one);
    }
    // console.log(one);
    eventFunction();
}

// console.log(event);


function callbackFunction(event) {
    console.log(event);
}
// console.log(`${callbackFunction}`);


// console.log(y);

// Objects -> key value pairs
const paragraph = document.querySelector('p');
const x1 = 6;
const permissions = {
    canBuy: true,
    canSell: true,
    canDelete: true,
}
const user = {
 // key/property:  value
    firstName: 'Vardenis',
    lastName: 'Pavardenis',
    age: 26,
    addEventListener: addEventListener,
    permissions: permissions,
    isActive: true,
    email: undefined,
    password: null,
    favoriteColor: 'red',
};

const someKey = 'firstName';

if (user.email) {
    // not reachable
}

if (user[someKey]) {
    // reachable
    console.log(user[someKey]);
}


if ('email' in user) {
    // reachable
    console.log(user.email);
}


// paragraph.textContent = 'abc';
// Element.textContent = 'abc'
// console.log(user);
const demoContainer = document.querySelector('#demo-container');
const input = document.querySelector('#key');
const btn = document.querySelector('button');

btn.addEventListener('click', updateObject)

function updateObject(){
    const inputValue = input.value; // key
    user.firstName = inputValue;
    console.log(user);

    // Dynamic key/property
    user[inputValue] = 'some value';
    user[inputValue] = 'some value2';
    // simple key/property addition
    user.ownedCar = 'Toyota';
    user.favoriteColor = 'red';

    // 2 years

    user.ownedCar = 'Mazda';
}

function displayUser(user) {
    // console.log('before changes: ', user);
    user.favoriteColor = 'blue';
    user.eyeColor = 'green';
    // console.log('after changes: ', user.favoriteColor);
    const paragraph = document.createElement('p');
    paragraph.textContent = `${user.firstName} ${user.lastName} canDelete: ${user.permissions.canDelete}, favorite color: ${user.favoriteColor}`;
    demoContainer.append(paragraph);
}

// displayUser(user);



// Deletion of properties
console.log('---------DELETION--------');
const dog = {
    name: 'doggy',
    car: 'Audi',
};
dog.name = '';

const dynamicKey = 'name';

delete dog.car;
delete dog[dynamicKey];

console.log(dog);

// Equality
console.log('---------EQUALITY--------')

const object1 = { name: 'name', };
const object2 = { name: 'name', };

console.log(object1 === object2);
console.log(object1 == object2);

const object3 = {};
const object4 = object3;

object4.name = 'name';

console.log({
    object3: object3,
    // shorthand for line 172
    object4,
});

console.log(object3 === object4);


// Recursive function is a function that calls itself until it doesn't
let step = 0;
function recursive() {
    if (step === 10) {
        return;
    }
    step++;
    console.log(step);
    recursive()
}

recursive();