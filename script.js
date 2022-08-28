const dark=document.querySelector(".dark")
const night=document.querySelector(".night")
const light=document.querySelector(".light")
const sidebar=document.querySelector(".sidebar")
const activelist=document.querySelector(".list-item.active")
dark.addEventListener("click", ()=>{
    sidebar.className="sidebar"
    activelist.className="list-item active"
})
night.addEventListener("click", ()=>{
    sidebar.className="sidebar night"
    activelist.className="list-item night active"
})
light.addEventListener("click", ()=>{
    sidebar.className="sidebar light"
    activelist.className="list-item light active"
})