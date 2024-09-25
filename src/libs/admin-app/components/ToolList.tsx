import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {AITool} from "@libs/ai-tool/models";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'label', headerName: 'Label' },
  { field: 'logo', headerName: 'Logo' },
];

const rows: AITool[] = [
  {
    id: 'gpt-4o',
    label: 'Chat GPT-4o',
    logo: '/static/img/logos/openai-logomark.svg',
  },
  {
    id: 'gpt-3.5-turbo',
    label: 'Chat GPT-3.5',
    logo: '/static/img/logos/openai-logomark.svg',
  },
  {
    id: 'dall-e-3',
    label: 'Image Gen DALL-E-3',
    logo: '/static/img/logos/openai-logomark.svg',
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export function ToolList() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
