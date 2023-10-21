function doDisplay(val) {
    document.getElementById('result').value += val;
    document.getElementById('result').innerHTML = val;
    return val;
}

function doClear() {
    document.getElementById('result').value = "";
    
}

function doSolve() {

    let x = document.getElementById('result').value;
    let y = eval(x);

    document.getElementById('result').value = y;

    return y;
    
}