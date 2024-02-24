//ดึงข้อมูลจากไฟล์ user.json ไปแสดงผล
const list = document.getElementById("list")

let output=''
// fetch("user.json")
// .then(res=>res.json())
// .then(json=>{
//     json.user.forEach(item=>{
//         output+="<li>"+item.name+"</li>"
//     })
//     list.innerHTML=output
// }).catch(err=>{
//     console.log(err)
// })

//async / await
async function getUser(){
    const res = await fetch("user.json")
    const json = await res.json()
    json.user.forEach(item=>{
        output+="<li>"+item.name+"</li>"
    })
    list.innerHTML=output
}
getUser()