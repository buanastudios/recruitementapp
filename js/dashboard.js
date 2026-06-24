fetch(API_URL)
.then(r => r.json())
.then(data => {

```
document.getElementById("total").innerText =
    data.length;

document.getElementById("review").innerText =
    data.filter(x =>
        x.Status === "Next Phase" ||
        x.Status === "Interview" ||
        x.Status === "Proceed"
    ).length;

const recent =
    data.slice(0,5);

let html = "";

recent.forEach(c => {

    html += `
    <a href="detail.html?id=${c.ID}"
       class="block bg-white rounded-xl p-4 mb-3 shadow-sm">

        <div class="font-semibold">
            ${c.Nama}
        </div>

        <div class="text-sm text-gray-500">
            ${c.Posisi}
        </div>

        <div class="mt-2">

            <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">

                ${c.Status}

            </span>

        </div>

    </a>
    `;

});

document.getElementById("recentCandidates").innerHTML =
    html;
```

});
