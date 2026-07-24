export type ClientRow={
   id:number,
   cliente:string,
   email:string,
   empresa:string,
   compras:string,
   estado:string
}

export const rowsClients:ClientRow[] = [
{ id: 1, cliente:'Daniel Ramirez', email: 'daniel@gmail.com', empresa:'Apple', compras: '$1,250', estado:'activo' },
{ id: 2, cliente: 'Maria Gonzales', email: 'maria@gmail.com', empresa:'Mircorsoft', compras:'$2,100', estado:'activo' },
{ id: 3, cliente: 'Juan Perez', email:'juan@gmail.com', empresa:'Google',compras:'$950', estado:'Pendiente' },
{ id: 4, cliente: 'Ana Martinez', email: 'ana@gmail.com', empresa:'Amazon',compras:'$3,400', estado:'Activo' },
{ id: 5, cliente: 'Carlos López', email:'carlos@gmail.com', empresa:'NVIDIA',compras:'$780', estado:'Inactivo' },
{ id: 6, cliente: 'Melisandre Garzon', email:'melissandre@gmail.com', empresa:'Google', compras:'$1,200', estado:'Pendiente' },
{ id: 7, cliente: 'Clifford Rodriguez', email: 'clifford@gmail.com', empresa:'Microsoft', compras:'$250', estado:'Activo'  },
{ id: 8, cliente: 'Frances Kounde', email:'francesK@gmail.com', empresa:'NVIDIA', compras:'$3,000', estado:'Pendiente'},
{ id: 9, cliente: 'Roxie evargarden', email: 'evargarden@gamil.com',empresa:'Apple', compras:'$4,500', estado:'Activo' },
];
export const paginationModel = { page: 0, pageSize: 5 };