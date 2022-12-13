import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Victor Bank, Inc.
          </Typography>
          {props.currentUser ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {props.currentUser.email}
              </Typography>
              <Button color="inherit">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                Sign In
              </Button>
            </>
          )}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}