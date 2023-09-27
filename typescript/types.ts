let firstName: string;
firstName = "sam1234";
// firstName = 23; //Error

function addNumbers(n1: number, n2: number): number {
  return n1 + n2;
}

// console.log(addNumbers("Hello", 4)); //Error
console.log(addNumbers(3, 4));

interface Person {
  name: string;
  city: string;
}

const person: Person = {
  name: "Abhinav",
  city: "Bangalore",
  country: "India",
};
