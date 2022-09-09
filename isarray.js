const letters = ["a","b"];
let lets = (1,2,2);
console.log("orginal array:" , letters);
let isarray = Array.isArray(letters);
let notarray = Array.isArray(lets);
console.log("return:" , isarray);
console.log("return:",notarray);
console.log("changes made in array length: none");