//javascript object
let user={
    name:"kanokwan",//string
    age:25,//number
    phone:null,//null
    status:true,//boolean
    getData(){
        console.log(`ชื่อ = ${this.name} , อายุ = ${this.age}`)
    }
}
user.getData()