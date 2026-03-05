let primitiveArr = [2, 4, 10, 3, 12, 18, 16, 8, 14, 30,];

primitiveArr.sort((a,b) => b - a)
console.log(primitiveArr);

// filtering an array 
// filter odd
const filteredArr = primitiveArr.filter(val => val % 2 === 1 )
console.log(filteredArr);


let someTesting = primitiveArr.every(
    eve => eve % 2  === 0
)
console.log(someTesting);


let arr = [
    {id: 1, names : 'segun'},
    {id:2, names: "muheez"}
]
let everyTesting = arr.every(arr => {return arr.id % 2 === 0})
console.log(everyTesting);

// mapping
let mappedArr = arr.map(ele => ele.names);
console.log(mappedArr);
// result is going to be ['segun', 'muheez'].

// reducing an array
let reducedArr = primitiveArr.reduce((preVal,curVal) => {
    return preVal + curVal
},0);
console.log(reducedArr);



//reversing a number
let integers = 1579;
let array = [];
for (; integers > 0;) {
    let remainder = integers % 10;
    array.push(remainder)
    integers = Math.floor(integers/10)
};
let joinedArr= array.join('');
console.log(joinedArr);


// find the minimum number and maximum number
const numbers = [2,20,6,3,1,7];
let min = numbers[0];
let max = numbers[0];

function minMax() {
    for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    
    if (currentNumber < min){
        min = currentNumber;
        console.log(min);
        
    }
    if (currentNumber > max){
        max = currentNumber;
        console.log(max);
        
    }
}};
minMax()


// search technique
let searchElement = 3;
let number = [  ];
let sortedNumber = number.sort((a,b) => a-b);
function binarySearch(searchElement) {
    let low = 0; // first element of the array
    let high = sortedNumber.length-1 
    let mid = Math.floor((low + high + 1)/2)
    let found = -1 // not found yet
    do {
        if (sortedNumber[mid] === searchElement){
            return console.log(found = mid);
        }
        if (sortedNumber[mid] > searchElement) {
            high = mid-1
        }
        else{
            low = mid + 1 
            mid = Math.floor((low + high + 1)/2)
        }
    } while (found === -1 && (low <= high));
    return found = "not found"
};
binarySearch(searchElement);