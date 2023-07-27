import { Box, Switch } from '@mui/material';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { DataGrid, GridColDef, GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import { GridRowModesModel } from '@mui/x-data-grid-pro';
import { useRef, useState } from 'react';

function renderAdminSwitch(params: GridRenderCellParams<any, boolean>) {
  return <Switch defaultChecked value={params.value} />;
}

function renderVisibleSwitch(params: GridRenderCellParams<any, boolean>) {
  return <Switch defaultChecked value={params.value} />;
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

const tableRows = [
  {
    id: 1,
    name: 'Prof Appavoo',
    username: 'appavoo',
    email: 'appavoo@bread.com',
    access: true
  },
  {
    id: 2,
    name: 'Heather',
    username: 'Heather82',
    email: 'heather@hotmail.com',
    access: true
  },
  {
    id: 3,
    name: 'Kamila',
    username: 'kamila0509',
    email: 'kamila@gmail.com',
    access: true
  },
  {
    id: 4,
    name: 'Mr Ronaldinho',
    username: 'ron12345',
    email: 'ron@bu.edu',
    access: false
  }
];

const StudyUserPermissions: React.FC = () => {
  const [rows] = useState(tableRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 55 },
    {
      field: 'name',
      headerName: 'Name',
      width: 140,
      editable: true
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 140,
      editable: true
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
      editable: true
    },
    {
      field: 'switch',
      type: 'boolean',
      headerName: 'Study Admin',
      renderCell: renderAdminSwitch,
      renderEditCell: renderSwitchEditInputCell,
      editable: true,
      width: 90
    },
    {
      field: 'switch',
      type: 'boolean',
      headerName: 'Study Visible',
      renderCell: renderVisibleSwitch,
      renderEditCell: renderSwitchEditInputCell,
      editable: true,
      width: 90
    },
    {
      field: 'switch',
      type: 'boolean',
      headerName: 'Contribute',
      renderCell: renderSwitch,
      renderEditCell: renderSwitchEditInputCell,
      editable: true,
      width: 90
    }
  ];

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        sx={{
          '& .MuiDataGrid-cellContent': {
            whiteSpace: 'normal',
            lineHeight: 'normal',
            fontSize: '15px',
            fontWeight: 'normal',
            fontFamily: 'BlinkMacSystemFont'
          },
          '& .MuiDataGrid-cell': {
            maxHeight: 'none !important',
            overflow: 'auto',
            whiteSpce: 'initial !important',
            lineHeight: '16px !important',
            display: 'flex !important',
            alignItems: 'center',
            paddingTop: '6px !important',
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

export { StudyUserPermissions };
