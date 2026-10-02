
function aa(n) {
    document.getElementById("x").value += n;
}

function bb() {
    let ans = document.getElementById("x").value;

    document.getElementById("x").value = eval(ans);
}

function clearDisplay() {
    document.getElementById("x").value = "";
}

