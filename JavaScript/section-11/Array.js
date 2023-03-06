// Array Methods
// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. delete()
// 6. splice()
// 7. slice()
// 8. join()
// 9. sort()
// 10. reverse()
// 11. map
// 12. forEach()
// 13. filter()
// 14. reduce()
// 15. reduceLeft()
// 16. reduceRight()
// 17. every()
// 18. concat()
// 19. find()
// 20. findIndex()
// 21. some()
// 22. include()
// 23. at()

// length 

const arry = ['a', 'b', 'c', 'd', 'e']
// console.log(arry[arry.length - 1])
// console.log(arry.slice(-1)[0])

// console.log(arry.at(-1))
// console.log(arry.at(1))

for (let el of arry) {
    console.log(el)
}

arry.forEach((value, index)=>{
    console.log(index, value)
})