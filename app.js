class Meals {
  constructor(iname, mid, price, size, dis, exp, catagory,qty) {
    this.iname = iname;
    this.mid = mid;
    this.price = price;
    this.size = size;
    this.dis = dis;
    this.exp = exp;
    this.catagory=catagory;
    this.qty=qty;
  }
}
class Order {
  constructor(name, mID, qty, dis, price, total,) {
    this.name = name;
    this.mID = mID;
    this.qty = qty;
    this.dis = dis;
    this.price=price;
    this.total = total;
  }
}


class Cart {
  constructor(oID, cID, orders, total) {
    this.oID = oID || getOID();
    this.cID = cID;
    this.orders = orders;
    this.total = total;
  }
}

class Customer {
     constructor(mobile, name, address) {
       this.mobile = mobile;
       this.name = name;
       this.address = address;
     }
   }

// localStorage.setItem("Orders", JSON.stringify([]));



const meals = [
  new Meals("Classic Burger", "B1001", 750.00, "Large", "", "",1, 10),
  new Meals("Classic Burger", "B1002", 600.00, "Regular", "", "",1, 10),
  new Meals("Turkey Burger", "B1003", 1600.00, "", "15", "",1, 10),
  new Meals("Chicken Burger", "B1004", 1400.00, "Large", "", "",1, ""),
  new Meals("Chicken Burger", "B1005", 800.00, "Regular", "", "",1, ""),
  new Meals("Cheese Burger", "B1006", 1000.00, "Large", "20", "",1, ""),
  new Meals("Cheese Burger", "B1007", 600.00, "Regular", "", "",1, ""),
  new Meals("Bacon Burger", "B1008", 650.00, "", "", "",1, ""),
  new Meals("Shawarma Burger", "B1009", 800.00, "", "15", "",1, ""),
  new Meals("Olive Burger", "B1010", 1800.00, "", "", "",1, ""),
  new Meals("Double-Cheese Burger", "B1012", 1250.00, "Large", "20", "",1, ""),
  new Meals("Crispy Chicken Burger (Regular)", "B1013", 1200.00, "Regular", "", "",1, ""),
  new Meals("Crispy Chicken Burger (Large)", "B1014", 1600.00, "Large", "10", "",1, ""),
  new Meals("Paneer Burger", "B1015", 900.00, "", "", "",1, ""),
  new Meals("Crispy Chicken Submarine", "B1016", 2000.00, "Large", "", "", 2, ""),
  new Meals("Crispy Chicken Submarine", "B1017", 1500.00, "Regular", "", "", 2, ""),
  new Meals("Chicken Submarine", "B1018", 1800.00, "Large", "3", "", 2,""),
  new Meals("Chicken Submarine", "B1019", 1400.00, "Regular", "", "", 2,""),
  new Meals("Grinder Submarine", "B1020", 2300.00, "", "", "", 2,""),
  new Meals("Cheese Submarine", "B1021", 2200.00, "", "", "", 2,""),
  new Meals("Double Cheese n Chicken Submarine", "B1022", 1900.00, "", "16", "", 2,""),
  new Meals("Special Horgie Submarine", "B1023", 2800.00, "", "", "", 2,""),
  new Meals("MOS Special Submarine", "B1024", 3000.00, "", "", "", 2,""),
  new Meals("Steak Fries", "B1025", 1200.00, "Large", "", "", 3,""),
  new Meals("Steak Fries", "B1026", 600.00, "Medium", "", "", 3,""),
  new Meals("French Fries", "B1027", 800.00, "Large", "", "", 3,""),
  new Meals("French Fries", "B1028", 650.00, "Medium", "", "", 3,""),
  new Meals("French Fries", "B1029", 450.00, "Small", "", "", 3,""),
  new Meals("Sweet Potato Fries", "B1030", 600.00, "Large", "", "", 3,""),
  new Meals("Chicken n Cheese Pasta", "B1031", 1600.00, "", "15", "", 4,""),
  new Meals("Chicken Penne Pasta", "B1032", 1700.00, "", "", "", 4,""),
  new Meals("Ground Turkey Pasta Bake", "B1033", 2900.00, "", "10", "", 4,""),
  new Meals("Creamy Shrimp Pasta", "B1034", 2000.00, "", "", "", 4,""),
  new Meals("Lemon Butter Pasta", "B1035", 1950.00, "", "", "", 4,""),
  new Meals("Tagliatelle Pasta", "B1036", 2400.00, "", "1", "", 4,""),
  new Meals("Baked Ravioli", "B1037", 2000.00, "", "1", "", 4,""),
  new Meals("Fried Chicken", "B1038", 1200.00, "Small", "", "", 5,""),
  new Meals("Fried Chicken", "B1039", 2300.00, "Regular", "", "", 5,""),
  new Meals("Fried Chicken", "B1040", 3100.00, "Large", "10", "", 5,""),
  new Meals("Hot Wings", "B1041", 2400.00, "Large", "5", "", 5,""),
  new Meals("Devilled Chicken", "B1042", 900.00, "Large", "", "", 5,""),
  new Meals("BBQ Chicken", "B1043", 2100.00, "Regular", "", "", 5,""),
  new Meals("Pepsi", "B1044", 990.00, "330ml", "", "", 6,""),
  new Meals("Coca-Cola", "B1045", 1230.00, "330ml", "5", "", 6,""),
  new Meals("Sprite", "B1046", 1500.00, "330ml", "", "", 6,""),
  new Meals("Mirinda", "B1047", 850.00, "330ml", "7", "", 6,"")
];

