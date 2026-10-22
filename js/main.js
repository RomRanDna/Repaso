
const gatos = [
    {id: 1, img: 'img/images.jpg', nombre: 'Chispas', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Bebe',  adoptable: true,  localidad: 'Malaga'},
    {id: 2, img: 'img/images.jpg', nombre: 'Yoshi', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Joven',  adoptable: true,  localidad: 'Malaga'},
    {id: 3, img: 'img/images.jpg', nombre: 'Batman', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Bebe',  adoptable: false,  localidad: 'Malaga'},
    {id: 4, img: 'img/images.jpg', nombre: 'Robin', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Joven',  adoptable: true,  localidad: 'Malaga'},
    {id: 5, img: 'img/images.jpg', nombre: 'Shizuka', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Bebe',  adoptable: false,  localidad: 'Malaga'},
    {id: 6, img: 'img/images.jpg', nombre: 'Novita', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Anciano',  adoptable: true,  localidad: 'Malaga'},
    {id: 7, img: 'img/images.jpg', nombre: 'Antonia', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Anciano',  adoptable: true,  localidad: 'Madrid'},
    {id: 8, img: 'img/images.jpg', nombre: 'John', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Cria',  adoptable: true,  localidad: 'Madrid'},
    {id: 9, img: 'img/images.jpg', nombre: 'Coco', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Discapacitado',  adoptable: true,  localidad: 'Madrid'},
    {id: 10, img: 'img/images.jpg', nombre: 'Pumuki', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Discapacitado',  adoptable: true,  localidad: 'Madrid'},
    {id: 11, img: 'img/images.jpg', nombre: 'Hera', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Discapacitado',  adoptable: true,  localidad: 'Barcelona'},
    {id: 12, img: 'img/images.jpg', nombre: 'Delta', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', categoria: 'Discapacitado',  adoptable: true,  localidad: 'Barcelona'}
]

const datos = [
    {span: 'handshake', titulo: 'Adopción Nacional', texto: 'Transportamos a los animales de forma segura por todo el pais', li1: 'Seguro', li2: 'Fácil', li3: 'Rápido'},
    {span: 'handshake', titulo: 'Tecnicos Certificados', texto: 'Todos nuestros tecnicos estan certificados por la ONU', li1: 'Tecnico 1', li2: 'Tecnico 2', li3: 'Tecnico 3'},
    {span: 'handshake', titulo: 'Cuidados', texto: 'Todos nuestros animales estan bien cuidados', li1: 'Vacunados', li2: 'Bien alimentados', li3: 'Ejercicio diario'}
]

const main = document.querySelector('main');

main.innerHTML = `
    <h1>Adopcion de Gatos</h1>
    <section class="sec-ben"></section>
    <h2>Gatos</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsa
        facilis. Expedita laboriosam earum illo, voluptatibus porro nisi facilis
        quasi voluptates nobis possimus dolorum, velit assumenda numquam sed
        architecto minus?
    </p>
    <div class="search"></div>
    <section class="sec-pro"></section>
`;

const beneficios = document.querySelector('.sec-ben');
const contenedor = document.querySelector('.sec-pro');
const search = document.querySelector('.search');

datos.forEach(({span, titulo, texto, li1, li2, li3}) => {
            const tarjeta = document.createElement('div')
            tarjeta.classList.add('informacion')
            tarjeta.innerHTML = `
            <span class="material-symbols-outlined">${span}</span>
            <h3>${titulo}</h3>
            <p>${texto}</p>
            <ul>
                <li>${li1}</li>
                <li>${li2}</li>
                <li>${li3}</li>
            </ul>
            `
            beneficios.appendChild(tarjeta)
});

search.innerHTML = `
    <button class= "btn-bebe">Bebe</button>
    <button class= "btn-joven">Joven</button>
    <button class= "btn-anciano">Anciano</button>
    <button class= "btn-discapacitado">Discapacitado</button>
    

`


gatos.forEach(({id, img, nombre, descripcion, categoria, adoptable, localidad}) => {
            const tarjeta = document.createElement('div')
            tarjeta.classList.add('tarjeta')
            tarjeta.innerHTML = `
            <img src="${img}" alt="Placeholder"/>
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p>Localidad: ${localidad}</p>
            ${adoptable ? '<button>Adoptar</button>' :  '<p>Adoptado</p>'}
            <p class="categoria">${categoria}</p>
            `
            contenedor.appendChild(tarjeta)
});