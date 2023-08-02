import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridRowModesModel } from '@mui/x-data-grid-pro';
import { useState } from 'react';

interface Row {
  id: number;
  view: string;
  entry: string;
  responder: string;
  access: boolean;
}

interface Table {
  tableRows: Row[];
}

const DatasetControlComponent: React.FC<Table> = ({ tableRows }: Table) => {
  const [rows] = useState(tableRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  /*const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };*/

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 180 },
    {
      field: 'view',
      headerName: 'View',
      width: 140,
      editable: true
    },
    {
      field: 'entry',
      headerName: 'Entry ID',
      width: 200,
      editable: true
    },
    {
      field: 'responder',
      headerName: 'Responder ID',
      width: 200,
      editable: true
    },
    {
      field: 'access',
      type: 'boolean',
      headerName: 'Access',
      width: 100
    }
  ];

  return (
    <Box sx={{ height: 800, width: '100%', boxShadow: '1px 9px 15px darkgrey' }}>
      <DataGrid
        sx={{
          '&.MuiDataGrid-root': {
            fontWeight: 'normal'
          },
          '& .MuiDataGrid-cell': {
            overflow: 'auto',
            paddingTop: '8px !important',
            paddingBottom: '8px !important'
          }
        }}
        getRowHeight={() => 'auto'}
        rows={rows}
        columns={columns}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export { DatasetControlComponent };
