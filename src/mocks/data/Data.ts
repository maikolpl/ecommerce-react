
type Categoria = {
producto:string,
ventasProduct:number
fill:string
}
export type VentaData = {
mes:string,
ventas: number,
usuarios: number,
categoria:Categoria
}
export const ventasData: VentaData[] = [
{
    mes: 'Ene',
    ventas:4000,
    usuarios:2400,
    categoria:{
    producto:'Teclado',
    ventasProduct:1000,
    fill:'#8884d8'
    }
},
{
    mes: 'Feb',
    ventas:3000,
    usuarios:1398,
    categoria:{
    producto:'Monitor',
    ventasProduct:500,
    fill: '#82ca9d'
    }
},
{
    mes:'Mar',
    ventas:5000,
    usuarios:3200,
    categoria:{
    producto:'Mouse',
    ventasProduct:2000, 
    fill:'#ffc658'
    }
},
{
    mes:'Abr',
    ventas:1890,
    usuarios:2100,
    categoria:{
    producto:'Computador',
    ventasProduct:300,
    fill:"#0088FE"
    }
},
{
    mes:'May',
    ventas:1890,
    usuarios:2800,
    categoria:{
    producto:'Celular',
    ventasProduct:1200,
    fill:"#FF4F81"
    } 
},{
    mes:'Jun',
    ventas:2390,
    usuarios:3800,
        categoria:{
    producto:'Tablet',
    ventasProduct:1000,
    fill:"#A28CFF"
    }
}
]