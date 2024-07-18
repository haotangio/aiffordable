import {Box, TextField} from "@mui/material";

export default function UserListPage() {
  return (
    <Box sx={{height: '100%', width: '100%'}}>
      <Box sx={{height: '100%', width: '100%', flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{flexGrow: 1}}>
          adsfsdf
        </Box>
        <Box>
          <TextField label="Type here ..." fullWidth variant="standard" />
        </Box>
      </Box>
    </Box>
  );
}
