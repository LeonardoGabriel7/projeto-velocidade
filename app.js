function calcular() {
    var txtv = window.document.getElementById('txtvel');
    var res = window.document.querySelector('div#res');
    var vel = Number(txtv.value);

    res.innerHTML = `<p>Sua velocidade atual é de ${vel} km/h</p>`;
    if (vel > 60){
        res.innerHTML += '<p>Você esta multado por exesso de velocidade</p>'
    } 

    else{
        res.innerHTML += '<p>Parabéns, você não excedeu a velocidade</p>'
    }
}