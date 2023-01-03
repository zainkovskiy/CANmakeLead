import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle } from "@mui/material";
import { DialogActions } from "@mui/material";
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useDispatch } from 'react-redux';
import { toggleDadata, addValue, editValue } from 'actions/address';
import { Button } from "@mui/material"

import './DadataField.scss';

export const DadataField = ({ open, currentArea }) => {
  const [value, setValue] = useState(currentArea?.value || '');
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(toggleDadata());
  }
  const handleClick = () => {
    if (value) {
      if (currentArea) {
        dispatch(editValue({
          ...currentArea,
          value: value
        }))
      } else {
        dispatch(addValue({
          id: Date.now(),
          value: value,
          name: 'dadata',
        }));
      }
    }
    dispatch(toggleDadata());
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth='md'
    >
      <DialogTitle>Адрес</DialogTitle>
      <DialogContent sx={{ height: 200 }}>
        <AddressSuggestions
          token="408e6651c0b9bfc8e2f487383d45353973f3285c"
          // type='metro'
          name='address'
          count={5}
          onChange={(e) => { setValue(e) }}
          // filterFromBound={'region'}
          filterToBound={'house'}
          value={value}
          // defaultQuery={location}
          inputProps={
            {
              placeholder: 'Введите адрес',
              className: 'dadata__input',
            }
          }
          renderOption={(listItem) => {
            return <li
              className='datata__list-item'
            >{listItem.value}</li>
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          size='small'
          variant='contained'
          onClick={onClose}
        >
          отменить
        </Button>
        <Button
          size='small'
          variant='outlined'
          onClick={handleClick}
        >
          сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
