
var Login=document.querySelector("#Login");

function changeButton() {
    // Login.innerText = "Logout"
    if (Login.innerText == "Logout"){
        Login.innerText = "Login"
    }
    else{
        Login.innerText = "Logout"
    }
};

function removeMe(element) {
    element.remove()
}

