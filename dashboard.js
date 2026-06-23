fetch(API_URL)
.then(r => r.json())
.then(data => {

document.getElementById("total").innerText =
data.length;

document.getElementById("proceed").innerText =
data.filter(x => x.Status==="Proceed").length;

document.getElementById("interview").innerText =
data.filter(x => x.Status==="Interview").length;

document.getElementById("rejected").innerText =
data.filter(x => x.Status==="Rejected").length;

});