 
// jadvall shakillantirish


const oqtuvchi = [
    {
        raqami:"07",
        fani:"Informatika",
        etaj:"01-etaj",
        nomeri:"07-Informatika"
    },

    {
        raqami:"01",
        fani:"Matemetika",
        etaj:"02-etaj",
        nomeri:"01-Matematika"
    },

    {
        raqami:"03",
        fani:"Kimyo",
        etaj:"05-etaj",
        nomeri:"03-kimyo"
    },
    {
        raqami:"09",
        fani:"Tarix",
        etaj:"01-etaj",
        nomeri:"09-tarix"
    },
    {
        raqami:"07",
        fani:"Informatika",
        etaj:"01-etaj",
        nomeri:"07-Informatika"
    },

    {
        raqami:"01",
        fani:"Matemetika",
        etaj:"02-etaj",
        nomeri:"01-Matematika"
    },

    {
        raqami:"03",
        fani:"Kimyo",
        etaj:"05-etaj",
        nomeri:"03-kimyo"
    },
    {
        raqami:"09",
        fani:"Tarix",
        etaj:"01-etaj",
        nomeri:"09-tarix"
    },
    
];


const tableBox = document.getElementById("tableBox");
const tbodyTableBox = tableBox.children[1];

// ?qoshish yani ekranga jadval chiqarish

const JadvalYaratish = (filters = {}) => {
    // tozalash
    tbodyTableBox.innerHTML = "";


    filters.raqami;
    const data = oqtuvchi.filter((t) => t.raqami.includes(filters.raqami || "") || t.fani.includes(filters.raqami || ""))



    data.map((t, i)=> {
     // qator ochish
     const row = document.createElement("tr");
     row.innerHTML += `
     <th>${i + 1}</th>
     <td>${t.raqami}</td>
     <td>${t.fani}</td>
     <td>${t.etaj}</td>
     <td>${t.nomeri}</td>
     <td><button class="dalet" onclick="DeletTable(event)">Dlete</button></td>
     `;
 
     tbodyTableBox.appendChild(row);    
 
});

};
   
// filter yani inputta yozilgan qiymat qolsin bu qisim tepadagi chiqarish bilan birga ishlaydi

const filter = (e) => {
    JadvalYaratish({raqami:e.target.value},{fani:e.target.value})
}

JadvalYaratish();


// o'chirish funksiyasi 

const tbodyId = document.getElementById("tbodyId")
let saqlovchi = "";


const DeletTable = (e) => {
    saqlovchi = tbodyId.innerHTML

    const element = e.target.parentNode;
    const element2 = element.parentNode;
    console.log(element2);
    element2.remove();
}



// bitta ortga qaytarish funksiyasi

const Ortga = () => {
    tbodyId.innerHTML = saqlovchi;  
}

const DaletTable = () => {
    saqlovchi = tbodyId.innerHTML
    tbodyId.innerHTML = "";
}