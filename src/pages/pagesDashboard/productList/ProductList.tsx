import './ProductList.css'
import { DataGrid } from '@mui/x-data-grid';
import type{  GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { paginationModel} from '../../../mocks/data/ClientsRow';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { ProductRow } from '../../../mocks/data/ProductsRow';

type ProductListProps={
    product:ProductRow[]
}

export function ProductList ({product}:ProductListProps) {
    const [products,setProducts] = useState(product)

    const handleDelete = (id:number)=>{
        setProducts(products.filter(
            (item) => item.id !== id
        ))
    }

    const columns: GridColDef[] = [
        { field: 'img',
    headerName: 'Imagen',
    width: 200,
    renderCell:(params)=>{
        return(
            <Link to={`/dashboard/product/${params.row.id}`} className='linkProduct'>
            <img className= 'productImage'src={params.row.img} alt={params.row.product}/>
            </Link>
        )
    }


 },
  { field: 'producto',
    headerName: 'Producto',
    width: 200

 },

  { field: 'categoria',
    headerName: 'Categoria',
    width: 250 
},

  { field: 'precioVenta',
    headerName: 'Precio',
    width: 180 
},
   {
    field: 'action',
    headerName:'Acciones',
    width: 150,
    sortable: false,
    renderCell: (params)=>{
        return(
            <div className='productsActions'>
                <Link to={`/dashboard/productEdit/${params.row.id}`} className='linkProduct'>
                <button className='productEditButton'>
                Editar
                </button>
                </Link>
            <DeleteIcon className='productIconEdit' onClick={()=> handleDelete(params.row.id)}/>
                 
              
            </div>
        )
    }
}
];

    return(
        <div className="productList">
            
        <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        disableRowSelectionOnClick
      />
    </Paper>
        </div>
    )

}