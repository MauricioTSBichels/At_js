//alerta do botão sim
function alertYes(){
    alert("Ainda bem que vc tomou a decisão certa!")
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
    
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}