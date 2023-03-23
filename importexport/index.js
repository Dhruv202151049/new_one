//ab iss file m wo cheezein import karni h so
//sabse pehle likhne ka,
// "const D_file = require("address_D")",  where D => Domain file
// whenever want to call rhe function
// D.fn_name();

// const operator = require("./operator");

// console.log(operator.add(9,6));
// console.log(operator.sub(9,6));

// ab agar wo D file har jagah ni likhan 
//ho toh aise bhi kar sakte hain
//{add,sub} = reqquire("address of D_file")

const {add, sub} = require("./operator");
console.log(add(9,5));
console.log(sub(9,5));