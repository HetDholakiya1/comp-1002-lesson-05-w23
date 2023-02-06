const items = document.querySelectorAll(".price");
const total = document.querySelector("#total");

let sum = 0;
for (const item of items) {
  sum = sum + (item.textContent);
}

total.textContent = sum;