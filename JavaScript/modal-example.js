let btnEls = document.querySelectorAll(".btn-modal");
for(let btnEl of btnEls) {
    console.log(btnEl)
    btnEl.addEventListener("click", function(){
        toggleModal();
    })
}
 
document.querySelector(".close").addEventListener("click", function(){
    toggleModal();
})

let modalEl = document.querySelector(".modal");

function toggleModal(){
    if(modalEl.style.display === "block") {
        modalEl.style.display = "none";
    }else {
        modalEl.style.display = "block";
    }
    document.querySelector(".modal-content").classList.toggle("show");
}


// form 
// input-name
// input-email 
// button- Submit

// card show(name, email)
// card show(name, email)
