// Destructuring // ================== DONE
// Template literals // =============== DONE
// Default parameters // ============== DONE
// Rest parameter // ================== DONE
// Spread Operator // ================= DONE
// Ternary Operator //p
// Variable Scoping // p
// Closure //p
// lexical scoping //p
// Modules //p
// Object Methods (keys,values,freez,entries)
// Exponentiation Operator // p
// Optional chaining //p
// Arrow functions  //p
// Enhanced object literals //p
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p

// ================> Destructuring <==============

// OBJECT DESTRUCTURING
let user = {
    username: 'Haseeb Ur Rehman',
    education: 'Matric Pass',
    age: 17
}

let { username, education, age } = user
// console.log(username);

let employee = {
    name: 'Jawad Nadmeem',
    sallary: 50000,
    employeeId: 1
}

let { name, sallary, employeeId } = employee
// console.log(employeeId);

// ARRAY DESTRUCTURING
let student = ['haseeb', 'jawad', 'ahmed', 'shohaib']

let [haseeb, jawad, ahmed, shohaib] = student
// console.log(haseeb);

let fruits = ['Banana', 'apple', 'watermelon', 'grapes']

let [Banana, apple, watermelon, grapes] = fruits
// console.log(Banana);


// ================> Template literals <==============

let UserName = 'Haseeb Ur Rehman'
let intro = 'My age is 17 and i am student saylani mass it training program'
console.log(UserName + intro);

// TEMPLARA LITERALS
console.log(`${UserName} ${intro}`);


// ================> Default parameters <==============


// DEFAULT PARAMETERS
function sayHello(username = 'Haseeb Ur Rehman', cast = 'rajput') {
    console.log(username + ' ' + cast);
}
// sayHello()


// ================> Rest parameter <==============

// REST PARAMETER
function Hello(...student) {
    console.log(student);
}
Hello('Haseeb', 'Jawad', 'Ahmed');


// ================> Spread parameter <==============

// SPREAD PARAMETER
let number = [1,2,3,4,5,6,7]
let number2 = [8,9,10,11,12,13,14]

let finalResults = [...number,...number2]
console.log(finalResults);
