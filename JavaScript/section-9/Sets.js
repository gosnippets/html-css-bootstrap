const arry = [1, 2, 3, 3]
console.log("arry", arry)

// Set Methods
// 1. new Set()
// 2. add()
// 3. delete()
// 4. has() returns true and false only
// 5. clear()
// 6. forEach()
// 7. values()
// 8. keys() [key, key, key, key] = [value, value, value, value]
// 9. entries() [key, value]

// size  // Property of set


// Create a Set 
const letters = new Set(['a', 'b', 'c', 'c']);
const abc = new Set();
abc.add("a")
abc.add("b")
abc.add("c")
abc.add("c")

letters.add("d")
console.log("letters", letters)
console.log("abc", abc)

abc.delete("c")
console.log("abc", abc)

console.log(abc.has("c"))
console.log(letters.has("d"))

const nameSet = new Set(['Name1', 'Name2', 'Name3'])
console.log("NameSet", nameSet)

nameSet.clear();
console.log("NameSet", nameSet)

// letters.forEach(function (value) {
//     console.log("Each Value", value)
// })

letters.add(1)
console.log(letters.has("1"));

const newValues = letters.values(); 
console.log("NewValues", newValues)

// for(const value of newValues){
//     console.log("Value", value);
// }

// Set value = 10
// key =10
// value= 10

console.log("All Keys",letters.keys())

const newLetters = letters.entries();
console.log("newLetters Entries",newLetters)

for(const value of newLetters){
    console.log("key-value", value);
}

const lettersSize = letters.size
console.log("Total size", lettersSize)

console.log(typeof letters) // object