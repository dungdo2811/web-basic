const { title } = require("./title");

// hello
console.log("Hello Javascript");
//let có thể thay đổi
//const không thay đổi
let age= 20;
const pi=3.14;

// kiểu dữ liệu 
// String,number,boolean,null,underfined
// kiểm tra kiểu
console.log(typeof age)
//== so sánh lỏng === so sánh nghiêm
if (age >= 18) {
    console.log("Đủ tuổi");
} else {
    console.log("Chưa đủ tuổi");
}
// vòng lặp giống C++
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// function
function sum(a,b){
    return a+b;
}
//Object
let student= {
    name: "John",
    age: 20,
    isMale: true
}
console.log(student.name);
console.log(student.age);
console.log(student.isMale);
//thay đổi
student.age=21;
console.log(student.age);


title.textContent= "Hello Dung";
