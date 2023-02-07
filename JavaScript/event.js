 function onLoadFunc(text){
   console.log(text)
 }

 function onChangeHandler(elm){
    document.getElementById("showname").innerHTML = elm.value;
 }

 function onFocusHandler(el){
    el.style.backgroundColor= "red";
 }

 function onSelecthandler(element) {
    console.log(element)
    element.style.color= "red";
    document.getElementById("showname").innerHTML = element.value;
 }

 function onSubmitHandler() {
    console.log("onSubmitHandler")
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value

    document.getElementById("showname").innerHTML ="Name : "+ name+ ", Age : "+age;
 }

//  Todo
// input
// submit

// list