if (!localStorage.getItem("meals")) {
  localStorage.setItem("meals", JSON.stringify(meals));
}

function toggleDiv() {
  const div = document.getElementById("popupDiv");
  div.style.display = (div.style.display === "none" || div.style.display === "") ? "block" : "none";
}

const item = meals.find(m => m.mid === "B1012");
if (item) {
  console.log("Name:", item.iname);
  console.log("Price:", item.price);
  console.log("Discount:", item.dis || "No Discount");
  console.log("Size",item.size);
}

function getCategoryName(category) {
        switch (category) {
        case 1: return "Burger";
        case 2: return "Submarine";
        case 3: return "Fries";
        case 4: return "Pasta";
        case 5: return "Chicken";
        case 6: return "Beverages";
        default: return "Unknown";
    }
}

function getQProgressBarClass(value) {
  if (value < 4) {
    return 'bg-danger';
  } else if (value > 7) {
    return 'bg-success';
  } else {
    return 'bg-warning';
  }
}
function getQProgressTextClass(value) {
  if (value < 4) {
    return 'text-danger';
  } else if (value > 7) {
    return 'text-success';
  } else {
    return 'text-warning';
  }
}
function getEProgressBarClass(value) {
  if (value < 10) {
    return 'bg-danger';
  } else if (value > 20) {
    return 'bg-success';
  } else {
    return 'bg-warning';
  }
}
function getEProgressTextClass(value) {
  if (value < 10) {
    return 'text-danger';
  } else if (value > 20) {
    return 'text-success';
  } else {
    return 'text-warning';
  }
}

function getImage(category){
    switch (category) {
    case 1: return "img/icons/burger.jpg";
    case 2: return "img/icons/submarine.jpg";
    case 3: return "img/icons/frice.jpg";
    case 4: return "img/icons/pasta.jpg";
    case 5: return "img/icons/chicken.jpg";
    case 6: return "img/icons/drinks.jpg";
    // default: return "img/covers/all.jpg";
  }
}

function storeOID(){

}

function getOID() {
  let lastOID = localStorage.getItem("lastOID");

  if (!lastOID) {
    lastOID = 0;
  }

  const newOID = String(++lastOID).padStart(4, '0');

  localStorage.setItem("lastOID", lastOID);

  return newOID;
}


