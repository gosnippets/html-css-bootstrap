// String Methods
// 1. charAt(index)
// 2. substring(startIndex, endIndex)
// 3. indexOf(substring)
// 4. lastIndexOf(substring)
// 5. replace(oldValue, newValue)
// 6. toUpperCase()
// 7. toLowerCase()
// 8. trim()
// 9. startsWith()
// 10. endsWith()
// 11. split(separator)

//  length - Property of String
const logger = console.log

const str = "Hello, World!";
logger(str.charAt(4)) // "o"
logger(str.substring(7,12)) // "World"
logger("Hello, World!".indexOf("o")) // 4
logger(str.lastIndexOf("o")) // 8

logger(str.replace("Hello", "Hi")) // "Hi, World!"
logger(str.toUpperCase()); // "HELLO, WORLD!"
logger(str.toLowerCase()); // "hello, world!"

const str2 = "  Hello, World!   ";
logger(str2.trimStart()) // "Hello, World!   "
logger(str2.trimEnd())  // "  Hello, World! "
logger(str2.trim())  // "Hello, World!"

logger(str.startsWith("Hello")) // true
logger(str.startsWith("H")) // true
logger(str.startsWith("h")) // flase

logger(str.endsWith("World")) // false
logger(str.endsWith("World!")) // true
logger(str.endsWith("!")) // true
logger(str.endsWith("world!")) // flase

const emailListString = "abc@gmail.com,hello@gmail.com,hi@gmail.com,info@gmail.com"
const emailListArray = emailListString.split(",")
logger(emailListArray);
for(let email of emailListArray){
    logger(email)
}
logger(emailListString.length)

for(let i=0; i<str.length; i++){
    logger(str[i], str.charAt(i))
}

for(let letter of str){
    logger(letter)
}






