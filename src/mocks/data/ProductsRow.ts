import basicaBlanca from '../../assets/productsImg/camisaBlanca.jpg'
import oversizeNegra from '../../assets/productsImg/oversizeNegra.jpg'
import poloAzulMarino from '../../assets/productsImg/poloAzulMarino.jpg'
import jeanSlimAzul from '../../assets/productsImg/jeanAzul.jpg'
import jeanNegroClasico from '../../assets/productsImg/jeanNegro.jpg'
import buzoHoodiGris from '../../assets/productsImg/hoodiGris.jpg'
import buzoHoodiNegro from '../../assets/productsImg/ChaquetaDenimAzul.jpg'
import chaquetaDenimAzul from '../../assets/productsImg/ChaquetaDenimAzul.jpg'
import chaquetaBomberNegra from '../../assets/productsImg/chaquetaBomberNegra.jpg'
import pantalonCargoBeige from '../../assets/productsImg/pantalonCargoNegro.jpg'
import joggerNegro from '../../assets/productsImg/joggerNegro.jpg'
import shortDeportivoGris from '../../assets/productsImg/shortDeportivoGris.jpg'
import vestidoFloral from '../../assets/productsImg/vestidoFloral.jpg'
import faldaMidiNegra from '../../assets/productsImg/faldaMidiNegra.jpg'
import camisaMangaLarga from '../../assets/productsImg/camisaMangaLargaBlanca.jpg'


export type ProductRow = {
id:number,
producto:string,
categoria:string,
img:string
descripcion:string,
marca:string,
proveedor:string,
precioCompra:string,
margen:string,
precioVenta:string,
stock:string,
minimo:string,
maximo:string,
fechaCreacion:string,
ultimaActualizacion:string,
caracteristicas:{
    primera:string,
    segunda:string,
    tercera:string,
    cuarta:string,
    quinta:string
}
}

