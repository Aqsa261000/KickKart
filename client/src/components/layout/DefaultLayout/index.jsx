import React, { Fragment } from 'react';

import { Box, Container } from '@mui/material';
import { Footer, Navbar } from '../../common';

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Navbar />
        <Box component={'main'} sx={{ flex: 1 }}>
          <Box maxWidth="xl">{props.children}</Box>
        </Box>
        <Footer />
      </Box>
    </Fragment>
  );
};

export default DefaultLayout;
