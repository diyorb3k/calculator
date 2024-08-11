"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const Addbtn = document.getElementById("Add");
const SubBtn = document.getElementById("sub");
const MultBtn = document.getElementById("Mult");
const Divide = document.getElementById("Divide");
const printResult = document.getElementById("result");
function AddNumbers() {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a + b;
    printResult.textContent = result.toString();
    number1.value = "";
    number2.value = "";
}
Addbtn.addEventListener("click", AddNumbers);
function SubtractNumbers() {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a - b;
    printResult.textContent = result.toString();
    number1.value = "";
    number2.value = "";
}
SubBtn.addEventListener("click", SubtractNumbers);
function MultiplyNumbers() {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a * b;
    printResult.textContent = result.toString();
    number1.value = "";
    number2.value = "";
}
MultBtn.addEventListener("click", MultiplyNumbers);
function DivideNumbers() {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a / b;
    printResult.textContent = result.toString();
    number1.value = "";
    number2.value = "";
}
Divide.addEventListener("click", DivideNumbers);
