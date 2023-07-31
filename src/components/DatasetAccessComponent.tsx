import { Box, Switch } from '@mui/material';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { DataGrid, GridColDef, GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import { GridRowModesModel } from '@mui/x-data-grid-pro';
import { useRef, useState } from 'react';

interface Row {
  id: number;
  name: string;
  description: string;
  access: boolean;
}

interface Table {
  tableRows: Row[];
}

function renderSwitch(params: GridRenderCellParams<any, boolean>) {
  return <Switch defaultChecked value={params.value} />;
}

function SwitchEditInputCell(props: GridRenderCellParams<any, boolean>) {
  const { id, value, field, hasFocus } = props;
  const apiRef = useGridApiContext();
  const ref = useRef<HTMLElement>();

  const handleChange = (newValue: boolean | false) => {
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  useEnhancedEffect(() => {
    if (hasFocus && ref.current) {
      const input = ref.current.querySelector<HTMLInputElement>(`input[value="${value}"]`);
      input?.focus();
    }
  }, [hasFocus, value]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
      <Switch disabled defaultChecked value={value} onChange={() => handleChange} />
    </Box>
  );
}

const renderSwitchEditInputCell: GridColDef['renderCell'] = (params) => {
  return <SwitchEditInputCell {...params} />;
};

const DatasetAccessComponent: React.FC<Table> = ({ tableRows }: Table) => {
  const [rows] = useState(tableRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 75 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 450,
      editable: true
    },
    {
      field: 'switch',
      type: 'boolean',
      headerName: 'Project Access to Dataset',
      renderCell: renderSwitch,
      renderEditCell: renderSwitchEditInputCell,
      editable: true,
      width: 120
    }
  ];

  return (
    <Box sx={{ height: 800, width: '100%', boxShadow: '1px 9px 15px darkgrey' }}>
      <DataGrid
        sx={{
          '& .MuiDataGrid-cellContent': {
            fontSize: '15px',
            fontWeight: 'normal',
            fontFamily: 'BlinkMacSystemFont'
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
              pageSize: 8
            }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export { DatasetAccessComponent };