function getOrders() {
  let odlocal = JSON.parse(localStorage.getItem("Orders")) || [];
  return odlocal;
}


function placeOrder(btn) {
  const row = btn.closest("tr");
  const name = row.cells[0].innerText.trim();
  const mID = row.cells[1].innerText.trim();
  const qty = parseInt(row.querySelector("#quantity").value) || 0;
  const disText = row.cells[4].innerText.trim();
  const dis = disText.replace("% off", "") || "0";
  const priceText = row.cells[3].innerText.replace("Rs", "").trim();
  const price = parseFloat(priceText);
  const total = price * qty * (1 - parseFloat(dis) / 100);

  const newOrder = new Order(name, mID, qty, dis, price, total.toFixed(2));
  //console.log(newOrder);
  addToCart(newOrder);
}

if (!window.cart) {
  window.cart = [];
}

// function addToCart(OrderOb){
//   window.cart.push(OrderOb);
//   console.log("Item added to cart:", OrderOb);
//   console.log("Current cart:", window.cart);
//   updateCartDisplay();
// }

function addToCart(orderOb) {
  if (!window.cart) window.cart = [];
  window.cart.push(orderOb);
  localStorage.setItem("cart", JSON.stringify(window.cart));

  //console.log("Cart saved:", window.cart);
showOrders();
}

function checkOrders(){
  copyCartToOrders()
  clearCart()
  showOrders();
}

