import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
<AppBar sx={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
      <Toolbar>
        <Typography variant='h4' color={'black'}>Twix</Typography>
        <Box display="flex" marginLeft="auto">
            <Button color='warning'>Login
            </Button>
            <Button color='warning'>SignUp
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
