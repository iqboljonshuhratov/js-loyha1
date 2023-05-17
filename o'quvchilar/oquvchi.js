 
// jadvall shakillantirish


const oqtuvchi = [
    {
        ismi:"Iqboljon",
        Familyasi:"Shuhratov",
        sinf:"7-'A'",
        nomeri:"+998 94 066 40 60"
    },

    {
        ismi:"Inomjon",
        Familyasi:"Shuhratov",
        sinf:"7-'A'",
        nomeri:"+998 94 066 40 60"
    },

    {
        ismi:"Muhammadqodir",
        Familyasi:"Isomiddinov",
        sinf:"7-'A'",
        nomeri:"+998 94 066 40 60"
    },
    {
        ismi:"Bobur",
        Familyasi:"Sobirov",
        sinf:"7-'B'",
        nomeri:"+998 94 066 40 60"
    },
    {
        ismi:"Iqboljon",
        Familyasi:"Shuhratov",
        sinf:"7-'A'",
        nomeri:"+998 94 066 40 60"
    },

    {
        ismi:"Inomjon",
        Familyasi:"Shuhratov",
        sinf:"7-'A'",
        nomeri:"+998 94 066 40 60"
    },

    {
        ismi:"Muhammadqodir",
        Familyasi:"Isomiddinov",
        sinf:"7-'A'",
        nomeri:"+998 94 066 40 60"
    },
    {
        ismi:"Bobur",
        Familyasi:"Sobirov",
        sinf:"7-'B'",
        nomeri:"+998 94 066 40 60"
    },
    
];


const tableBox = document.getElementById("tableBox");
const tbodyTableBox = tableBox.children[1];

// ?qoshish yani ekranga jadval chiqarish

const JadvalYaratish = (filters = {}) => {
    // tozalash
    tbodyTableBox.innerHTML = "";


    filters.ismi;
    const data = oqtuvchi.filter((t) => t.ismi.includes(filters.ismi || "") || t.Familyasi.includes(filters.ismi || ""))



    data.map((t, i)=> {
     // qator ochish
     const row = document.createElement("tr");
     row.innerHTML += `
     <th>${i + 1}</th>
     <td>${t.ismi}</td>
     <td>${t.Familyasi}</td>
     <td>${t.sinf}</td>
     <td>${t.nomeri}</td>
     <td><button class="dalet" onclick="DeletTable(event)">Delete</button></td>
     `;
 
     tbodyTableBox.appendChild(row);    
 
});

};
   
// filter yani inputta yozilgan qiymat qolsin bu qisim tepadagi chiqarish bilan birga ishlaydi

const filter = (e) => {
    // console.log(e.target.value);
    JadvalYaratish({ismi:e.target.value}, {Familyasi:e.target.value})
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