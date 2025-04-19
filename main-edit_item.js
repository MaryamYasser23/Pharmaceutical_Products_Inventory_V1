

window.addEventListener("DOMContentLoaded", function (e) {
    let code = localStorage.getItem("editCode");
    let cat = localStorage.getItem("editCat");

    let items = JSON.parse(localStorage.getItem("items")) || [];
    let itemToEdit = items.find(item => (item.code === code && item.cat === cat));

    if (itemToEdit) {
        document.querySelector('[name="Code"]').value = itemToEdit.code;
        document.querySelector('[name="Code"]').readOnly = true;
        document.querySelector('[name="Name"]').value = itemToEdit.name;
        document.querySelector('[name="Details"]').value = itemToEdit.det;
        document.querySelector('[name="Quantity"]').value = itemToEdit.qnt;
        document.querySelector('[name="Price"]').value = itemToEdit.price;
        document.querySelector('[name="Category"]').value = itemToEdit.cat;
        document.querySelector('[name="Category"]').readOnly = true;
        document.querySelector('[name="BestSeller"]').checked = itemToEdit.best;
    }
});

document.addEventListener("click",function(e){
    if (e.target.className === "save-btn") {
        let codeToEdit = localStorage.getItem("editCode");
        let catToEdit = localStorage.getItem("editCat");

        let items = JSON.parse(localStorage.getItem("items")) || [];

        let updatedItems = items.filter(item => !(item.code === codeToEdit && item.cat === catToEdit));

        let code = document.querySelector('[name="Code"]').value;
        let name = document.querySelector('[name="Name"]').value;
        let det = document.querySelector('[name="Details"]').value;
        let qnt = document.querySelector('[name="Quantity"]').value;
        let price = document.querySelector('[name="Price"]').value;
        let cat = document.querySelector('[name="Category"]').value;
        let best = document.querySelector('[name="BestSeller"]').checked ? "Yes" : "No";  
        updatedItems.push({ code, name, det, qnt, price, cat, best });
        
        localStorage.setItem("items", JSON.stringify(updatedItems));

        localStorage.removeItem("editCode");
        localStorage.removeItem("editCat");
        window.location.href = "index.html";
        }
});