import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Travel Hub', path: '/travel-hub' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
];

function HideOnScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <HideOnScroll>
      <AppBar position="sticky" color="primary" sx={{ background: '#18191A', boxShadow: 3 }}>
        <Toolbar>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              letterSpacing: 2,
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s',
              '&:hover': { color: '#ffeb3b' },
            }}
          >
            ZUTTO
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item, idx) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color={location.pathname === item.path ? 'secondary' : 'inherit'}
                variant={location.pathname === item.path ? 'contained' : 'text'}
                sx={{
                  mx: 0.5,
                  borderRadius: 2,
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  backgroundColor: location.pathname === item.path ? '#23272F' : 'transparent',
                  color: location.pathname === item.path ? '#ffeb3b' : 'white',
                  transition: 'background 0.3s, color 0.3s, transform 0.2s',
                  '&:hover': {
                    backgroundColor: '#23272F',
                    color: '#ffeb3b',
                    transform: 'scale(1.08)',
                  },
                  boxShadow: location.pathname === item.path ? 2 : 0,
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