function loadCart() {
  const table = document.getElementById("cartTableId");

  // Load cart from localStorage
  const savedCart = localStorage.getItem("cart");
  window.cart = savedCart ? JSON.parse(savedCart) : [];

  // Clear existing tbody if present
  const oldTbody = table.querySelector("tbody");
  if (oldTbody) oldTbody.remove();

  const tbody = document.createElement("tbody");

  window.cart.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.mID}</td>
      <td>Rs ${item.price}</td>
      <td>${item.dis || "0"}%</td>
      <td>${item.qty}</td>
      <td>${item.qty*item.price}</td>
    `;

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

function clearCart() {
  localStorage.removeItem("cart"); // Remove from local storage
  window.cart = []; // Clear in-memory cart
  //loadCart(); // Refresh the UI table
  // endLoadpage()
}

function copyCartToOrders() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cID=document.getElementById(getMobile);

  const total = cart.reduce((sum, item) => sum + (item.total || 0), 0);

  const NOrder = new Cart(getOID(), "C123", cart, 1000);

  const orders = JSON.parse(localStorage.getItem("Orders")) || [];

  orders.push(NOrder);

  localStorage.setItem("Orders", JSON.stringify(orders));
}



function clickedCheckOut(){
  const cart = new Cart(getOID(), "C123", getOrders(), total);

  copyCartToOrders();
  clearCart();
   showOrders();
   endLoadpage();
}

function endLoadpage(){
  window.parent.location.href = "OderEndingPage.html";
}

function checkCustomer(){
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  let cid = document.getElementById("customerName").value;

  customers.forEach((item) => {
    if(item.cID==cid){
      document.getElementById("customerName").value = item.cname;
      document.getElementById("address").value = item.add;
      document.getElementById("addBtn").disabled = true;
    }
    else{
      showDangerAlert();
      document.getElementById("addBtn").disabled = false;
    }
  })
}


function addCustomer() {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  let cname = document.getElementById("getMobile").value;
  let cid = document.getElementById("customerName").value;
  let add = document.getElementById("address").value;

  let customer = new Customer(cname, cid, add);

  customers.push(customer);

  localStorage.setItem("customers", JSON.stringify(customers));

  console.log(customer);
}



function showOrders(){
  const orders = JSON.parse(localStorage.getItem("Orders")) || [];
  console.log(orders);
  console.log(JSON.parse(localStorage.getItem("cart")));
}


function displayCart(dataArray){ 

    const table = document.getElementById("cartTableId");

     meals.forEach((item) => {
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.mid}</td>
            <td>${item.name}</td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    });
}



function loadAllData(){ 
    const table = document.getElementById("yourTableId"); // Replace with actual table ID

    const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

     mealsFromLOcal.forEach((item) => {
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src=${getImage(item.catagory)} width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
                <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""} onclick="placeOrder(this)">
                  <i class="bi bi-bag-plus-fill"></i> Add
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    });
}

function loadBurgerData(dataArray){

  const table = document.getElementById("yourTableId");
  
  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(item.catagory==1){
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src="../${getImage(item.catagory)}" width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
              <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""}>
                <i class="bi bi-bag-plus-fill"></i> Add
              </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    }
  });

}

function loadSubmarineData(dataArray){

  const table = document.getElementById("yourTableId");
  
  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(item.catagory==2){
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src="../${getImage(item.catagory)}" width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
              <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""}>
                <i class="bi bi-bag-plus-fill"></i> Add
              </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    }
  });

}

function loadFriesData(dataArray){

  const table = document.getElementById("yourTableId");
  
  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(item.catagory==3){
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src="../${getImage(item.catagory)}" width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
              <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""}>
                <i class="bi bi-bag-plus-fill"></i> Add
              </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    }
  });

}

function loadPastaData(dataArray){

  const table = document.getElementById("yourTableId");
  
  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(item.catagory==4){
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src="../${getImage(item.catagory)}" width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
              <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""}>
                <i class="bi bi-bag-plus-fill"></i> Add
              </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    }
  });

}

function loadChickenData(dataArray){

  const table = document.getElementById("yourTableId");
  
  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(item.catagory==5){
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src="../${getImage(item.catagory)}" width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
              <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""}>
                <i class="bi bi-bag-plus-fill"></i> Add
              </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    }
  });

}

function loadBeveragesData(dataArray){

  const table = document.getElementById("yourTableId");
  
  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(item.catagory==6){
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src="../${getImage(item.catagory)}" width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
            <td>
                <div class="input-group m-3" style="max-width: 60px;">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="decrement()">-</button> -->
                    <input type="number" id="quantity" class="form-control text-center" value="1" min="0">
                    <!-- <button class="btn btn-outline-secondary" type="button" onclick="increment()">+</button> -->
                </div>
            </td>
            <td>
              <button type="button" class="btn btn-warning"${item.qty == 0 ? "disabled" : ""}>
                <i class="bi bi-bag-plus-fill"></i> Add
              </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger"><i class="bi bi-bookmark-x"></i></button>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
    }
  });

}

function viewStore(){
  const table = document.getElementById("yourTableId"); // Replace with actual table ID

    const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

     mealsFromLOcal.forEach((item) => {
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        console.log(item.exp*4.166666666666667);

        row.innerHTML = `
            <td><img src=${getImage(item.catagory)} width="30" class="rounded me-2">${item.iname} ${item.size}</td>
            <td>${item.mid}</td>
            <td><span class="badge bg-secondary">${getCategoryName(item.catagory)}</span></td>
            <td>Rs${item.price}</td>
            <td>${item.dis || "0"}% off</td>
            <td>
                <span class="${getQProgressTextClass(item.qty)} fw-bold">${item.qty || "0"}units</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getQProgressBarClass(item.qty)}" style="width: ${item.qty*10}%"></div>
                </div>
            </td>
            <td>
                <span class="${getEProgressTextClass(item.exp)} fw-bold">${item.exp || "0"}H left</span>
                <div class="progress" role="progressbar">
                    <div class="progress-bar ${getEProgressBarClass(item.exp)}" style="width: ${item.exp*4.166666666666667}%"></div>
                </div>
            </td>
        `;

        tbody.appendChild(row);
        table.appendChild(tbody);
        const mealsa = JSON.parse(localStorage.getItem("meals")) || [];
  console.log(mealsa)
    });
}

let lastPID = "B1047";

function generateNewProductID(currentPID) {
    const prefix = currentPID.slice(0, 1); // 'B'
    const number = parseInt(currentPID.slice(1)) + 1; // 1048
    const newID = prefix + number.toString().padStart(4, '0'); // 'B1048'
    return newID;
}

function updatePID() {
    lastPID = generateNewProductID(lastPID);
    return lastPID;
}

function clickedADDp(){;
  showSuccessAlert()
    const newID = updatePID();
  console.log(newID);
  const name =document.getElementById("getName").value;
  //const ID = document.getElementById("showProductID").value;
  const Price = document.getElementById("getPrice").value;
  const size = document.getElementById("getSize").value;
  const dis = parseInt(document.getElementById("getDis").value) || 0;
  const exp = document.getElementById("getExp").textContent;
  const catagory = document.getElementById("getCatagory").value;
  const qty = parseInt(document.getElementById("getQty").value) || 0;

  const newMeal= new Meals(name, newID, Price, size, dis, exp, catagory, qty)

  let meals = JSON.parse(localStorage.getItem("meals")) || [];

  meals.push(newMeal);

  localStorage.setItem("meals", JSON.stringify(meals));

  const mealsS = JSON.parse(localStorage.getItem("meals")) || [];
  console.log(mealsS);
}

function displayPID() {
    document.getElementById("showProductID").value = updatePID();
  }

function productSearch(){
  const searchValue = document.getElementById("searchBox").value;

  const mealsFromLOcal = JSON.parse(localStorage.getItem("meals")) || [];

  mealsFromLOcal.forEach((item) => {
    if(searchValue==item.mid){
        console.log(item.iname,item.mid);

        document.getElementById("showName").value = item.iname;
        document.getElementById("getOrShowPrice").value = item.price;
        document.getElementById("showSize").value = item.size;
        document.getElementById("getOrShowDis").value = item.dis;
        document.getElementById("showExp").textContent = item.exp;
        document.getElementById("showCatagory").value = item.catagory;
        document.getElementById("getorShowQty").value = item.qty;
        updateImage(item.catagory)
    }
  });
}

function updateImage(value) {
  const img = document.getElementById("previewImage");
  img.src = getImage(Number(value));
  console.log(value)
}

function clickUpdateP(){
  showSuccessAlert()
  const searchValue = document.getElementById("searchBox").value;
  Delete();
  const name =document.getElementById("showName").value;
  //const ID = document.getElementById("showProductID").value;
  const Price = document.getElementById("getOrShowPrice").value;
  const size = document.getElementById("showSize").value;
  const dis = parseInt(document.getElementById("getOrShowDis").value) || 0;
  const exp = document.getElementById("showExp").textContent;
  const catagory = document.getElementById("showCatagory").value;
  const qty = parseInt(document.getElementById("getorShowQty").value) || 0;

  const newMeal= new Meals(name, searchValue, Price, size, dis, exp, catagory, qty)

  let meals = JSON.parse(localStorage.getItem("meals")) || [];

  meals.push(newMeal);

  localStorage.setItem("meals", JSON.stringify(meals));

  const mealsS = JSON.parse(localStorage.getItem("meals")) || [];

  showSuccessAlert()
  console.log(mealsS);
}

function Delete(){
  showDangerAlert()
  const searchValue = document.getElementById("searchBox").value;

  const meals = JSON.parse(localStorage.getItem("meals")) || [];

  const updatedMeals = meals.filter(item => item.mid !== searchValue);

  localStorage.setItem("meals", JSON.stringify(updatedMeals));

}

function showSuccessAlert() {
  const alert = document.getElementById("successAlert");
  alert.classList.remove("d-none");

  setTimeout(() => {
    alert.classList.add("d-none");
  }, 5000);
}

function showDangerAlert() {
  const alert = document.getElementById("dangerAlert");
  alert.classList.remove("d-none");

  setTimeout(() => {
    alert.classList.add("d-none");
  }, 5000);
}

