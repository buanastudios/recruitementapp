const params =
new URLSearchParams(
window.location.search
);

const id =
params.get("id");

fetch(API_URL)
.then(r=>r.json())
.then(data=>{

let c=
data.find(x=>x.ID===id);

document
.getElementById("detail")
.innerHTML=
`
<div class="bg-white p-4 rounded-xl">

<h1 class="text-2xl font-bold">
${c.Nama}
</h1>

<div class="mt-4">
Posisi:
${c.Posisi}
</div>

<div>
Status:
${c.Status}
</div>

<div>
HP:
${c.HP}
</div>

<div>
Tanggal Lamaran:
${c.TanggalLamaran}
</div>

</div>
`;

});