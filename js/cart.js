//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let items  = []
    let cantidades = []
    let moneda = true
document.addEventListener("DOMContentLoaded", function(e){
    
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(resultobj=>
    {if(resultobj.status==='ok')
    {items=resultobj.data.articles;
    obtenercantidadIniciales();
    showitems();}})
});

function  showitems(){

    let htmlContentToAppend = "";
       
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        if(moneda === true){
            
            if(item.currency ==='UYU'){
                htmlContentToAppend += `<tr> <td><img src="${item.src}" height=200 width=250> </td> <td>${item.name} </td> <td><input  class="actualizar"type="number" min="1" onchange='actualizarcantidad();' value="${cantidades[i]}"></td> <td> ${item.currency} ${item.unitCost} </td> <td>${cantidades[i]*item.unitCost}</td> </tr>`   
            } else {
                htmlContentToAppend += `<tr> <td><img src="${item.src}" height=200 width=250> </td> <td>${item.name} </td> <td><input  class="actualizar"type="number" min="1" onchange='actualizarcantidad();' value="${cantidades[i]}"></td> <td> UYU ${item.unitCost*40} </td> <td>${cantidades[i]*item.unitCost*40}</td> </tr>` 
            }
        }else{
            if(item.currency ==='USD'){
                htmlContentToAppend += `<tr> <td><img src="${item.src}" height=200 width=250> </td> <td>${item.name} </td> <td><input  class="actualizar"type="number" min="1" onchange='actualizarcantidad();' value="${cantidades[i]}"></td> <td> ${item.currency} ${item.unitCost} </td> <td>${cantidades[i]*item.unitCost}</td> </tr>`   
            } else {
                htmlContentToAppend += `<tr> <td><img src="${item.src}" height=200 width=250> </td> <td>${item.name} </td> <td><input  class="actualizar"type="number" min="1" onchange='actualizarcantidad();' value="${cantidades[i]}"></td> <td> USD ${item.unitCost/40} </td> <td>${cantidades[i]*item.unitCost/40}</td> </tr>` 
        }}
        
        
    }document.getElementById("tabla").innerHTML = htmlContentToAppend;
}
function obtenercantidadIniciales (){
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        cantidades.push(item.count);       
    
    }
}
function actualizarcantidad(){
    let arraycantidadactual = document.getElementsByClassName("actualizar");
    for (let i = 0; i < arraycantidadactual.length; i++){
        let cantidad = arraycantidadactual[i].value;
        cantidades[i] = cantidad; 

    }
        showitems();
}
function conversor(){
    moneda = !moneda; showitems();

}