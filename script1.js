function comprar() {

    let vestidos = Number(document.getElementById("vestidos").value);
    let blusas = Number(document.getElementById("blusas").value);
    let pantalones = Number(document.getElementById("pantalones").value);
    let bolsas = Number(document.getElementById("bolsas").value);

    let precioVestidos = 450;
    let precioBlusas = 250;
    let precioPantalones = 350;
    let precioBolsas = 380;

    let totalVestidos = vestidos * precioVestidos;
    let totalBlusas = blusas * precioBlusas;
    let totalPantalones = pantalones * precioPantalones;
    let totalBolsas = bolsas * precioBolsas;

    let cantidad = vestidos + blusas + pantalones + bolsas;

    let total = totalVestidos + totalBlusas + totalPantalones + totalBolsas;

    document.getElementById("resultado").innerHTML =
        "<h2>RESUMEN DE COMPRA</h2>" +
        "<p>Vestidos: " + vestidos + "</p>" +
        "<p>Blusas: " + blusas + "</p>" +
        "<p>Pantalones: " + pantalones + "</p>" +
        "<p>Bolsas: " + bolsas + "</p>" +
        "<h3>Total de prendas: " + cantidad + "</h3>" +
        "<h2>Total a pagar: $" + total + "</h2>";

}