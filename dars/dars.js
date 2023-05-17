 
// jadvall shakillantirish


const oqtuvchi = [
    {
        kuni:"Dushanba",
        dars3:"Matematika",
        dars4:"Informatika",
        dars5:"Xuquq",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },

    {
        kuni:"Seshanba",
        dars3:"kimyo",
        dars4:"Informatika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },

    {
        kuni:"Chorshanba",
        dars3:"Ma'naviyat",
        dars4:"Informatika",
        dars5:"Biologiya",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },
    {
        kuni:"Payshanba",
        dars3:"kimyo",
        dars4:"Matematika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },
    {
        kuni:"Juma",
        dars3:"kimyo",
        dars4:"Fizika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"Algebra",
    },

    {
        kuni:"Shanba",
        dars3:"kimyo",
        dars4:"Informatika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"********",
    },

];

// ikkinchi jadvall uchun matn


const oqtuvchi2 = [
    {
        kuni:"Dushanba",
        dars3:"Matematika",
        dars4:"Informatika",
        dars5:"Xuquq",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },

    {
        kuni:"Seshanba",
        dars3:"kimyo",
        dars4:"Informatika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },

    {
        kuni:"Chorshanba",
        dars3:"Ma'naviyat",
        dars4:"Informatika",
        dars5:"Biologiya",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },
    {
        kuni:"Payshanba",
        dars3:"kimyo",
        dars4:"Matematika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"Ona tili",
    },
    {
        kuni:"Juma",
        dars3:"kimyo",
        dars4:"Fizika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"Algebra",
    },

    {
        kuni:"Shanba",
        dars3:"kimyo",
        dars4:"Informatika",
        dars5:"Adabiyot",
        dars1:"Jismoniy tarbiya",
        dars2:"********",
    },

];

// ////////////
// jadvallni ikkkiga ajiratilayotggan jarayonlar

const tableBox = document.getElementById("tableBox");
const tableBox2 = document.getElementById("tableBox2");
const tbodyTableBox = tableBox.children[1];
const tbodyTableBox2 = tableBox2.children[1];

// ?qoshish yani ekranga jadval chiqarish

const JadvalYaratish = (filters = {}) => {
    // tozalash
    tbodyTableBox.innerHTML = "";


    filters.kuni;
    const data = oqtuvchi.filter((t) => t.kuni.includes(filters.kuni || "") || t.dars3.includes(filters.kuni || ""))



    data.map((t, i)=> {
     // qator ochish
     const row = document.createElement("tr");
     row.innerHTML += `
     <th>${i + 1}</th>
     <td>${t.kuni}</td>
     <td>${t.dars3}</td>
     <td>${t.dars4}</td>
     <td>${t.dars5}</td>
     <td>${t.dars1}</td>
     <td>${t.dars2}</td>
     `;
 
     tbodyTableBox.appendChild(row);

});

};


// ikkinchi jadval


const JadvalYaratish2 = (filters = {}) => {
    // tozalash
    tbodyTableBox2.innerHTML = "";


    filters.kuni;
    const data = oqtuvchi2.filter((t) => t.kuni.includes(filters.kuni || "") || t.dars3.includes(filters.kuni || ""))



    data.map((t, i)=> {
     // qator ochish
     const row = document.createElement("tr");
     row.innerHTML += `
     <th>${i + 1}</th>
     <td>${t.kuni}</td>
     <td>${t.dars3}</td>
     <td>${t.dars4}</td>
     <td>${t.dars5}</td>
     <td>${t.dars1}</td>
     <td>${t.dars2}</td>
     `;
    //  <td><button class="dalet" onclick="DeletTable(event)">Delete</button></td>
 
     tbodyTableBox2.appendChild(row);    
 
});

};

JadvalYaratish2();


// filter yani inputta yozilgan qiymat qolsin bu qisim tepadagi chiqarish bilan birga ishlaydi

const filter = (e) => {
    // console.log(e.target.value);
    JadvalYaratish({kuni:e.target.value}, {dars3:e.target.value})
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