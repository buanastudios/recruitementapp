let allData=[];

fetch(API_URL)
.then(r=>r.json())
.then(data=>{

allData=data;
render(data);

});

function render(data){

let html="";

data.forEach(x=>{

html+=`
<a
href="detail.html?id=${x.ID}"
class="block bg-white p-4 rounded-xl mb-3">

<div class="font-bold">
${x.Nama}
</div>

<div class="text-sm text-gray-500">
${x.Posisi}
</div>

<div class="mt-2">
${x.Status}
</div>

</a>
`;

});

document.getElementById("list").innerHTML=html;

}

document
.getElementById("search")
.addEventListener("keyup",(e)=>{

let keyword=e.target.value.toLowerCase();

let filtered=
allData.filter(x=>
x.Nama.toLowerCase()
.includes(keyword)
);

render(filtered);

});