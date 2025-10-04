
// lista que contiene la información de los elementos que se mostratan en el carrusel de la pagina principal.
const elementos_carrusel = [
    {
        nombre: "Galletas artesanales",
        descripcion: "Galletas artesanales, de gran tamaño, suaves por dentro y crujientes por fuera, hechas para disfrutar en cualquier momento. Modernas, únicas y llenas de sabor.",
        imagen: "images/galleta_chocolate_alta.png"
    },
    {
        nombre: "Galletas de temporada",
        descripcion: "Celebra tus momentos especiales con galletas innovadoras que llamaran la atención de todos tus invitados y les encatarán",
        imagen: "images/galletas_hallowen.png"
    },
    {
        nombre: "Galletas clasicas",
        descripcion: "Galletas tradiconales con calidad excepcional",
        imagen: "images/galletas_figuras.png"
    }

]

// Lista que contiene la informacion de las categorias de productos
const lista_categorias = [
    {
        codigo: "100",
        nombre: "Galletas New York",
        descripcion: "Galletas artesanales, suaves por dentro, crujientes por fuera",
        imagen: "images/galletas_nutella.jpg"
    },
    {
        codigo: "200",
        nombre: "Galletas de temporada",
        descripcion: "Galletas decoradas para tus fechas especiales",
        imagen: "images/galletas_hallowen_categorias.jpg"
    },
    {
        codigo: "300",
        nombre: "Galletas clasicas",
        descripcion: "Galletas tradiconales con calidad excepcional",
        imagen: "images/galletas_clasicas_categorias.jpg"
    }
    
]

// Lista que contiene la información de los productos
const lista_productos = [
    {
        codigo: "001",
        nombre: "New York chocolate",
        descripcion: "Deliciosas y elegantes galletas de chocolate",
        codigo_categoria: "100",
        imagen: "images/galletas_chocolate.png",
        precio: 8000,
        calificacion: 5,
        detalles: "Crujientes por fuera, suavecitas por dentro. Ingredientes de calidad"

    },
    {
        codigo: "002",
        nombre: "Hallowen",
        descripcion: "Sorprende a tus seres queridos en tus fechas especiales",
        codigo_categoria: "200",
        imagen: "images/galletas_hallowen_categorias.jpg",
        precio: 12000,
        calificacion: 5,
        detalles: "Galletas decoradas por temporada para sorprender a tus amigos y familiares"

    },
    {
        codigo: "003",
        nombre: "Clásicas figuras x 10",
        descripcion: "Las galletas de toda la vida con un sabor inigualable",
        codigo_categoria: "300",
        imagen: "images/galletas_figuras.png",
        precio: 8000,
        calificacion: 5,
        detalles: "Las de toda la vida con un sabor y calidad inigualable"

    },
    {
        codigo: "004",
        nombre: "Red Velvet",
        descripcion: "Deliciosas y elegantes galletas Red Velvet",
        codigo_categoria: "100",
        imagen: "images/galletas_redvelvet2.jpg",
        precio: 8000,
        calificacion: 5,
        detalles: "Crujientes por fuera, suavecitas por dentro. Ingredientes de calidad"

    },
    {
        codigo: "005",
        nombre: "Nutella",
        descripcion: "Espectacular galleta de Nutella",
        codigo_categoria: "100",
        imagen: "images/galletas_nutella.jpg",
        precio: 12000,
        calificacion: 5,
        detalles: "Crujientes por fuera, suavecitas por dentro. Ingredientes de calidad"

    },
    {
        codigo: "006",
        nombre: "Avena con chips",
        descripcion: "Saludables y deliciosas",
        codigo_categoria: "300",
        imagen: "images/galletas_avena_redim.jpg",
        precio: 10000,
        calificacion: 5,
        detalles: "Galletas de avena con chocolate de calidad. Saludables y deliciosas"

    },
    {
        codigo: "007",
        nombre: "Navidad",
        descripcion: "Sorprende a tus seres queridos en tus fechas especiales",
        codigo_categoria: "200",
        imagen: "images/galletas_navidad.png",
        precio: 12000,
        calificacion: 5,
        detalles: "Galletas decoradas por temporada para sorprender a tus amigos y familiares"

    },
    {
        codigo: "008",
        nombre: "Muffins de queso x 4",
        descripcion: "Espectacular muffin de queso",
        codigo_categoria: "400",
        imagen: "images/muffin_queso_redim.jpg",
        precio: 16000,
        calificacion: 5,
        detalles: "Espectaculares muffins de queso, vas a querer repetir una y otra vez"

    },
    {
        codigo: "009",
        nombre: "Clásicas x 10",
        descripcion: "Las galletas de toda la vida con un sabor inigualable",
        codigo_categoria: "300",
        imagen: "images/clasicas2.png",
        precio: 10000,
        calificacion: 5,
        detalles: "Las de toda la vida con un sabor y calidad inigualable"
        
    }
]

//lista que representa el carrito de compras
    let carrito = [
        
    ];
