document.addEventListener('keydown', handle)
document.addEventListener('keydown', fillStatic)

var getAlert = document.querySelector(".alert")
var getBox = document.querySelector(".box")
var getResult = document.querySelector(".above p")
var getKey = document.querySelector(".key .content p")
var getLocation = document.querySelector(".location .content p")
var getWhich = document.querySelector(".which .content p")
var getCode = document.querySelector(".code .content p")

function handle() {
    getAlert.classList.add('hide')
    getBox.classList.remove('hide')
}

function fillStatic(e) {
    getResult.innerText = e.which
    getKey.innerText = e.key
    getLocation.innerText = e.location
    getWhich.innerText = e.which
    getCode.innerText = e.code
}

