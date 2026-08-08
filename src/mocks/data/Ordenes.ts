export type Orden = {
    id:string,
    cliente:string,
    email:string,
    products:number,
    fecha: string,
    total:string,
    estado:string,
    pago:string,
}

export const ordenes: Orden[]=[
   {
    id:'#1001',
    cliente:'Juan Pérez',
    email:'juanperez@gmail.com',
    products:3,
    fecha:'01/08/2026',
    total:'$245.000',
    estado:'entregada',
    pago:'tarjeta'
   },
    {
    id:'#1002',
    cliente:'Maria Gomez',
    email:'mariagomez@gmail.com',
    products:2,
    fecha:'01/08/2026',
    total:'$180.000',
    estado:'Pendiente',
    pago:'Nequi'
   },
    {
    id:'#1003',
    cliente:'Carlos Ramírez',
    email:'carlosramirez@gmail.com',
    products:1,
    fecha:'02/08/2026',
    total:'$95.000',
    estado:'En camino',
    pago:'Efectivo'
   },
    {
    id:'#1004',
    cliente:'Laura Sánchez',
    email:'laurasanchez@gmail.com',
    products:4,
    fecha:'02/08/2026',
    total:'$380.000',
    estado:'Entregada',
    pago:'PSE'
   },
    {
    id:'#1005',
    cliente:'Andrés López',
    email:'andreslopez@gmail.com',
    products:2,
    fecha:'02/08/2026',
    total:'$220.000',
    estado:'Cancelada',
    pago:'Tarjeta'
   },
      {
    id:'#1006',
    cliente:'Valentina Torres',
    email:'valentinatorres@gmail.com',
    products:5,
    fecha:'03/08/2026',
    total:'$510.000',
    estado:'Pendiente',
    pago:'Daviplata'
   },
    {
    id:'#1007',
    cliente:'Santiago Castro',
    email:'santiagocastro@gmail.com',
    products:1,
    fecha:'03/08/2026',
    total:'$89.000',
    estado:'Entregada',
    pago:'Efectivo'
   },
   {
    id:'#1008',
    cliente:'Daniela Rojas',
    email:'danielarojas@gmail.com',
    products:3,
    fecha:'03/08/2026',
    total:'$275.000',
    estado:'En preparación',
    pago:'Nequi'
   },
    {
    id:'#1009',
    cliente:'Miguel Herrera',
    email:'miguelherrera@gmail.com',
    products:2,
    fecha:'04/08/2026',
    total:'$160.000',
    estado:'En camino',
    pago:'PSE'
   },
     {
    id:'#1010',
    cliente:'Camila Ortiz',
    email:'camilaortiz@gmail.com',
    products:6,
    fecha:'04/08/2026',
    total:'$640.000',
    estado:'Entregada',
    pago:'Tarjeta'
    },
    {
    id:'#1011',
    cliente:'Felipe Moreno',
    email:'felipemoreno@gmail.com',
    products:2,
    fecha:'04/08/2026',
    total:'$175.000',
    estado:'Pendiente',
    pago:'Nequi'
    },
    {
    id:'#1012',
    cliente:'Sara Díaz',
    email:'saradiaz@gmail.com',
    products:4,
    fecha:'05/08/2026',
    total:'$350.000',
    estado:'En preparación',
    pago:'Tarjeta'
    },
    {
    id:'#1013',
    cliente:'Nicolás Vargas',
    email:'nicolasvargas@gmail.com',
    products:1,
    fecha:'05/08/2026',
    total:'$99.000',
    estado:'Entregada',
    pago:'PSE'
    },
     {
    id:'#1014',
    cliente:'Paula Jiménez',
    email:'paulajimenez@gmail.com',
    products:3,
    fecha:'05/08/2026',
    total:'$295.000',
    estado:'Cancelada',
    pago:'Tarjeta'
    },
    {
    id:'#1014',
    cliente:'Paula Jiménez',
    email:'paulajimenez@gmail.com',
    products:3,
    fecha:'05/08/2026',
    total:'$295.000',
    estado:'Cancelada',
    pago:'Tarjeta'
    },
     {
    id:'#1015',
    cliente:'David Romero',
    email:'davidromero@gmail.com',
    products:5,
    fecha:'06/08/2026',
    total:'$490.000',
    estado:'En camino',
    pago:'Daviplata'
    },
    {
    id:'#1016',
    cliente:'Juliana León',
    email:'julianaleon@gmail.com',
    products:2,
    fecha:'06/08/2026',
    total:'$210.000',
    estado:'Entregada',
    pago:'Nequi'
    },
    {
    id:'#1017',
    cliente:'Cristian Ruiz',
    email:'cristianruiz@gmail.com',
    products:4,
    fecha:'06/08/2026',
    total:'$415.000',
    estado:'Pendiente',
    pago:'Efectivo'
    },
    {
    id:'#1018',
    cliente:'Natalia Medina',
    email:'nataliamedina@gmail.com',
    products:2,
    fecha:'07/08/2026',
    total:'$185.000',
    estado:'En preparación',
    pago:'Tarjeta'
    },
    {
    id:'#1019',
    cliente:'Kevin Silva',
    email:'kevinsilva@gmail.com',
    products:3,
    fecha:'07/08/2026',
    total:'$265.000',
    estado:'Entregada',
    pago:'PSE'
    },
     {
    id:'#1020',
    cliente:'Tatiana Cruz',
    email:'tatianacruz@gmail.com',
    products:1,
    fecha:'07/08/2026',
    total:'$79.000',
    estado:'Pendiente',
    pago:'Nequi'
    },
    {
    id:'#1021',
    cliente:'José Martínez',
    email:'josemartinez@gmail.com',
    products:5,
    fecha:'08/08/2026',
    total:'$530.000',
    estado:'Entregada',
    pago:'Tarjeta'
    },
     {
    id:'#1022',
    cliente:'Ana Rodríguez',
    email:'anarodriguez@gmail.com',
    products:2,
    fecha:'08/08/2026',
    total:'$198.000',
    estado:'En camino',
    pago:'PSE'
    },
    {
    id:'#1023',
    cliente:'Sebastián Molina',
    email:'sebastianmolina@gmail.com',
    products:3,
    fecha:'08/08/2026',
    total:'$285.000',
    estado:'Pendiente',
    pago:'Daviplata'
    },
    {
    id:'#1024',
    cliente:'Isabella Peña',
    email:'isabellapena@gmail.com',
    products:2,
    fecha:'09/08/2026',
    total:'$176.000',
    estado:'Entregada',
    pago:'Nequi'
    },
    {
    id:'#1025',
    cliente:'Jorge Castillo',
    email:'jorgecastillo@gmail.com',
    products:6,
    fecha:'09/08/2026',
    total:'$720.000',
    estado:'En preparación',
    pago:'Tarjeta'
    },
    {
    id:'#1026',
    cliente:'Karen Navarro',
    email:'karennavarro@gmail.com',
    products:4,
    fecha:'09/08/2026',
    total:'$410.000',
    estado:'En camino',
    pago:'Efectivo'
    },
     {
    id:'#1027',
    cliente:'Luis Acosta',
    email:'luisacosta@gmail.com',
    products:1,
    fecha:'10/08/2026',
    total:'$115.000',
    estado:'Cancelada',
    pago:'Tarjeta'
    },
    {
    id:'#1028',
    cliente:'Gabriela Vega',
    email:'gabrielavega@gmail.com',
    products:3,
    fecha:'10/08/2026',
    total:'$315.000',
    estado:'Pendiente',
    pago:'PSE'
    },
     {
    id:'#1029',
    cliente:'Ricardo Fuentes',
    email:'ricardofuentes@gmail.com',
    products:2,
    fecha:'10/08/2026',
    total:'$205.000',
    estado:'Entregada',
    pago:'Daviplata'
    },
     {
    id:'#1030',
    cliente:'Angélica Mora',
    email:'angelicamora@gmail.com',
    products:5,
    fecha:'11/08/2026',
    total:'$585.000',
    estado:'En camino',
    pago:'Nequi'
    },

]
export const paginationModel = { page: 0, pageSize: 10 };
    
