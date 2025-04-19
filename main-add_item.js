

document.addEventListener("click",function(e){
    if (e.target.className === "send-btn") {

        let code = document.querySelector('[name="Code"]').value;
        let name = document.querySelector('[name="Name"]').value;
        let det = document.querySelector('[name="Details"]').value;
        let qnt = document.querySelector('[name="Quantity"]').value;
        let price = document.querySelector('[name="Price"]').value;
        let cat = document.querySelector('[name="Category"]').value;
        let best = document.querySelector('[name="BestSeller"]').checked;

        if(best){
            best = "Yes";
        }else{
            best = "No";
        }

        let item = {
            code, name, det, qnt, price, cat, best
        };
          
        let items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));

        window.location.href = "index.html";
      }
});


