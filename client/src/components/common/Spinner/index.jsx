import React from 'react';
import { Container, CircularProgress } from '@mui/material';
const Spinner = () => {
  return (
    <Container className='fullcontainer'>
      <CircularProgress color="secondary" />
    </Container>
  );
};

export default Spinner;
