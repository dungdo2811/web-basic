// json 
let student= {
    name: "John",
    age: 20,
    isMale: true
}

const data= JSON.stringify(student); // chuyển object sang json
let data2= JSON.parse(data); // chuyển json sang object;
console.log(data,typeof data);
console.log(data2,typeof data2);