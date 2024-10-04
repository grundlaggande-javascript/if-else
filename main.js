// Basic If-Else Statement
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// If-Else If-Else Chain
let score = 85;

if (score >= 90) {
    console.log("You got an A.");
} else if (score >= 80) {
    console.log("You got a B.");
} else if (score >= 70) {
    console.log("You got a C.");
} else {
    console.log("You need to study harder.");
}

// Nested If Statements
let password = "mypassword123";

if (password.length >= 8) {
    if (password.includes("123")) {
        console.log("Password is strong.");
    } else {
        console.log("Password needs a number.");
    }
} else {
    console.log("Password is too short.");
}

// Logical Operators with If Statements
let temperature = 25;
let isSunny = true;

if (temperature > 20 && isSunny) {
    console.log("It's a nice day outside!");
} else if (temperature > 20 && !isSunny) {
    console.log("It's warm, but cloudy.");
} else {
    console.log("It's cold outside.");
}

if (temperature > 20 || isSunny) {
    console.log("It's either warm or sunny outside, but not both.");
  }

// Switch Statement (an alternative to multiple if-else)
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("I don't know that fruit.");
}

// Combining Comparison Operators
let x = 10;
let y = "10";

if (x == y) {
    console.log("x and y are equal in value."); // Loose comparison (==)
}

if (x === y) {
    console.log("x and y are equal in both value and type."); // Strict comparison (===)
} else {
    console.log("x and y are not equal in both value and type.");
}

// Example with NaN and Undefined checks
let z;

if (isNaN(z)) {
    console.log("z is NaN.");
} else if (z === undefined) {
    console.log("z is undefined.");
} else {
    console.log("z is a valid number.");
}