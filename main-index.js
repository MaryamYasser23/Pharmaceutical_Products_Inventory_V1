
document.addEventListener("click",function(e){
    if (e.target.className === "add-btn") {
        window.location.href = "add_item.html";
      }
});

document.addEventListener("click",function(e){
  if (e.target.className === "edit-btn") {
    localStorage.setItem("editCode", e.target.dataset.code);
    localStorage.setItem("editCat", e.target.dataset.cat);
    window.location.href = "edit_item.html";
  }
});

document.addEventListener("click",function(e){
  if (e.target.className === "del-btn") {
    let codeToDelete = e.target.dataset.code; 
    let catToDelete = e.target.dataset.cat;

    let items = JSON.parse(localStorage.getItem("items")) || [];

    let updatedItems = items.filter(item => !(item.code === codeToDelete && item.cat === catToDelete));

    localStorage.setItem("items", JSON.stringify(updatedItems));

    }
});

document.addEventListener("click",function(e){
  if (e.target.className === "last-btn") {
      window.location.href = "last_orders.html";
    }
});

document.addEventListener("click",function(e){
  if (e.target.className === "send-order") {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    let orders  = JSON.parse(localStorage.getItem("orders")) || [];

    let order = {
      date: new Date().toLocaleString(),
      items: items.filter(item => item.cat === "tbody-need")
    };

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
    let updatedItems = items.filter(item => item.cat !== "tbody-need");
    localStorage.setItem("items", JSON.stringify(updatedItems));

    window.location.reload();
  }
});

window.addEventListener("DOMContentLoaded", function () {

  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach((item) => {

    let el = document.querySelector(`.${item.cat}`);

    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.code}</td>
      <td>${item.name}</td>
      <td>${item.det}</td>
      <td>${item.qnt}</td>
      <td>${item.price}$</td>
      <td>${item.best}</td>
      <td><button class="edit-btn" data-code="${item.code}" data-cat="${item.cat}">Edit</button> <button class="del-btn" data-code="${item.code}" data-cat="${item.cat}">Delete</button></td>
    `;
    el.append(tr);
  });
});
















