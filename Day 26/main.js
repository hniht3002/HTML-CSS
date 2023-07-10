var pswBtns = document.querySelectorAll(".state");
var reqs = document.querySelectorAll(".req");
var psw = document.querySelector("input");
var state = document.querySelector(".state");

const xmark = '<i class="fa-solid fa-xmark"></i>';
const check = '<i class="fa-solid fa-check"></i>';

const show = '<i class="fa-solid fa-eye"></i>';
const hide = '<i class="fa-solid fa-eye-slash"></i>';

function handleRequirements(reqNumb, reqFunc) {
  if (reqFunc) {
    reqs[reqNumb].childNodes[1].innerHTML = check;
    reqs[reqNumb].childNodes[3].classList.add("done");
  } else {
    reqs[reqNumb].childNodes[1].innerHTML = xmark;
    if (reqs[reqNumb].childNodes[3].classList.contains("done")) {
      reqs[reqNumb].childNodes[3].classList.remove("done");
    }
  }
}

state.addEventListener("click", () => {
  if (psw.getAttribute("type") === "password") {
    psw.setAttribute("type", "text");
    state.innerHTML = show;
  } else if (psw.getAttribute("type") === "text") {
    psw.setAttribute("type", "password");
    state.innerHTML = hide;
  }
});

psw.addEventListener("keyup", (e) => {
  var value = e.target.value;
  handleRequirements(0, checkLowerCase(value));
  handleRequirements(1, checkUpperCase(value));
  handleRequirements(2, checkNumber(value));
  handleRequirements(3, checkSpecial(value));
  handleRequirements(4, leastLength(value));
});

const checkLowerCase = (value) => {
  let length = value.length;

  for (var i = 0; i < length; i++) {
    if (
      97 <= value.charAt(i).charCodeAt() &&
      122 >= value.charAt(i).charCodeAt()
    ) {
      return true;
    }
  }
  return false;
};

const checkUpperCase = (value) => {
  let length = value.length;

  for (var i = 0; i < length; i++) {
    if (
      65 <= value.charAt(i).charCodeAt() &&
      90 >= value.charAt(i).charCodeAt()
    ) {
      return true;
    }
  }
  return false;
};

const checkNumber = (value) => {
  let length = value.length;

  for (var i = 0; i < length; i++) {
    if (
      48 <= +value.charAt(i).charCodeAt() &&
      57 >= +value.charAt(i).charCodeAt()
    ) {
      return true;
    }
  }
  return false;
};

const checkSpecial = (value) => {
  if (!checkLowerCase && !checkUpperCase && !checkNumber) {
    return true;
  }
  let length = value.length;

  for (var i = 0; i < length; i++) {
    if (
      !checkLowerCase(value.charAt(i)) &&
      !checkUpperCase(value.charAt(i)) &&
      !checkNumber(value.charAt(i))
    ) {
      return true;
    }
  }
  return false;
};

const leastLength = (value) => {
  const result = value.length >= 8 ? true : false;
  return result;
};
