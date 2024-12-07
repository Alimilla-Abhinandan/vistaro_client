import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import favicon from './favicon.ico';

const pages = [
  { name: 'All Courses', path: '/all-courses' },
  { name: 'eBooks', path: '/ebooks' },
  { name: 'Notifications', path: '/notifications' },
  { name: 'Doubt Support', path: '/doubt-support' },
  { name: 'Assignments', path: '/assignments' },
  { name: 'Tests', path: '/tests' },
];

const userMenuItems = [
  { name: 'Profile', path: '/profile' },
  { name: 'My Courses', path: '/my-courses' },
  { name: 'Settings', path: '/settings' },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageChange = (path) => {
    if (path === '/') {
      const confirmed = window.confirm('Are you sure you want to logout?');
      if (confirmed) {
        // Clear authentication tokens or user data
        localStorage.clear();
        sessionStorage.clear();

        // Navigate to the login page (sign-in)
        navigate('/signin');
      }
    } else {
      navigate(`/dashboard${path}`);
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // Clear authentication tokens or user data
      localStorage.clear();
      sessionStorage.clear();

      // Navigate to the login page
      navigate('/signin');
    }
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1CAC78' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img 
            src={favicon} 
            alt="Vistaro Icon" 
            style={{ width: '40px', height: '40px', marginRight: '10px' }} 
          />
          <Typography 
            variant="h6" 
            noWrap 
            component={Link} 
            to="/dashboard" 
            sx={{ 
              mr: 2, 
              display: { xs: 'none', md: 'flex' }, 
              fontFamily: 'monospace', 
              fontWeight: 700, 
              letterSpacing: '.3rem', 
              color: 'inherit', 
              textDecoration: 'none' 
            }}
          >
            Vistaro
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large" 
              aria-label="menu" 
              aria-controls="menu-appbar" 
              aria-haspopup="true" 
              onClick={handleOpenNavMenu} 
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar" 
              anchorEl={anchorElNav} 
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} 
              keepMounted 
              transformOrigin={{ vertical: 'top', horizontal: 'left' }} 
              open={Boolean(anchorElNav)} 
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button 
                key={page.name} 
                component={Link} 
                to={page.path} 
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenuItems.map((item) => (
                <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{item.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
