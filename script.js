function lanjutHobi() {
  const namaDepan = document.getElementById("namaDepan").value;
  const namaBelakang = document.getElementById("namaBelakang").value;
  const email = document.getElementById("email").value;
  const jumlah = parseInt(document.getElementById("jumlahHobi").value);

  if (!namaDepan || !namaBelakang || !email || isNaN(jumlah) || jumlah <= 0) {
    alert("❌ SERAM! Jangan asal isi form!! Lengkapi semuanya dengan benar!");
    return;
  }

  let formInput = "";
  for (let i = 1; i <= jumlah; i++) {
    formInput += `
      <div class="mb-2">
        <label>Hobi ${i}</label>
        <input type="text" class="form-control hobi-input" placeholder="Masukkan hobi ${i}">
      </div>`;
  }

  document.getElementById("formHobiInput").innerHTML = formInput;
  document.getElementById("formCheckboxHobi").innerHTML = "";
  document.getElementById("hasilOutput").classList.add("d-none");

  const okButton = document.createElement("button");
  okButton.className = "btn btn-danger mt-3";
  okButton.innerText = "OK";
  okButton.onclick = generateCheckbox;
  document.getElementById("formHobiInput").appendChild(okButton);
}

function generateCheckbox() {
  const hobiInputs = document.querySelectorAll(".hobi-input");
  const values = Array.from(hobiInputs).map(input => input.value.trim()).filter(val => val);

  if (values.length !== hobiInputs.length) {
    alert("😱 Jangan kosongin hobimu, nanti kesurupan!");
    return;
  }

  let checkboxes = "";
  values.forEach((val, index) => {
    checkboxes += `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="${val}" id="hobi${index}">
        <label class="form-check-label" for="hobi${index}">${val}</label>
      </div>`;
  });

  document.getElementById("formCheckboxHobi").innerHTML = checkboxes;

  const okButton = document.createElement("button");
  okButton.className = "btn btn-success mt-3";
  okButton.innerText = "OK";
  okButton.onclick = tampilkanHasil;
  document.getElementById("formCheckboxHobi").appendChild(okButton);
}

function tampilkanHasil() {
  const namaDepan = document.getElementById("namaDepan").value;
  const namaBelakang = document.getElementById("namaBelakang").value;
  const email = document.getElementById("email").value;
  const jumlah = document.getElementById("jumlahHobi").value;
  const dipilih = Array.from(document.querySelectorAll(".form-check-input:checked")).map(cb => cb.value);

  if (dipilih.length === 0) {
    alert("👻 Pilih setidaknya satu hobi, sebelum arwah penasaran datang!");
    return;
  }

  const hasil = `
    Hallo, nama saya <strong>${namaDepan} ${namaBelakang}</strong>, dengan email <strong>${email}</strong>, 
    saya mempunyai sejumlah <strong>${jumlah}</strong> pilihan hobi yaitu 
    <strong>${dipilih.join(", ")}</strong>, dan saya menyukai <strong>${dipilih.join(", ")}</strong>.
  `;

  const hasilEl = document.getElementById("hasilOutput");
  hasilEl.innerHTML = hasil;
  hasilEl.classList.remove("d-none");
}

function lanjutHobi() {
  const jumlah = parseInt(document.getElementById("jumlahHobi").value);
  if (isNaN(jumlah) || jumlah <= 0) {
    alert("Masukkan jumlah hobi yang valid!");
    return;
  }

  const formHobiInput = document.getElementById("formHobiInput");
  formHobiInput.innerHTML = ""; // Bersihkan dulu

  for (let i = 0; i < jumlah; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Hobi ke-${i + 1}`;
    input.className = "form-control my-2";
    formHobiInput.appendChild(input);
  }
}

function handleAll(){
  const jumlahHobi = parseInt(document.getElementById("jumlahHobi").value);
  const hobiInputsAda = document.getElementById("formHobiInput").children.length > 0;
  const checkboxAda = document.getElementById("formCheckboxHobi").children.length > 0;
  if (hobiInputsAda){
    lanjutHobi();
  } else if (!checkboxAda){
    generateCheckbox();
  } else {
    tampilkanHasil();
  }
}
function resetForm() {
  document.getElementById("formHobiInput").innerHTML = "";
  document.getElementById("formCheckboxHobi").innerHTML = "";
  document.getElementById("hasilOutput").classList.add("d-none");
  document.getElementById("namaDepan").value = "";
  document.getElementById("namaBelakang").value = "";
  document.getElementById("email").value = "";
  document.getElementById("jumlahHobi").value = "";
}