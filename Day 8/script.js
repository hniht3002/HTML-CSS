
var getInputName = document.querySelector("#input-name");
var getInputEmail = document.querySelector("#input-email");
var getInputPassword = document.querySelector("#input-password");
var getInputConfirmPassword = document.querySelector("#input-confirm-password");
var getFormControl = document.querySelector(".form-control");
var getNameMessage = document.querySelector(".name-message");
var getEmailMessage = document.querySelector(".email-message");
var getPasswordMessage = document.querySelector(".password-message");
var getPasswordConfirmMessage = document.querySelector(".password-confirm-message");

var getHidePassword = document.querySelectorAll(".hide")

var getUnderline = document.querySelectorAll(".input-wrapper span")



function hideShowPassword(element) {
    element.forEach(function(item) {
        item.onclick = function() {
            item.classList.toggle("active");
    
            if (item.classList.contains("active")){
                item.parentElement.querySelector("input").setAttribute("type","text")
            } else {
                item.parentElement.querySelector("input").setAttribute("type","password")
        
            }
        }
    })
}

function preventDefault(element){
    element.addEventListener("submit", (function (e) {
        e.preventDefault()
    }));
}

function checkEmptyAll() {
    function checkEmpty(element, messageElement, message) {
        if (element.value.length == 0) {
            messageElement.textContent = message;
            messageElement.classList.add("error")
        }
    }
    checkEmpty(getInputName, getNameMessage, "Username is required")
    checkEmpty(getInputEmail, getEmailMessage, "Email is required")
    checkEmpty(getInputPassword, getPasswordMessage, "Password is required")
    checkEmpty(getInputConfirmPassword, getPasswordConfirmMessage, "Password2 is required")
}

function deactiveEmpty() {
    function checkNotEmpty(element, messageElement, message) {
        if (element.value.length > 0) {
            messageElement.textContent = message;
            messageElement.classList.remove("error")
        }
    }


    checkNotEmpty(getInputName, getNameMessage, "")
    checkNotEmpty(getInputEmail, getEmailMessage, "")
    checkNotEmpty(getInputPassword, getPasswordMessage, "")
    checkNotEmpty(getInputConfirmPassword, getPasswordConfirmMessage, "")
}

function checkConfirmPassword() {
    if (getInputConfirmPassword.value != getInputPassword.value) {
        getPasswordConfirmMessage.textContent = "Password does not match"
        getPasswordConfirmMessage.classList.add("error")
        getInputConfirmPassword.focus()
    }
}

function checkPassWord() {
    if (getInputPassword.value.length < 7) {
        getPasswordMessage.textContent = "Password must be at least 6 characters"
        getPasswordMessage.classList.add("error")
    }
}

function checkUserName() {
    if(getInputName.value.length < 6) {
        getNameMessage.textContent = "Username must be at least 5 characters"
        getNameMessage.classList.add("error")
    }
}

function completedCheck() {

    var getErrors = document.querySelectorAll(".input-wrapper small")
    const hasError = Array.from(getErrors).some(function(item) {
        return item.classList.contains("error")
    })
    
    if (!hasError) {
        getUnderline.forEach(function(item) {
            item.style = "width: 100%"
        })
    }

}

function onCheck() {
    preventDefault(getFormControl)
    checkEmptyAll()
    deactiveEmpty()
    hideShowPassword(getHidePassword)
    checkUserName()
    checkPassWord()
    checkConfirmPassword()
    completedCheck()
}

