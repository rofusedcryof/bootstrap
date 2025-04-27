function tampilkanHobi() {
    let hasil = document.getElementById("hasil");
    hasil.innerHTML = "";

    let hobi = [];
    for (let i = 1; i <= 4; i++) {
        let input = document.getElementById("hobi" + i).value.trim();
        if (input) hobi.push(input);
    }

    hobi.forEach(function(item) {
        let div = document.createElement("div");
        div.innerHTML = `<input type="checkbox"> ${item}`;
        hasil.appendChild(div);
    });

    return false;
}
