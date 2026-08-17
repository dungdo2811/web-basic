//DOM
//Java script có thể thao tác với HTML thông qua DOM
let title = document.getElementById("title");

title.style.color = "red";

// tạo tương tác alert tạo cửa sổ nhấn ok để qua
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     alert("mày click tao rồi đấy");
// });
// input 
let input = document.getElementById("name");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    console.log(input.value);
});