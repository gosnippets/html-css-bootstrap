// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (sec) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, sec * 1000)
    })
}

const imgContainer = document.querySelector(".images")
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const imgEl = document.createElement("img");
        imgEl.src = imgPath

        imgEl.addEventListener("load", function () {
            imgContainer.append(imgEl)
            resolve(imgEl)
        })

        imgEl.addEventListener("error", function () {
            reject(new Error("Image not found...."))
        })
    })
}

let currentImgEl;

// createImage('./img/img-1.jpg').then((img) => {
//     console.log(img);
//     currentImgEl = img;
//     console.log("Image 1 is loaded")
//     return wait(2)
// }).then(() => {
//     currentImgEl.style.display = "none"
//     return createImage('./img/img-2.jpg')
// }).then((img) => {
//     currentImgEl = img
//     console.log("Image 2 is loaded")
//     return wait(2)
// }).then(() => {
//     currentImgEl.style.display = "none"
// }).catch(error => {
//     console.error(error)
// }).finally(() => {
//     console.log("finally block called")
// })


// PART 1
const loadNPause = async function () {
    try {
        let imgEl = await createImage('./img/img-1.jpgw')
        console.log("loadNPause: Image 1 is loaded")
        await wait(2)
        imgEl.style.display = "none"

        imgEl = await createImage('./img/img-2.jpg')
        console.log("loadNPause: Image 2 is loaded")
        await wait(2)
        imgEl.style.display = "none"
    } catch (error) {
        console.error("Error is ", error)
    }

}

// loadNPause()

// PART 2

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async value => {
            return await createImage(value)
        })

        const imgsEl = await Promise.all(imgs)
        imgsEl.forEach(imgEl => imgEl.classList.add('paralell'))
    } catch (error) {
        console.error(error)
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])