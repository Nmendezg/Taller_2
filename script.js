var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

var but0 = document.getElementById("butCalc0");
var but1 = document.getElementById("butCalc1");
var but2 = document.getElementById("butCalc2");
var but3 = document.getElementById("butCalc3");
var but4 = document.getElementById("butCalc4");
var but5 = document.getElementById("butCalc5");
var but6 = document.getElementById("butCalc6");
var but7 = document.getElementById("butCalc7");
var but8 = document.getElementById("butCalc8");
var but9 = document.getElementById("butCalc9");
var butEnter = document.getElementById("butEnter");
var butLimp=document.getElementById("butLimp");
var input_sel = "num1";
var butSum = document.getElementById("butSum");
var butRes = document.getElementById("butRes");
var butMul = document.getElementById("butMul");
var butDiv = document.getElementById("butDiv");
var inpRes = document.getElementById("inpRes");


var dig0 = but0.value;
var dig1 = but1.value;
var dig2 = but2.value;
var dig3 = but3.value;
var dig4 = but4.value;
var dig5 = but5.value;
var dig6 = but6.value;
var dig7 = but7.value;
var dig8 = but8.value;
var dig9 = but9.value;
var res = 0;

function escribir(numero) {
    if (input_sel == "num1") {
        num1.value += numero
    } else {
        num2.value += numero
    }
}

function sumar(sum1, sum2) {
    res = parseInt(sum1) + parseInt(sum2);
    return res;

}
function restar(res1, res2) {
    res = parseFloat(res1) - parseFloat(res2);
    return res;

}
function multi(mul1, mul2) {
    res = parseInt(mul1) * parseInt(mul2);
    return res;

}
function divi(div1, div2) {
    if (parseFloat(div2) == 0) {
        alert("no se puede dividir entre cero");
        res = "Indefinido"
    } else {
        res = parseFloat(div1) / parseFloat(div2);
        return res;
    }

}

butEnter.addEventListener("click", function () {
    if (input_sel == "num1") {
        input_sel = "num2"
    } else {
        input_sel = "num1"
    }
})


butSum.addEventListener("click", function () {
    res = sumar(parseInt(num1.value), parseInt(num2.value));

    inpRes.value = res;

})

butRes.addEventListener("click", function () {
    res = restar(parseFloat(num1.value), parseFloat(num2.value));
    inpRes.value = res;
})

butMul.addEventListener("click", function () {
    res = multi(parseInt(num1.value), parseInt(num2.value))
    inpRes.value = res;
})

butDiv.addEventListener("click", function () {
    res = divi(parseFloat(num1.value), parseFloat(num2.value))
    inpRes.value = res;
})

but0.addEventListener("click", function () {
    escribir(dig0);
})
but1.addEventListener("click", function () {
    escribir(dig1)
})
but2.addEventListener("click", function () {
    escribir(dig2)
})
but3.addEventListener("click", function () {
    escribir(dig3)
})
but4.addEventListener("click", function () {
    escribir(dig4)
})
but5.addEventListener("click", function () {
    escribir(dig5)
})
but6.addEventListener("click", function () {
    escribir(dig6)
})
but7.addEventListener("click", function () {
    escribir(dig7)
})
but8.addEventListener("click", function () {
    escribir(dig8)
})
but9.addEventListener("click", function () {
    escribir(dig9)
})

butLimp.addEventListener("click",function(){
    num1.value="";
    num2.value="";
    inpRes.value="";
})
//
//

var text=document.getElementById("text");
var minText=document.getElementById("minText");
var mayusText=document.getElementById("mayusText");
var carText=document.getElementById("carText");
var inpText=document.getElementById("inpText");
var butLimp2=document.getElementById("butLimp2");
var res2="";

function mayus(txt){
    res2=txt.toUpperCase();
    return res2;
}
function minus(txt){
    res2=txt.toLowerCase();
    return res2;
}
function caracteres(txt){
    res2=txt.length
    return res2;
}

mayusText.addEventListener("click",function(){
    mayus(text.value);
    text.value=res2;
})
minText.addEventListener("click",function(){
    minus(text.value);
    text.value=res2;
})
carText.addEventListener("click",function(){
    caracteres(text.value);
    inpText.value=parseInt(res2);
})

butLimp2.addEventListener("click",function(){
    text.value="";
    inpText.value="";
})
