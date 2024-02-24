//JSON string
let user=`{
    "name":"kanokwan",
    "age":25,
    "phone":null,
    "status":true
}`
//JSON parse -> JSON string -> js object
console.log(user)
let myObj = JSON.parse(user)
console.log(myObj)