// Q.1 - How to compare two JSON have the same properties without order?
// ADD <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script> in .html

var obj1 = { name: 'Person 1', age: 5 };
var obj2 = { age: 5, name: 'Person 1' };
console.log(_.isEqual(obj1, obj2));