export const rowsProducts:ProductRow[] = [
    {id: 1, producto: 'Camiseta Básica Blanca', 
    categoria:'Camisetas', 
    img: basicaBlanca,
    descripcion:'Camiseta básica confeccionada en algodón suave, ideal para uso diario. Corte clásico y cómodo.' ,
    marca:'Urban Wear',
    proveedor:'Textiles del Norte',
    precioCompra:'$22.000',
    margen:'59%',
    precioVenta:'$35.000',
    stock:'45',
    minimo:'10',
    maximo:'100',
    fechaCreacion:'15/01/2025',
    ultimaActualizacion:'12/05/2026',
    caracteristicas:{
        primera:'100% algodón',
        segunda:'Cuello redondo',
        tercera:'Color blanco',
        cuarta:'Corte clásico',
        quinta:'Tela transpirable'
    }

},
    {id:2, producto:'Camiseta Oversize Negra', 
        categoria:'Camisetas',
        img:oversizeNegra,
        descripcion:'Camiseta oversize de estilo urbano, elaborada en algodón premium para mayor comodidad.',
        marca:'Street Mode',
        proveedor:'Fashion Supply SAS',
        precioCompra:'$28.000',
        margen:'61%',
        precioVenta:'$45.000',
        stock:'30',
        minimo:'8',
        maximo:'80',
        fechaCreacion:'18/01/2025',
        ultimaActualizacion:'08/05/2026',
        caracteristicas:{
            primera:'Oversize fit',
            segunda:'100% algodón',
            tercera:'Color negro',
            cuarta:'Costuras reforzadas',
            quinta:'Estilo urbano'
        }
    },
    {id:3, producto:'Polo Azul Marino', 
        categoria:'Polos', 
        img:poloAzulMarino,
        descripcion:'Polo casual con cuello reforzado y tejido transpirable, perfecto para ocasiones semi-formales.',
        marca:'Elegance',
        proveedor:'Distribuciones Elite',
        precioCompra:'$30.000',
        margen:'50%',
        precioVenta:'$60.000',
        stock:'25',
        minimo:'5',
        maximo:'60',
        fechaCreacion:'20/01/2025',
        ultimaActualizacion:'10/05/2026',
        caracteristicas:{
            primera:'Cuello tipo polo',
            segunda:'Botones frontales',
            tercera:'Tela premium',
            cuarta:'Color azul marino',
            quinta:'Ajuste regular'

        }
    },
    {id:4, producto:'Jean Slim Fit Azul', 
        categoria:'Jeans', 
        img:jeanSlimAzul,
        descripcion:'Jean ajustado de mezclilla elástica que brinda comodidad y libertad de movimiento.',
        marca:'Denim Co.',
        proveedor:'Jeans Factory',
        precioCompra:'$50.000',
        margen:'60%',
        precioVenta:'$125.000',
        stock:'28',
        minimo:'8',
        maximo:'60',
        fechaCreacion:'08/02/2025',
        ultimaActualizacion:'12/05/2026',
        caracteristicas:{
            primera:'Slim fit',
            segunda:'Mezclilla elástica',
            tercera:'Cinco bolsillos',
            cuarta:'Color azul',
            quinta:'Alta durabilidad'
        }
    },
    {id:5, producto:'Jean Negro Clásico',
        categoria:'Jeans', 
        img:jeanNegroClasico,
        descripcion:'Pantalón de corte recto y color negro, ideal para combinar con cualquier prenda.',
        marca:'Denim Co.',
        proveedor:'Jeans Factory',
        precioCompra:'$50.000',
        margen:'60%',
        precioVenta:'$125.000',
        stock:'24',
        minimo:'8',
        maximo:'60',
        fechaCreacion:'08/02/2025',
        ultimaActualizacion:'11/05/2026',
        caracteristicas:{
            primera:'Corte recto',
            segunda:'Color negro',
            tercera:'Tela resistente',
            cuarta:'Tela resistente',
            quinta:'Ajuste cómodo'

        }

    },
    {id:6, producto:'Buzo Hoodi Gris', 
        categoria:'Buzos', 
        img:buzoHoodiGris,
        descripcion:'Buzo cómodo de algodón perchado, ideal para clima fresco y uso diario.',
        marca:'Urban Wear',
        proveedor:'Textiles del Norte',
        precioCompra:'$55.000',
        margen:'54%',
        precioVenta:'$120.000',
        stock:'22',
        minimo:'5',
        maximo:'40',
        fechaCreacion:'25/01/2025',
        ultimaActualizacion:'06/05/2026',
        caracteristicas:{
            primera:'Capucha ajustable',
            segunda:'Tela gruesa',
            tercera:'Color gris',
            cuarta:'Bolsillo canguro',
            quinta:'Interior suave'
        }
    },
    {id:7, producto:'Buzo Hoodi Negro', 
    categoria:'Buzos', 
    img:buzoHoodiNegro,
    descripcion:'Hoodie unicolor con capucha ajustable y bolsillo frontal tipo canguro.',
    marca:'Urban Wear',
    proveedor:'Textiles del Norte',
    precioCompra:'$55.000',
    margen:'54%',
    precioVenta:'$120.000',
    stock:'18',
    minimo:'5',
    maximo:'40',
    fechaCreacion:'25/01/2025',
    ultimaActualizacion:'05/05/2026',
    caracteristicas:{
        primera:'Capucha ajustable',
        segunda:'Bolsillo frontal',
        tercera:'Interior perchado',
        cuarta:'Color negro',
        quinta:'Manga larga'
    }
},
    {id:8, producto:'Chaqueta Denim Azul', 
        categoria:'Chaquetas', 
        img:chaquetaDenimAzul,
        descripcion:'Chaqueta clásica en mezclilla resistente con acabado lavado y diseño atemporal',
        marca:'Denim Co.',
        proveedor:'Jeans Factory',
        precioCompra:'$85.000',
        margen:'53%',
        precioVenta:'$180.000',
        stock:'12',
        minimo:'3',
        maximo:'25',
        fechaCreacion:'01/02/2025',
        ultimaActualizacion:'07/05/2026',
        caracteristicas:{
            primera:'Mezclilla resistente',
            segunda:'Botones metálicos',
            tercera:'Bolsillos frontales',
            cuarta:'Color azul',
            quinta:'Corte clásico'
        }
    },
    {id:9, producto:'Chaqueta Bomber Negra', 
        categoria:'Chaquetas',  
        img:chaquetaBomberNegra,
        descripcion:'Chaqueta bomber ligera con cierre frontal y diseño moderno para outfits urbanos.',
        marca:'Street Mode',
        proveedor:'Fashion Supply SAS',
        precioCompra:'$75.000',
        margen:'53%',
        precioVenta:'$160.000',
        stock:'10',
        minimo:'3',
        maximo:'25',
        fechaCreacion:'03/02/2025',
        ultimaActualizacion:'08/05/2026',
        caracteristicas:{
            primera:'Cierre frontal',
            segunda:'Puños elásticos',
            tercera:'Color negro',
            cuarta:'Estilo urbano',
            quinta:'Tela ligera'
        }
    },

    {id:10, producto:'Pantalon Cargo Beige', 
        categoria:'Pantalones',
        img:pantalonCargoBeige,
        descripcion:'Pantalón cargo con bolsillos laterales y tejido resistente para uso casual.',
        marca:'Explorer',
        proveedor:'Outdoor Fashion',
        precioCompra:'$55.000',
        margen:'55%',
        precioVenta:'$120.000',
        stock:'16',
        minimo:'5',
        maximo:'35',
        fechaCreacion:'18/02/2025',
        ultimaActualizacion:'08/05/2026',
        caracteristicas:{
            primera:'Bolsillos laterales',
            segunda:'Color beige',
            tercera:'Tela resistente',
            cuarta:'Corte moderno',
            quinta:'Uso casual'
        }
    },
    {id:11, producto:'Pantalon Jogger Negro', 
        categoria:'Pantalones', 
        img:joggerNegro,
        descripcion:'Jogger deportivo fabricado en tela suave y flexible para actividades diarias o entrenamiento.',
        marca:'Active Sport',
        proveedor:'Sport Wear Colombia',
        precioCompra:'$50.000',
        margen:'60%',
        precioVenta:'$125.000',
        stock:'24',
        minimo:'8',
        maximo:'60',
        fechaCreacion:'08/02/2025',
        ultimaActualizacion:'11/05/2026',
         caracteristicas:{
            primera:'Corte recto',
            segunda:'Color negro',
            tercera:'Tela resistente',
            cuarta:'Cinco bolsillos',
            quinta:'Ajuste cómodo'
        }
       
    },
    {id:12, producto:'Short Deportivo Gris', 
        categoria:'Shorts', 
        img:shortDeportivoGris,
        descripcion:'Short ligero y transpirable diseñado para ejercicio y actividades al aire libre.',
        marca:'Active Sport',
        proveedor:'Sport Wear Colombia',
        precioCompra:'$22.000',
        margen:'59%',
        precioVenta:'$55.000',
        stock:'40',
        minimo:'10',
        maximo:'80',
        fechaCreacion:'22/02/2025',
        ultimaActualizacion:'10/05/2026',
        caracteristicas:{
            primera:'Tela ligera',
            segunda:'Color gris',
            tercera:'Pretina elástica',
            cuarta:'Ideal para deporte',
            quinta:'Secado rápido'
        }
        
    },
    {id:13, producto:'Vestido Casual Floral', 
        categoria:'Vestidos', 
        img:vestidoFloral,
        descripcion:'Vestido casual con estampado floral, confeccionado en tela ligera y fresca. Ideal para ocasiones informales y días cálidos.',
        marca:'Bella Style',
        proveedor:'Moda Global SAS',
        precioCompra:'$38.000',
        margen:'55%',
        precioVenta:'$85.000',
        stock:'20',
        minimo:'5',
        maximo:'40',
        fechaCreacion:'10/03/2025',
        ultimaActualizacion:'11/05/2026',
          caracteristicas:{
            primera:'Estampado floral',
            segunda:'Tela ligera',
            tercera:'Corte cómodo',
            cuarta:'Manga corta',
            quinta:'Ideal para clima cálido'
        }

    },
    {id:14, producto:'Falda Midi Negra', 
        categoria:'Faldas', 
        img:faldaMidiNegra,
        descripcion:'Falda midi de corte clásico en color negro, diseñada para brindar comodidad y elegancia en cualquier ocasión.',
        marca:'Elegance',
        proveedor:'Distribuciones Elite',
        precioCompra:'$25.000',
        margen:'55%',
        precioVenta:'$55.000',
        stock:'26',
        minimo:'6',
        maximo:'50',
        fechaCreacion:'12/03/2025',
        ultimaActualizacion:'10/05/2026',
          caracteristicas:{
            primera:'Largo midi',
            segunda:'Color negro',
            tercera:'Tela suave',
            cuarta:'Cintura cómoda',
            quinta:'Diseño elegante'
        }
    },
    {id:15, producto:'Camisa Manga Larga Blanca', 
        categoria:'Camisas', 
        img:camisaMangaLarga,
        descripcion:'Camisa formal de manga larga confeccionada en tela fresca y elegante.',
        marca:'Elegance',
        proveedor:'Distribuciones Elite',
        precioCompra:'$45.000',
        margen:'56%',
        precioVenta:'$100.000',
        stock:'20',
        minimo:'5',
        maximo:'40',
        fechaCreacion:'25/02/2025',
        ultimaActualizacion:'07/05/2026',
          caracteristicas:{
            primera:'Manga larga',
            segunda:'Cuello formal',
            tercera:'Color blanco',
            cuarta:'Tela fresca',
            quinta:'Corte elegante'
        }
    },
    

]
