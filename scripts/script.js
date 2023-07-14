"use strict";
let calcInput1 = document.getElementById(`calculation`);
let calcInput2 = document.getElementById(`calculation2`);
let symbolCalc = document.getElementById(`symbol`);
let calcResult = document.getElementById(`result`);
let floatPointEl = document.getElementById(`floatPoint`);

//buttons

let buttonNumberOne = document.getElementById(`btnOne`);

let numOne = 1;
let numTwo = 2;
let numThree = 3;
let numFour = 4;
let numFive = 5;
let numSix = 6;
let numSeven = 7;
let numEight = 8;
let numNine = 9;
let numZero = 0;
let arg1;
let arg2;
let multiDigits;
let multiDigits2;
let finalResult;

function eraseEverything() {
  document.getElementById(`calculation`).textContent = ``;
  document.getElementById(`calculation2`).textContent = ``;
  document.getElementById(`symbol`).textContent = ``;
  document.getElementById(`changeAlpha`).textContent = `AC`;
  document.getElementById(`result`).textContent = ``;
  calcResult.textContent = ``;
  calcResult.style.fontSize = "";
}
function buttonClick(arg1) {
  document.getElementById(`changeAlpha`).textContent = `AC`;
  multiDigits = document.getElementById("calculation").textContent;
  if (multiDigits === "0") {
    document.getElementById("calculation").textContent = arg1;
  } else {
    document.getElementById("calculation").textContent = multiDigits + arg1;
  }
  console.log(multiDigits);
}

function buttonClick(arg1) {
  document.getElementById("changeAlpha").textContent = "C";
  let multiDigits = document.getElementById("calculation").textContent;
  let multiDigits2 = document.getElementById("calculation2").textContent;

  if (multiDigits === "0") {
    document.getElementById("calculation").textContent = arg1;
    multiDigits = arg1;
  } else if (symbolCalc.textContent === "+") {
    document.getElementById("calculation2").textContent = multiDigits2 + arg1;
    multiDigits2 += arg1;
    calcResult.textContent = Number(multiDigits) + Number(multiDigits2);
  } else if (symbolCalc.textContent === "x") {
    document.getElementById("calculation2").textContent = multiDigits2 + arg1;
    multiDigits2 += arg1;
    calcResult.textContent = Number(multiDigits) * Number(multiDigits2);
  } else if (symbolCalc.textContent === "-") {
    document.getElementById("calculation2").textContent = multiDigits2 + arg1;
    multiDigits2 += arg1;
    calcResult.textContent = Number(multiDigits) - Number(multiDigits2);
  } else if (symbolCalc.textContent === "÷") {
    document.getElementById("calculation2").textContent = multiDigits2 + arg1;
    multiDigits2 += arg1;
    calcResult.textContent = Number(multiDigits) / Number(multiDigits2);
  } else if (symbolCalc.textContent === "%") {
    document.getElementById("calculation2").textContent = multiDigits2 + arg1;
    multiDigits2 += arg1;
    let percentage = Number(multiDigits2) / 100;
    calcResult.textContent = percentage;
  } else {
    document.getElementById("calculation").textContent = multiDigits + arg1;
    multiDigits += arg1;
  }
}

function biggerText() {
  let calcResult = document.getElementById("result");
  finalResult = calcResult.textContent;

  if (!finalResult.startsWith("=")) {
    finalResult = `= ${finalResult}`;
    calcResult.textContent = finalResult;
  }

  calcResult.style.fontSize = "3rem";
}

function additionValue(arg1) {
  document.getElementById(`symbol`).textContent = `+`;
}

function multiplicationValue(arg1) {
  document.getElementById(`symbol`).textContent = `x`;
}

function subtractionValue(arg1) {
  document.getElementById(`symbol`).textContent = `-`;
}

function divisionValue(arg1) {
  document.getElementById(`symbol`).textContent = `÷`;
}

function percentageCalc(arg1) {
  document.getElementById(`symbol`).textContent = `%`;
}

function floatingPoint() {
  let currentInput = calcInput1.textContent;
  let currentInput2 = calcInput2.textContent;

  if (!currentInput.includes(".") && symbolCalc.textContent === "") {
    calcInput1.textContent = currentInput + ".";
  } else if (!currentInput2.includes(".") && symbolCalc.textContent !== "") {
    calcInput2.textContent = currentInput2 + ".";
  }
}

function backSpace() {
  let currentInput1 = calcInput1.textContent;
  let currentInput2 = calcInput2.textContent;

  if (currentInput2 !== "") {
    calcInput2.textContent = currentInput2.slice(0, -1);
    updateResult();
  } else if (symbolCalc.textContent !== "") {
    symbolCalc.textContent = "";
  } else if (currentInput1 !== "") {
    calcInput1.textContent = currentInput1.slice(0, -1);
    updateResult();
  }
}

function updateResult() {
  let multiDigits = calcInput1.textContent;
  let multiDigits2 = calcInput2.textContent;
  let symbol = symbolCalc.textContent;

  if (symbol === "+") {
    calcResult.textContent = Number(multiDigits) + Number(multiDigits2);
  } else if (symbol === "x") {
    calcResult.textContent = Number(multiDigits) * Number(multiDigits2);
  } else if (symbol === "-") {
    calcResult.textContent = Number(multiDigits) - Number(multiDigits2);
  } else if (symbol === "÷") {
    calcResult.textContent = Number(multiDigits) / Number(multiDigits2);
  } else if (symbol === "%") {
    let percentage = Number(multiDigits2) / 100;
    calcResult.textContent = percentage;
  } else {
    calcResult.textContent = "";
  }
}
