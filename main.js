const div = document.querySelector('.Contenedor');
const codigo = document.querySelector('#codigo');
const buscar = document.querySelector('#buscar');
const actualizar = document.querySelector('#actualizar');
const eliminar = document.querySelector('#eliminar');
const agregar = document.querySelector('#agregar');
const listar = document.querySelector('#listar');

listar.addEventListener('click',(e) =>{
    div.innerHTML=("");
    e.preventDefault();
    listarProductos(20);
    
})

agregar.addEventListener('click',(e) =>{
    e.preventDefault();
    agregarProducto();
})

buscar.addEventListener('click',(e) =>{
    div.innerHTML=("");
    e.preventDefault();
    buscarProducto(codigo.value);
})

actualizar.addEventListener('click',(e)=>{
    e.preventDefault();
    actualizarProducto();
})

eliminar.addEventListener('click',(e)=>{
    e.preventDefault();
    eliminarProducto();
})

function buscarProducto(valor) {
    fetch(`https://fakestoreapi.com/products/${valor}`)
        .then((res)=>res.json())
        .then((data) => {
            insertarProducto(data);
        })
    }

function insertarProducto(producto) {
    const div_2= document.createElement('div')
    div_2.innerHTML=(`<div class="card" style="width:30%">
    <img class="card-img-top " src="${producto.image}" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${producto.title}</h4>
      <p class="card-text">${producto.description}</p>
      <p class="card-text">${producto.price}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
    </div>`)
        div.appendChild(div_2)
    }
   
function listarProductos(valor){
    for (let i=1;i<=valor;i++){
        buscarProducto(i)
    }
}

function agregarProducto() {
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function actualizarProducto() {
    fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))   
}

function eliminarProducto() {
    fetch('https://fakestoreapi.com/products/5',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}


