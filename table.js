var product = document.getElementById("product");
var jsonString =
  '[{"id": 1,"img": "https://img.freepik.com/premium-wektory/otwarta-ksiazka-do-czytania-recznie-rysowane-symbol_599395-224.jpg?w=2000", "name": "Książka","price": 39.99,"quantity": 15},{"id": 2, "img": "https://cdn-img.neonet.pl/eyJidWNrZXQiOiJodHRwczovL2Nkbi5uZW9uZXQucGwiLCJrZXkiOiJrYXJ0eS9wbGlraS96ZGplY2lhLzVBL2tvbXB1dGVyLWxjby1wcm8tNDExNS1yeXplbi01LTM2MDAtcHJvLTE2Z2ItNTEyZ2Itc3NkLXJ0eC0zMDYwLXdpbmRvd3MxMC0zNjY1MDRmMV8yMDIxMTIwM19QUk0xREVQSC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjgwfSwicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwid2lkdGgiOjI1MCwiaGVpZ2h0IjoyNTB9fX0=/komputer-lco-pro-4115-ryzen-5-3600-pro-16gb-512gb-ssd-rtx-3060-windows10-366504f1_20211203_PRM1DEPH.jpg","name": "Komputer","price": 1999.99, "quantity": 5},{"id": 3, "img": "https://cdn-img.neonet.pl/eyJidWNrZXQiOiJodHRwczovL2Nkbi5uZW9uZXQucGwiLCJrZXkiOiJrYXJ0eS9wbGlraS96ZGplY2lhLzVBL2tvbXB1dGVyLWxjby1wcm8tNDExNS1yeXplbi01LTM2MDAtcHJvLTE2Z2ItNTEyZ2Itc3NkLXJ0eC0zMDYwLXdpbmRvd3MxMC0zNjY1MDRmMV8yMDIxMTIwM19QUk0xREVQSC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjgwfSwicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwid2lkdGgiOjI1MCwiaGVpZ2h0IjoyNTB9fX0=/komputer-lco-pro-4115-ryzen-5-3600-pro-16gb-512gb-ssd-rtx-3060-windows10-366504f1_20211203_PRM1DEPH.jpg","name": "Komputer","price": 1999.99, "quantity": 5}]';

var data = JSON.parse(jsonString);

// Pobierz nagłówki tabeli z pierwszego obiektu w tablicy
var tableHeaders = Object.keys(data[0]);

// Utwórz element tabeli
var table = document.createElement("table");
table.classList.add("table");

// Utwórz nagłówek tabeli
var tableHead = document.createElement("thead");
var trHead = document.createElement("tr");
tableHeaders.forEach(function (header) {
  var th = document.createElement("th");
  th.innerHTML = header;
  trHead.appendChild(th);
});
tableHead.appendChild(trHead);
table.appendChild(tableHead);

// Utwórz ciało tabeli
var tableBody = document.createElement("tbody");
data.forEach(function (item) {
  var trBody = document.createElement("tr");
  tableHeaders.forEach(function (header) {
    var td = document.createElement("td");
    if (header === "img") {
      var img = document.createElement("img");
      img.src = item[header];
      img.style.width = "100px";
      td.appendChild(img);
    } else {
      td.innerHTML = item[header];
    }
    trBody.appendChild(td);
  });
  tableBody.appendChild(trBody);
});
table.appendChild(tableBody);

// Wstaw tabelę do kontenera
product.appendChild(table);
