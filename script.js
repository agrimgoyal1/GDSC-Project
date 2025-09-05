
function showSignup() {
    document.getElementById("signinBox").style.display="none"
    document.getElementById("signupBox").style.display="block"
}

function showSignin() {
    document.getElementById("signupBox").style.display="none"
    document.getElementById("signinBox").style.display="block"
}
let username1 = "agrimgoyal5"
let password1 = "Agrim"
let usernamedb = ""
let passworddb = ""
function register() {
    usernamedb = document.getElementById("username").value;
    passworddb = document.getElementById("password").value;
    if (usernamedb === "" || passworddb === "") {
        alert("You have not entered anything")
    }else{
        alert("Your account has been created");
        showSignin();
    }
        
}
function checkuser() {
    let usernameus = document.getElementById("checkus").value;
    let passowrdus = document.getElementById("checkpass").value;
    
    if (usernameus === "" || passowrdus === "") {
        alert("You have not entered anything.")
    }else if(usernameus === username1 && passowrdus === password1) {
        alert("You have successfully logged in")
        window.open("home/index.html","_self")
        localStorage.setItem("isloggedin" , "true")
    }else if (usernameus === usernamedb && passowrdus === passworddb) {
        window.open("home/index.html","_self")
    }else if (usernameus !== usernamedb || usernameus !== username1){
        alert("Incorrect Username")
    }else if (passowrdus !== passworddb || passowrdus !== password1) {
        alert("Password is incorrect")
    }else if (usernameus === "" || passowrdus === "") {
        alert("You have not entered anything")
    }
}

