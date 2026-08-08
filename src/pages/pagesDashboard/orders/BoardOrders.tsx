import './BoardOrders.css'
import { DataGrid } from '@mui/x-data-grid';
import type{  GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import type { Orden } from '../../../mocks/data/Ordenes';
import { useState } from 'react';
import { paginationModel} from '../../../mocks/data/Ordenes';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

type ordenListProps = {
  orden:Orden[]
}

export function BoardOrders({orden}:ordenListProps){
  const [orders,setOrders] = useState(orden);

  const handleDelete = (id:string)=>{
      setOrders(orders.filter(
          (item)=> item.id !== id
      ))
    }

  const columns: GridColDef[] = [
{ field: 'cliente',
  headerName: 'Cliente',
  width: 200

},

{ field: 'email',
  headerName: 'Email',
  width: 250 
},

{ field: 'products',
  headerName: 'Productos',
  width: 180 
},
{
  field: 'fecha',
  headerName: 'Fecha',
  type: 'string',
  width: 150,
},
{
  field: 'total',
  headerName: 'Total',
  width: 120,
  },
  {
  field: 'estado',
  headerName: 'Estado',
  width: 120,
  },
  {
  field: 'pago',
  headerName: 'Pago',
  width: 120,
  },
  {
    field: 'action',
    headerName:'Acciones',
    width: 150,
    sortable: false,
    renderCell: (params)=>{
        return(
            <div className='orderActions'>
                <Link to={`/dashboard/order/${params.row.id}`}>
                <button className='clientEditButton'>
                Editar
                </button>
                </Link>
            <DeleteIcon className='clientIconEdit' onClick={()=> handleDelete(params.row.id)}/>
            </div>
        )
    }
}

]

  return(
    <div className="boardOrders">
       <Paper sx={{ height: 500, width: '100%' }}>
         <DataGrid
        rows={orden}
        columns={columns}
        initialState={{ pagination: { paginationModel} }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        disableRowSelectionOnClick
      />
       </Paper>

    </div>

  )
}