function lanjutHobi() {
    const namaDepan = document.getElementById("namaDepan").value;
    const namaBelakang = document.getElementById("namaBelakang").value;
    const email = document.getElementById("email").value;
    const jumlah = parseInt(document.getElementById("jumlahHobi").value);

    if (!namaDepan || !namaBelakang || !email || isNaN(jumlah) || jumlah <= 0) {
        alert("Oii isi formnya dulu😒!!!");
        return;
    }
    
    let formInput = "";
    for (let i = 1; i <= jumlah; i++) {
        formInput += `
        <div class="mb-2">
            <label>Hobi ${i}</label>
            <input type="text" class="form-control hobi-input" placeholder="masukkan hobi ${i}">
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
        alert("Jangan kosongin hobimu coy😥!");
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
        alert("pilih satu hobi biar ga didatengin pocong😱");
        return;
    }
    
    const hasil = `
        Hallo, nama saya <strong>${namaDepan} ${namaBelakang}</strong>, dengan email <strong>${email}</strong>,
        saya mempunyai sejumlah <strong>${jumlah}</strong> pilihan hobi yaitu <strong>${dipilih.join(", ")}</strong>, 
        dan saya menyukai <strong>${dipilih.join(", ")}</strong>.
    `;
    
    const hasilEl = document.getElementById("hasilOutput");
    hasilEl.innerHTML = hasil;
    hasilEl.classList.remove("d-none");
    }
    
    function resetForm() {
    document.getElementById("formHobiInput").innerHTML = "";
    document.getElementById("formCheckboxHobi").innerHTML = "";
    document.getElementById("hasilOutput").classList.add("d-none");
    document.getElementById("tugasForm").reset();
    }
    