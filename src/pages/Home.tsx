import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import WeekendIcon from '@mui/icons-material/Weekend';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Home: React.FC = () => (
  <Box sx={{ maxWidth: 1300, mx: 'auto', py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 }, background: '#18191A', minHeight: '100vh', color: 'white', fontFamily: 'Roboto, Arial, sans-serif' }}>
    {/* Hero Section */}
    <Box
  sx={{
    width: '100%',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    py: { xs: 8, md: 14 },
    mb: 8,
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(40,40,40,0.7) 60%, rgba(0,0,0,0.8) 100%)',
    borderRadius: 4,
    overflow: 'hidden',
  }}
>
  {/* Optional: subtle background shape or effect */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 60% 40%, rgba(80,80,80,0.25) 0%, transparent 70%)',
    }}
  />
  <Typography
    variant="h2"
    component="h1"
    fontWeight={700}
    gutterBottom
    sx={{
      fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
      color: 'white',
      fontSize: { xs: '2.5rem', md: '3.5rem' },
      zIndex: 1,
      letterSpacing: 2,
      mb: 2,
    }}
  >
    ZUTTO – REWARDS UN.LTD
  </Typography>
  <Typography
    variant="h5"
    sx={{
      fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
      color: 'white',
      fontWeight: 400,
      mb: 3,
      zIndex: 1,
    }}
  >
    Maximize Your Lounge Access – Instantly
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontFamily: 'Roboto, Arial, sans-serif',
      color: 'white',
      mb: 4,
      zIndex: 1,
      maxWidth: 700,
      mx: 'auto',
    }}
  >
    Your trusted companion for seamless airport lounge access across India.
  </Typography>
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3} sx={{ zIndex: 1, justifyContent: 'center' }}>
    <Button
      variant="contained"
      color="secondary"
      href="#"
      sx={{
        px: 4,
        py: 1.5,
        fontWeight: 700,
        fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
        fontSize: '1.1rem',
        boxShadow: 3,
        borderRadius: 3,
        transition: 'all 0.3s',
        '&:hover': {
          backgroundColor: '#ffeb3b',
          color: '#18191A',
          transform: 'scale(1.07)',
        },
      }}
    >
      Download on App Store
    </Button>
    <Button
      variant="contained"
      color="success"
      href="#"
      sx={{
        px: 4,
        py: 1.5,
        fontWeight: 700,
        fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
        fontSize: '1.1rem',
        boxShadow: 3,
        borderRadius: 3,
        transition: 'all 0.3s',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#18191A',
          transform: 'scale(1.07)',
        },
      }}
    >
      Download on Google Play
    </Button>
  </Stack>
</Box>

    {/* Intro Section */}
      <Fade in timeout={1200}>
  <Paper elevation={8} sx={{
    display: 'flex',
    alignItems: 'flex-start',
    p: { xs: 5, md: 8 },
    mb: 10,
    background: 'linear-gradient(90deg, #23272F 85%, #ffeb3b22 100%)',
    borderLeft: '6px solid #ffeb3b',
    borderRadius: 4,
    boxShadow: 8,
    position: 'relative',
    overflow: 'hidden',
  }}>
    <Box sx={{ mr: { xs: 2, md: 4 }, mt: 0.5 }}>
      <WeekendIcon sx={{ fontSize: 48, mb: 1, color: '#ffeb3b' }} />
    </Box>
    <Box>
      <Typography variant="h5" sx={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', color: 'white', mb: 2, fontWeight: 700, fontSize: { xs: '1.3rem', md: '2rem' }, letterSpacing: 1 }}>
        In today’s fast-paced world of air travel, every moment counts.<br />
        <Box component="span" sx={{ color: '#ffeb3b', fontWeight: 700 }}>At ZUTTO</Box>, we believe your journey should begin with comfort, convenience, and premium experiences.
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: 'white', mb: 2, fontSize: { xs: '1rem', md: '1.15rem' } }}>
        ZUTTO is your all-in-one solution to eliminate confusion and provide instant access to lounge eligibility across domestic and international airports in India.
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#ffeb3b', fontStyle: 'italic', fontSize: { xs: '1rem', md: '1.1rem' }, mt: 2 }}>
        It’s not just an app, it’s a gateway to stress-free travel.
      </Typography>
    </Box>
  </Paper>
</Fade>
      {/* What We Offer */}
    <Slide in direction="right" timeout={1000}>
  <Box sx={{ mt: 10, mb: 10 }}>
    <Paper elevation={6} sx={{ p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4 }}>

    <Typography variant="h5" fontWeight="medium" gutterBottom color="inherit" sx={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', mb: 3 }}>
      What We Offer
    </Typography>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center" alignItems="stretch">
      <Paper elevation={6} sx={{ flex: 1, minWidth: 260, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 10 } }}>
        <Typography variant="h3" sx={{ mb: 1 }} role="img" aria-label="check"></Typography>
        <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', mb: 1, color: 'white' }}>
          Check Lounge Access
        </Typography>
        <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: 'white', textAlign: 'center' }}>
          Instantly verify if your card grants lounge entry.
        </Typography>
      </Paper>
      <Paper elevation={6} sx={{ flex: 1, minWidth: 260, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 10 } }}>
        <Typography variant="h3" sx={{ mb: 1 }} role="img" aria-label="check"></Typography>
        <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', mb: 1, color: 'white' }}>
          Know Your Benefits
        </Typography>
        <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: 'white', textAlign: 'center' }}>
          Unlock your card’s full travel perks.
        </Typography>
      </Paper>
      <Paper elevation={6} sx={{ flex: 1, minWidth: 260, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 10 } }}>
        <Typography variant="h3" sx={{ mb: 1 }} role="img" aria-label="check"></Typography>
        <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', mb: 1, color: 'white' }}>
          Hassle-Free Experience
        </Typography>
        <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: 'white', textAlign: 'center' }}>
          Travel with clarity, convenience, and confidence.
        </Typography>
      </Paper>
    </Stack>
    </Paper>
  </Box>
</Slide>

    {/* About ZUTTO */}
    <Slide in direction="up" timeout={1200}>
  <Box sx={{ mt: 10, mb: 10 }}>
    <Paper elevation={2} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, background: '#23272F', color: 'white' }}>
      <Typography variant="h5" fontWeight="medium" gutterBottom color="inherit" sx={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>
        About ZUTTO
      </Typography>
        <Typography color="white" mb={1} sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
          In today’s fast-paced world of air travel, every moment counts. At ZUTTO, we believe your journey should begin with comfort, convenience, and premium experiences.
        </Typography>
        <Typography color="white" mb={1} sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
          ZUTTO is your all-in-one solution to eliminate confusion and provide instant access to lounge eligibility across domestic and international airports in India.
        </Typography>
        <Typography color="white" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
          It’s not just an app, it’s a gateway to stress-free travel.
        </Typography>
      </Paper>
    </Box>
  </Slide>
  </Box>
);


export default Home;
