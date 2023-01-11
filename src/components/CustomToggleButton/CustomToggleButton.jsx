import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';

export const CustomToggleButton = styled(ToggleButton)(() => ({
  '&.Mui-selected': {
    backgroundColor: '#0c54a0',
    color: '#fff',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#0c54a0',
    color: '#fff',
  },
  '&:hover': {
    backgroundColor: '#0c54a0',
    opacity: '0.7',
    color: '#fff'
  }
}));