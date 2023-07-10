const output = document.querySelector(".output");
const lengthRef = document.querySelector(".length input");
const length = lengthRef.value;
const uppercase = document.querySelector(".uppercase input");
const lowercase = document.querySelector(".lowercase input");
const numbers = document.querySelector(".numbers input");
const symbols = document.querySelector(".symbols input");
const generate = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy-btn");

function randomAscii(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

let uppercaseArr = new Array(lengthRef.value);
let lowercaseArr = new Array(lengthRef.value);
let numbersArr = new Array(lengthRef.value);
let symbolsArr = [
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61,
  62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126,
];

let psw = "";
lengthRef.value = 20;

[uppercase, lowercase, numbers, symbols].forEach((el) => {
  el.addEventListener("click", (e) => {
    if (el.value === "on") {
      el.setAttribute("value", "off");
    } else {
      el.setAttribute("value", "on");
    }
  });
});

generate.addEventListener("click", () => {
  if (lengthRef.value > 20 || lengthRef.value < 4) {
    alert("Length should be greater than 4 and less than 20");
  } else {
    generateArray(uppercase, uppercaseArr, 65, 90);
    generateArray(lowercase, lowercaseArr, 97, 122);
    generateArray(numbers, numbersArr, 48, 57);

    pass = generatePsw();

    console.log(lengthRef.value);
    output.innerHTML = pass;
  }
});

getLength();

copyBtn.addEventListener("click", () => {
  copy();
});

function getLength() {
  lengthRef.addEventListener("keyup", (e) => {
    let numb = e.target.value;
    if (4 <= numb && numb >= 20) {
      lengthRef.value = numb;
      console.log(numb);
    }
  });
}
function generateArray(state, arr, start, end) {
  if (state.value == "on") {
    for (let i = 0; i < lengthRef.value; i++) {
      arr[i] = randomAscii(start, end);
    }
  }
}

function generatePsw() {
  let totalArr = [];
  let pass = [];
  let hasSetting = false;

  let psw = "";
  if (uppercase.value === "on") {
    totalArr = [...totalArr, uppercaseArr];
    hasSetting = true;
  }
  if (lowercase.value === "on") {
    totalArr = [...totalArr, lowercaseArr];
    hasSetting = true;
  }
  if (numbers.value === "on") {
    totalArr = [...totalArr, numbersArr];
    hasSetting = true;
  }
  if (symbols.value === "on") {
    totalArr = [...totalArr, symbolsArr];
    hasSetting = true;
  }

  if (hasSetting) {
    for (var i = 0; i < lengthRef.value; i++) {
      var charGroup = randomAscii(0, totalArr.length - 1);
      var charIndex = randomAscii(0, totalArr[charGroup].length - 1);

      pass[i] = totalArr[charGroup][charIndex];
    }

    pass.forEach((ascii) => {
      psw += String.fromCharCode(ascii);
    });
  } else {
    psw = "";
  }
  return psw;
}

const copy = async () => {
  try {
    await navigator.clipboard.writeText(output.innerHTML);
    alert("Copied");
  } catch (err) {
    alert("Failed to copy: ", err);
  }
};
