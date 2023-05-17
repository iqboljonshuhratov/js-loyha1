const loaded = () => console.log("sahifa yuklandi");
const sidebar = document.getElementById("fixed");
const d1 = document.getElementById("d1")
const ozgar = document.getElementById("ozgar")
const imgid = document.getElementById("imgid")
const contentid = document.getElementById("contentid")
const header1 = document.getElementById("header1")



const dark1 = document.getElementById("dark1")
let bool = true
dark1.onclick = function () {
    
    header1.classList.toggle("headerr2")
    header1.classList.toggle("headerr1")




    contentid.classList.toggle("content")
    contentid.classList.toggle("content2")
    imgid.src = bool?"./rasmar/kun.jpg":"./rasmar/tun.png"
    bool = !bool
}


const keyUp = (e) => {
    if(e.key == "Escape") sidebar.classList.add("hide");

}

const  toggle = () => {
if(sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
else sidebar.classList.add("hide");
}
// bolimlarni shakillantirish
const sections = [
{title:"O'qtuvchilar", link:"./oqtuvchilar.html"},
{title:"O'quvchilar", link:"./oqtuvchilar.html"},
{title:"xodimlar", link:"./xodimlar.html"},
{title:"fanlar", link:"./fanlar.html"},
{title:"xonalar", link:"./xonalar.html"},
{title:"dars jadvallari", link:"./dars.html"},
];


const setD1 = () => {
    d1.innerHTML = "";
    sections.map((sections) => {
        console.log(sections);
        // const col = document.createElement("div");
        // col.className = "container";

        const box1 = document.createElement("div")
        box1.className = "box"

        const links = document.createElement("a")
        links.href = sections.link;
        links.innerHTML = sections.title;
        box1.appendChild(links);
        d1.appendChild(box1);
        
    });
};


setD1();
































// for (const card1 of d1.children) {
//     card1.ondblclick = () => {
//         console.log(card1.innerHTML);
//         ozgar.innerHTML = card1.innerHTML
//     }
// }
