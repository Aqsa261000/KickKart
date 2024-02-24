import React from 'react';
import style from './styles.js';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: '20px 0', bgcolor: 'black', color: 'white' }}>
      <Typography sx={[style.centerText, { fontFamily: 'inherit' }]}>
        © 2023 KickKart LLC All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
