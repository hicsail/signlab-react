import { Box, Checkbox } from '@mui/material';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { DataGrid, GridColDef, GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import { GridRowModesModel, GridActionsCellItem, GridRowId } from '@mui/x-data-grid-pro';
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

function renderCheckbox(params: GridRenderCellParams<any, boolean>) {
  return <Checkbox readOnly value={params.value} />;
}

function CheckboxEditInputCell(props: GridRenderCellParams<any, boolean>) {
  const { id, value, field, hasFocus } = props;
  const apiRef = useGridApiContext();
  const ref = useRef<HTMLElement>();

  const handleChange = (event: React.SyntheticEvent, newValue: boolean | false) => {
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
      <Checkbox name="checkbox" value={value} onChange={handleChange} />
    </Box>
  );
}

const renderCheckboxEditInputCell: GridColDef['renderCell'] = (params) => {
  return <CheckboxEditInputCell {...params} />;
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
      field: 'checkbox',
      type: 'boolean',
      headerName: 'Checkbox',
      renderCell: renderCheckbox,
      renderEditCell: renderCheckboxEditInputCell,
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
            lineHeight: 'normal'
          },
          '& .MuiDataGrid-cell': {
            maxHeight: 'none !important',
            overflow: 'auto',
            whiteSpce: 'initial !important',
            lineHeight: '16px !important',
            display: 'flex !important',
            alignItems: 'center',
            paddingTop: '10px !important',
            paddingBottom: '10px !important'
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
