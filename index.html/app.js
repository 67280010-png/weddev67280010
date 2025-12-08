/* ------- รุ่นแต่ละยี่ห้อ ------- */
const models = {
  iphone: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"],
  samsung: ["Galaxy S20", "Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy S24"]
};

/* เติมรุ่น */
document.getElementById("estBrand").addEventListener("change", function () {
  const brand = this.value;
  const modelSelect = document.getElementById("estModel");
  modelSelect.innerHTML = "<option value=''>-- เลือกรุ่น --</option>";

  if (models[brand]) {
    models[brand].forEach(m => {
      modelSelect.innerHTML += `<option>${m}</option>`;
    });
  }
});

/* ------- ระบบประเมินราคา ------- */
function estimatePrice() {
  const brand = document.getElementById("estBrand").value;
  const model = document.getElementById("estModel").value;
  const condition = document.getElementById("estCondition").value;

  if (!brand || !model) {
    alert("กรุณาเลือกยี่ห้อและรุ่น");
    return;
  }

  let base =
    brand === "iphone" ? 9000 :
    brand === "samsung" ? 6000 : 0;

  let bonus = Math.floor(Math.random() * 4000);

  if (condition === "like_new") base += 2000;
  if (condition === "good") base += 1000;
  if (condition === "normal") base += 0;
  if (condition === "broken") base -= 3000;

  const price = base + bonus;

  document.getElementById("priceBox").innerHTML =
    `💙 ประเมินราคา: <br><b>${price.toLocaleString()} บาท</b>`;
}

/* ------- ฟอร์มส่งข้อมูล ------- */
document.getElementById("sellForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("ส่งข้อมูลสำเร็จ! ทางร้านจะติดต่อกลับเร็วที่สุด 💙");
});
