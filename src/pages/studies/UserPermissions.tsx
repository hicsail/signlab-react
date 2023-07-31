import { Box, Switch } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import { GridRowModesModel } from '@mui/x-data-grid-pro';
import { useState } from 'react';

function SwitchEditInputCell(props: GridRenderCellParams<any, boolean>) {
  const { id, value, field } = props;
  const [check, setCheck] = useState(value);
  const apiRef = useGridApiContext();

  console.log('haha');

  const handleChange = (newValue: boolean | false) => {
    console.log('check');
    setCheck(newValue);
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  return <Switch checked={check} onChange={() => handleChange} />;
}

const renderAdminSwitchEditInputCell: GridColDef['renderCell'] = (params) => {
  return <SwitchEditInputCell {...params} />;
};

const renderVisibleSwitchEditInputCell: GridColDef['renderCell'] = (params) => {
  return <SwitchEditInputCell {...params} />;
};

const renderSwitchEditInputCell: GridColDef['renderCell'] = (params) => {
  return <SwitchEditInputCell {...params} />;
};

const tableRows = [
  {
    id: 1,
    name: 'Prof Appavoo',
    username: 'appavoo',
    email: 'appavoo@bread.com',
    adminSwitch: true,
    visibleSwitch: false,
    switch: true
  },
  {
    id: 2,
    name: 'Heather',
    username: 'Heather82',
    email: 'heather@hotmail.com',
    adminSwitch: false,
    visibleSwitch: true,
    switch: true
  },
  {
    id: 3,
    name: 'Kamila',
    username: 'kamila0509',
    email: 'kamila@gmail.com'
  },
  {
    id: 4,
    name: 'Mr Ronaldinho',
    username: 'ron12345',
    email: 'ron@bu.edu',
    adminSwitch: true,
    visibleSwitch: false,
    switch: true
  }
];

const StudyUserPermissions: React.FC = () => {
  const [rows] = useState(tableRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 45 },
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
      width: 200,
      editable: true
    },
    {
      field: 'adminSwitch',
      type: 'boolean',
      headerName: 'Study Admin',
      renderCell: (params) => <Switch checked={params.value} />,
      renderEditCell: renderAdminSwitchEditInputCell,
      editable: true,
      width: 120
    },
    {
      field: 'visibleSwitch',
      type: 'boolean',
      headerName: 'Study Visible',
      renderCell: (params) => <Switch checked={params.value} />,
      renderEditCell: renderVisibleSwitchEditInputCell,
      editable: true,
      width: 120
    },
    {
      field: 'switch',
      type: 'boolean',
      headerName: 'Contribute',
      renderCell: (params) => <Switch checked={params.value} />,
      renderEditCell: renderSwitchEditInputCell,
      editable: true,
      width: 120
    }
  ];

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <h3 style={{ top: '10%', paddingBottom: '10px' }}>User Permissions</h3>
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
              pageSize: 5
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
