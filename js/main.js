let takeInputs = document.querySelectorAll("input#userName , input#middleName , input#lastName") ;

takeInputs.forEach((input) => {
    input.setAttribute("maxlength","20");
})








































/* let nameValue , passValue , access = "pass" , deny = "<span style = 'color:red;text-transform:capitalize;'>try again</span>"
document.title = "Javascript Admin Page";
let takeInput = document.getElementById("name");
let takeMessage = document.getElementById("wrongMessage");

takeInput.onfocus = function () {
    let getValue = takeInput.value;
    if ( getValue === "") {
        takeMessage.innerHTML = "Enter a valid admin name";
        takeMessage.style.color = "red";
        takeInput.style = "border:1px solid red";        
} else if ( getValue.length <= "4"){
    takeMessage.innerHTML = "Weak name";
    takeMessage.style.color = "red";
    takeInput.style = "border: 1px solid red"; 
} else {
    takeMessage.innerHTML = "Strong name";
    takeMessage.style.color = "green";
    takeInput.style = "border: 1px solid green";      
} }

    takeInput.oninput = function () { 
    let getValue = takeInput.value;
    if ( getValue === "" || getValue.startsWith(" ") ) {
        takeMessage.innerHTML = "Enter a valid admin name";
        takeMessage.style.color = "red";
        takeInput.style = "border:1px solid red";
    } else if ( getValue.length <= "4"){
        takeMessage.innerHTML = "Weak name";
        takeMessage.style.color = "red";
        takeInput.style = "border: 1px solid red"; 

    } else {
        takeMessage.innerHTML = "Strong name";
        takeMessage.style.color = "green";
        takeInput.style = "border: 1px solid green";
    
    }
    }
    takeInput.onblur = function () {
        takeMessage.innerHTML = "";
        takeInput.style = "border: 1px solid black "; 
    }

document.getElementById("btn").onclick = function (event) {

    nameValue = document.getElementById("name").value ;
    passValue = document.getElementById("pass").value ;

    if ( nameValue === "zana" && passValue === "ThunderboltForEver" ) {
        window.open("https://thunderboltforever.github.io/Template-Three/");
        document.getElementById("name").value = "";
        document.getElementById("pass").value = "";
    } else {
        document.getElementById("wrongMessage").innerHTML = deny ;
        event.preventDefault();
    }
}
 */