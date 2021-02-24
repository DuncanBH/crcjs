function checkUsername(){
    let textFieldUsername       = document.getElementById('username');
    let textFieldErrorUsername  = document.getElementById('errorUsername');

    let username = textFieldUsername.value;

    textFieldErrorUsername.innerText = "*";
    if(!isNaN(username)){
        textFieldErrorUsername.innerText = "* No numbers allowed";
    }
}

function checkNumber(){
    //implement check if is a number
    let textFieldAge        = document.getElementById('age');
    let textFieldErrorAge   = document.getElementById('errorAge');

    let age = textFieldAge.value;
    textFieldErrorAge.innerText = "*";
    
    if(isNaN(age)){
        textFieldErrorAge.innerText = "* Only numbers allowed";
    }
}

(function() {
    let nameBtn = document.getElementById("username");
    nameBtn.addEventListener('change', checkUsername, false);

    let ageBtn = document.getElementById("age");
    ageBtn.addEventListener('change', checkNumber, false);
} 
)();