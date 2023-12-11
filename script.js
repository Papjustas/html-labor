
function atnaujintiLaika() {

    var laikas = new Date();


    var valandos = laikas.getHours();
    var minutes = laikas.getMinutes();
    var sekundes = laikas.getSeconds();


    valandos = valandos < 10 ? "0" + valandos : valandos;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    sekundes = sekundes < 10 ? "0" + sekundes : sekundes;


    var laikoFormatas = valandos + ":" + minutes + ":" + sekundes;


    var laikrodzioElementas = document.getElementById("laikrodis");


    laikrodzioElementas.innerHTML = laikoFormatas;
}


setInterval(atnaujintiLaika, 1000);


atnaujintiLaika();
