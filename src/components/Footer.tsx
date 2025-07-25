import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => (
  <Paper
    component="footer"
    elevation={8}
    sx={{
      mt: 8,
      borderRadius: 0,
      background: '#18191A',
      color: 'white',
      py: 4,
      px: { xs: 2, sm: 6 },
      textAlign: 'center',
      boxShadow: 6,
    }}
  >
    <Typography variant="body2" sx={{ mb: 1 }}>
      &copy; {new Date().getFullYear()} <b>ZUTTO</b>. All rights reserved.
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
      <Link href="/privacy" underline="hover" color="white" sx={{ fontWeight: 'medium', transition: 'color 0.3s', '&:hover': { color: '#ffeb3b' } }}>
        Privacy Policy
      </Link>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.3)' }} />
      <Link href="/terms" underline="hover" color="white" sx={{ fontWeight: 'medium', transition: 'color 0.3s', '&:hover': { color: '#ffeb3b' } }}>
        Terms of Service
      </Link>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.3)' }} />
      <Link href="mailto:support@zutto.in" underline="hover" color="white" sx={{ fontWeight: 'medium', display: 'flex', alignItems: 'center', gap: 0.5, transition: 'color 0.3s', '&:hover': { color: '#ffeb3b' } }}>
        <EmailIcon fontSize="small" sx={{ mb: '-2px' }} /> support@zutto.in
      </Link>
    </Stack>
    <Typography variant="body2" sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
      Made with <FavoriteIcon fontSize="small" sx={{ color: 'error.light', mx: 0.5, animation: 'beat 1.2s infinite alternate' }} /> in Coimbatore, India
    </Typography>
    <style>{`
      @keyframes beat {
        to { transform: scale(1.2); }
      }
    `}</style>
  </Paper>
);

export default Footer;
