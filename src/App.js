import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const LoginPage = () => {
  return <h1>Login Page</h1>;
};

const Header = () => {
  return (
    <AppBar sx={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
      <Toolbar>
        <Typography variant='h4' color={'black'}>Twix</Typography>
        <Box display="flex" marginLeft="auto">
          <Link to="/login">
            <Button color='warning'>Login</Button>
          </Link>
          <Button color='warning'>SignUp</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth.js" element={<LoginPage />} />
        {/* other routes go here */}
      </Routes>
    </Router>
  );
};

export default App;
