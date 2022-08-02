//ARRAY DE PRODUCTOS DETACADOS
const carrito = [];
const arrayDeProductos = [{id:1, titulo:"CAFE TOLIMA 250g", precio: 3490, imagen:"https://www.tiendajuanvaldez.com/wp-content/uploads/2022/04/Tolima.jpg"},
                          {id:2, titulo:"CONITO DE CLOCOLATE BLANCO X24", precio: 2300,imagen:"https://cafemartinez.vtexassets.com/arquivos/ids/156868-300-300?v=637793466026730000&width=300&height=300&aspect=true"},
                          {id:3, titulo:"CAFE COLOMBIA 250gt", precio: 2300,imagen:"https://cafemartinez.vtexassets.com/arquivos/ids/155515-600-600?v=637463658759930000&width=600&height=600&aspect=true"},
                          {id:4, titulo:"CARAMEL MACCHIATO X6", precio: 989, imagen:"https://www.dolce-gusto.com.ar/media/catalog/product/cache/a7ed62b12c9d28aa0842b5a9bc7623a5/s/t/starbucks_ndg_caramel_macchiato_7613036942720.png"},
                          {id:5, titulo:"CAFE TIPO ITALIANO 500g", precio: 5500, imagen:"https://cafemartinez.vtexassets.com/arquivos/ids/155523-300-300?v=637463658782630000&width=300&height=300&aspect=true"},
                          {id:6, titulo:"ALFAJORES DULCE DE LECHE 9un.", precio: 1400, imagen:"https://tienda.havanna.com.ar/wp-content/uploads/2022/05/SuperDDL-300x300.jpg"},
                          {id:7, titulo:"CAFE VOLCAN 250g", precio: 2200, imagen:"https://global-uploads.webflow.com/5f96ebdeb7e4b038d8dc6679/6095a8b926107f1960b6c6ef_cafe-volcan-juan-valdez.png"},
                          {id:8, titulo:"ALFAJORES SEMILIA x 9uds", precio: 2400, imagen:"https://tienda.havanna.com.ar/wp-content/uploads/2022/04/78_Semilia-300x300.jpg"}
                        ];

let acumulador = ``;
arrayDeProductos.forEach((producto) => {
    acumulador += `
    <div class="tarjeta">
    <img src=${producto.imagen} alt="">
    <h3>${producto.titulo}</h3>
    <h4>$ ${producto.precio}</h4>
    <a href="./pages/catalogo.html">Ver todos los productos</a>
</div>
    `
});

document.getElementById('card-container').innerHTML = acumulador