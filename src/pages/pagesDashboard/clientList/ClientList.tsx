import './ClientList.css'
import { DataGrid } from '@mui/x-data-grid';
import type{  GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import type { ClientRow } from '../../../mocks/data/ClientsRow';
import { paginationModel} from '../../../mocks/data/ClientsRow';
import { Link } from 'react-router-dom';
import { useState } from 'react';




type ClientListProps={
    client:ClientRow[]
}

export function ClientList ({client}:ClientListProps){ 
    const [clients,setClients] = useState(client);

    const handleDelete = (id:number)=>{
    setClients(clients.filter(
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

  { field: 'empresa',
    headerName: 'Empresa',
    width: 180 
},
  {
    field: 'compras',
    headerName: 'Compras',
    type: 'string',
    width: 150,
  },
  {
    field: 'estado',
    headerName: 'Estado',
    width: 120,
   },
   {
    field: 'action',
    headerName:'Acciones',
    width: 150,
    sortable: false,
    renderCell: (params)=>{
        return(
            <div className='clientActions'>
                <Link to={`/dashboard/clients/${params.row.id}`}>
                <button className='clientEditButton'>
                Editar
                </button>
                </Link>
            <DeleteIcon className='clientIconEdit' onClick={()=> handleDelete(params.row.id)}/>
            </div>
        )
    }
}
];
    return(
        <div className="clientList">
            <Paper sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={clients}
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