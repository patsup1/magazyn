var list = document.getElementById("myList");
var jsonString =
  '[{"id": 1,"img": "https://img.freepik.com/premium-wektory/otwarta-ksiazka-do-czytania-recznie-rysowane-symbol_599395-224.jpg?w=2000", "name": "Książka", "purchase price": 11.95,"price": 39.99,"quantity": 15,"delivery": {"last_delivery": "10/02/2022","next_delivery": "26/01/2023"},"description": "...","brand": "Marka","category": "Dom"},{"id": 2, "img": "https://cdn-img.neonet.pl/eyJidWNrZXQiOiJodHRwczovL2Nkbi5uZW9uZXQucGwiLCJrZXkiOiJrYXJ0eS9wbGlraS96ZGplY2lhLzVBL2tvbXB1dGVyLWxjby1wcm8tNDExNS1yeXplbi01LTM2MDAtcHJvLTE2Z2ItNTEyZ2Itc3NkLXJ0eC0zMDYwLXdpbmRvd3MxMC0zNjY1MDRmMV8yMDIxMTIwM19QUk0xREVQSC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjgwfSwicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwid2lkdGgiOjI1MCwiaGVpZ2h0IjoyNTB9fX0=/komputer-lco-pro-4115-ryzen-5-3600-pro-16gb-512gb-ssd-rtx-3060-windows10-366504f1_20211203_PRM1DEPH.jpg","name": "Komputer", "purchase price": 11.95,"price": 1999.99, "quantity": 5,"delivery": {"last_delivery": "10/02/2022","next_delivery": "25/01/2023"},"description": "...","brand": "Marka","category": "Dom"},{"id": 3, "img": "https://cdn-img.neonet.pl/eyJidWNrZXQiOiJodHRwczovL2Nkbi5uZW9uZXQucGwiLCJrZXkiOiJrYXJ0eS9wbGlraS96ZGplY2lhLzVBL2tvbXB1dGVyLWxjby1wcm8tNDExNS1yeXplbi01LTM2MDAtcHJvLTE2Z2ItNTEyZ2Itc3NkLXJ0eC0zMDYwLXdpbmRvd3MxMC0zNjY1MDRmMV8yMDIxMTIwM19QUk0xREVQSC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjgwfSwicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwid2lkdGgiOjI1MCwiaGVpZ2h0IjoyNTB9fX0=/komputer-lco-pro-4115-ryzen-5-3600-pro-16gb-512gb-ssd-rtx-3060-windows10-366504f1_20211203_PRM1DEPH.jpg","name": "Komputer", "purchase price": 11.95,"price": 1999.99, "quantity": 5,"delivery": {"last_delivery": "10/02/2022","next_delivery": "25/01/2023"},"description": "...","brand": "Marka","category": "Dom"}]';

var data = JSON.parse(jsonString);

data.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.textContent = "Pokaż więcej";
  img.src = item.img;
  a.textContent = item.name;
  li.classList.add("list-group-item");
  li.appendChild(img);
  li.appendChild(a);
  li.appendChild(button);
  list.appendChild(li);
  button.addEventListener("click", function () {
    location.href = "opis.html?id=" + item.id;
  });
});
