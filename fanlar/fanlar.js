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
{title:"Fizika", link:"./fanlarga_biriktirilgan/fizika.html"},
{title:"Algebra", link:"../fanlarga_biriktirilgan/algebra.html"},
{title:"Jismoniy tarbiya", link:"./fanlarga_biriktirilgan/index.html"},
{title:"Kimyo", link:"./fanlarga_biriktirilgan/kimyo.html"},
{title:"Xuquq", link:"./fanlarga_biriktirilgan/xuquq.html"},
{title:"Geometrya", link:"./fanlarga_biriktirilgan/geometrya.html"},
{title:"Geografiya", link:"./fanlarga_biriktirilgan/geografiya.html"},
{title:"Ona tili", link:"./fanlarga_biriktirilgan/ona.html"},
{title:"Adabiyot", link:"./fanlarga_biriktirilgan/adabiyot.html"},
];


const setD1 = (filters = {}) => {
    d1.innerHTML = "";


    filters.title;
    const saralash = sections.filter((t) => t.title.includes(filters.title || ""));

    saralash.map((sections) => {
        // console.log(sections);
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


const filter = (e) => {
    setD1({title:e.target.value})
}


setD1();
































// for (const card1 of d1.children) {
//     card1.ondblclick = () => {
//         console.log(card1.innerHTML);
//         ozgar.innerHTML = card1.innerHTML
//     }
// }
