export type Orden = {
    id:string,
    cliente:string,
    fecha: string,
    total:string,
    claseEstado:string
}

export const ordenes: Orden[]=[
    {
        id:'N:1234',
        cliente: 'Maria Gonzales',
        fecha:'31 May, 2024',
        total:'$1,250',
        claseEstado:'completado'
    },

       {
        id:'N:1233',
        cliente: 'Juan Perez',
        fecha:'30 May, 2024',
        total:'$2,450',
        claseEstado:'en proceso'
    },

       {
        id:'N:1232',
        cliente: 'Ana Martinez',
        fecha:'29 May, 2024',
        total:'$850.00',
        claseEstado:'pendiente'
    },

       {
        id:'N:1231',
        cliente: 'Luis Rodriguez',
        fecha:'28 May, 2024',
        total:'$1,150',
        claseEstado:'completado'
    },

       {
        id:'N:1230',
        cliente: 'Carmen Lopez',
        fecha:'27 May, 2024',
        total:'$950.00',
        claseEstado:'cancelado'
    }   

]
    
