function diminuir() {
    let atual = Number(document.getElementById("counter").innerHTML);
    let result = atual - 1;
    document.getElementById("counter").innerHTML = result;
}

function somar() {
    let atual = Number(document.getElementById("counter").innerHTML);
    let result = atual + 1;
    document.getElementById("counter").innerHTML = result;
}

function resetar() {
    document.getElementById("counter").innerHTML = 0;
}