document.getElementById("first").addEventListener("click", function(){
    $("#Text").append("Yeah, you clicked me")
});
document.getElementById("second").addEventListener("click", function() {
    document.querySelector("#first").innerHTML = "New Text"
});
document.getElementById("third").addEventListener("click", function(){
    first.style.backgroundColor = "red"
});

const txt1 = document.getElementById("color");
const btn1 = document.getElementById("submit");

function fun1() {
    third.style.backgroundColor = txt1.value;
}
btn1.addEventListener("click",fun1);

/*function fun2() {
    console.log("Clicked");
    submit.disabled = true;
}
function fun1() {
    console.log("Clicked");
    btn1.removeEventListener("click", fun1);
}*/

var data = 0;
document.getElementById("output1").innerText = data;
const btn2 = document.getElementById("count");
btn2.addEventListener("click",increase);


function increase () {
    data = data + 1;
    document.getElementById("output1").innerText = data;
}
const btn3 = document.getElementById("decount");
btn3.addEventListener("click",decrease);
function decrease () {
    data = data - 1;
    document.getElementById("output1").innerText = data;
}