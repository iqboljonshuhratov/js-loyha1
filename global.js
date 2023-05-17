const loaded = () => console.log("sahifa yuklandi");
const sidebar = document.getElementById("fixed");
const d1 = document.getElementById("d1")
const ozgar = document.getElementById("ozgar")
const dark1 = document.getElementById("dark1")
const imgid = document.getElementById("imgid")
const contentid = document.getElementById("contentid")
const header1 = document.getElementById("header1")
const body = document.getElementById('B')




let bool = true
dark1.onclick = function () {
    
    header1.classList.toggle("headerr2")
    header1.classList.toggle("headerr1")




    contentid.classList.toggle("content")
    contentid.classList.toggle("content2")
    imgid.src = bool?"./rasmar/kun.jpg":"./rasmar/tun.png";
    body.style.background = bool?'black':'white';
    bool = !bool
}


const keyUp = (e) => {
    if(e.key == "Escape") sidebar.classList.add("hide");

}

const  toggle = () => {
if(sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
else sidebar.classList.add("hide");
}





