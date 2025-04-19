window.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let container = document.querySelector(".tables");
  
    orders.forEach((e) => {

        let h1 = document.createElement("h1");
        h1.className = "form";
        h1.textContent = `Order Date: ${e.date}`;
        container.appendChild(h1);

      let table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>BestSeller</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
  
      let tbody = table.querySelector("tbody");
      e.items.forEach(item => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.code}</td>
          <td>${item.name}</td>
          <td>${item.det}</td>
          <td>${item.qnt}</td>
          <td>${item.price}$</td>
          <td>${item.best}</td>
        `;
        tbody.appendChild(tr);
      });
  
      container.appendChild(table);
    });
  });
  