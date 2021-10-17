var category2 = [];
var comentarios2 = [];
function showComents(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comentari = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
              <p>${comentari.user}</p>
              <p>${comentari.description}</p>
              <p>${comentari.dateTime}</p>
         <div>${mostrarEstrellas(comentari.score)}</div>
              </div>
        </div>
        `

        document.getElementById("coment1").innerHTML = htmlContentToAppend;
    }
}
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];
        if (i ==0){

        
        htmlContentToAppend += `
    
        <div class="carousel-item active">
        <img src="${imageSrc}" class="d-block w-100" alt="...">
    </div>`}
    htmlContentToAppend += `
    
        <div class="carousel-item">
        <img src="${imageSrc}" class="d-block w-100" alt="...">
    </div>`   
    document.getElementById("img2").innerHTML = htmlContentToAppend;
    
    }
}
function mostrarEstrellas(score) {
    let stars = "";

    for (var i = 0; i < score; i++) {
        stars += `
            <span class="star-fill">★</span>
        `;
    }
    return stars;
}//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product2info = resultObj.data;
          let name2hml = document.getElementById("productName")
          let deshml = document.getElementById("descrip")
          let cathml = document.getElementById("productCount")  
          let costhml = document.getElementById("pcost")     
            name2hml.innerHTML = product2info.name;  
            deshml.innerHTML = product2info.description;
            cathml.innerHTML = product2info.soldCount;
            costhml.innerHTML = product2info.cost;          
            //Muestro las imagenes en forma de galería
          
            showImagesGallery(product2info.images);
            }
            
    
        });    
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentarios2 = resultObj.data;

            
            //Muestro las imagenes en forma de galería
            showComents(comentarios2);
        } 
    });

});

function comentarios1() {
    coment1 = {}; 
    coment1.description =document.getElementById(txtarea1).value;
    coment1.score = parseInt(document.getElementById('valor').innerHTML);
    let usersito = json.parse(localStorage.getItem('input-usuario'));
    coment1.user =  usersito;
    console.log(coment1.user);
    document.getElementById('txtarea1').value = "";
    comentarios2.push(coment1);
    showComents(comentarios2);
}

/*function calificar(num){
    num = ""
    let estrellas = ""
    for(let i = 1; i<=5; i++){
        if( i<=num){
            estrellas += //<I class="far fa-lightbulb" onclick="calificar(${I})" ><i></i>
           }
    }
}*/