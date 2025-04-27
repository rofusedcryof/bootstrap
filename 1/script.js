
function buatInputHobi() {
    const jumlah = parseInt(document.getElementById('jumlahHobi').value);
    const container = document.getElementById('daftarHobi');
    container.innerHTML = '';
    for (let i = 0; i < jumlah; i++) {
        container.innerHTML += `
            <div class="mb-2">
                <label>Pilihan ${i + 1}:</label>
                <input type="text" class="form-control" id="hobi${i}">
            </div>`;
    }
    container.innerHTML += '<button type="button" class="btn btn-success mt-2" onclick="tampilkanCheckbox()">OK</button>';
}

function tampilkanCheckbox() {
    const jumlah = parseInt(document.getElementById('jumlahHobi').value);
    const container = document.getElementById('daftarHobi');
    let checkboxHTML = '';
    for (let i = 0; i < jumlah; i++) {
        const val = document.getElementById(`hobi${i}`).value;
        checkboxHTML += `<div><input type="checkbox" name="hobiPilihan" value="${val}"> ${val}</div>`;
    }
    checkboxHTML += `<button class="btn btn-warning mt-2" onclick="tampilkanHasil()">OK</button>`;
    container.innerHTML = checkboxHTML;
}

function tampilkanHasil() {
    const nama = document.getElementById('namaDepan').value;
    const email = document.getElementById('email').value;
    const jumlah = document.getElementById('jumlahHobi').value;
    const hobiElements = document.getElementsByName('hobiPilihan');
    let semuaHobi = [], disukai = [];
    for (let ele of hobiElements) {
        semuaHobi.push(ele.value);
        if (ele.checked) disukai.push(ele.value);
    }
    const hasil = `Hallo, nama saya ${nama}, dengan email ${email}, saya mempunyai sejumlah ${jumlah} pilihan hobi yaitu ${semuaHobi.join(", ")}, dan saya menyukai ${disukai.join(", ")}`;
    document.getElementById('hasil').innerHTML = `<div class="alert alert-info mt-3">${hasil}</div>`;
}
