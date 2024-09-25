import * as React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {AI_TOOLs} from "@libs/ai-tool/models";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'label', headerName: 'Label' },
  { field: 'logo', headerName: 'Logo' },
];

const paginationModel = { page: 0, pageSize: 5 };

export function ToolList() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={AI_TOOLs}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
