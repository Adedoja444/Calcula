// alert('Hello World')

console.log('Hello world');

var book = 'Hairdresser of Harare';
console.log (book)

const myName = 'Goodness'
const surName = `Adeeyo ${myName}`
console.log(surName)

const number = 1000;
console.log(number)

let js = '10'
let py = 10
console.log (py === js)

const myarray = [1, 2, 3, 4, "dog", 'cat', 8, 10]
console.log(myarray)

myarray.push('queen')
console.log(myarray)

//old way of defining a function
function myfunction() {

}

//current way pf defining it
const newfun = (num1, num2) => {
    console.log(num1)
    const add = num1 + num2
    return add
}

//calling a function
newfun()

console.log(newfun(3,5))


//array functions

//length method: Used to return the size of the array.
let names = ["Goodness", "Samuel", "Bola", "Faith", "Debbie"];
let length = names.length;
console.log(length);

//pop method: Removes the last element of an array.
let pop = names.pop();
console.log(pop);
console.log(names);

//push method: Adds a new element to the end of the array
let push = names.push("Tilda");
console.log(push);
console.log(names);

//shift method: removes the first array element
let shift = names.shift();
console.log(shift);
console.log(names);

//unshift method: adds a new element to the beginning of the array
let unshift = names.unshift('Ana');
console.log(unshift);
console.log(names);

//splice method: used to add new items to an array
// The first parameter defines the position where the element should be added and the second parameter defines how many should be removed.
let splice = names.splice(2, 1, "Esther", "Mary");
console.log(names);

//join method: joins all array elements into a string
let join = names.join("+");
console.log(join);

//at method: returns an indexed element from an array
let at = names[3];
console.log(at);