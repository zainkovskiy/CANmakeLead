import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material"
import { TextField } from "@mui/material";

export const SelectObject = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth='md'
    >
      <DialogTitle>Поиск объекта</DialogTitle>
      <DialogContent sx={{ height: '100vh' }}>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <TextField
            autoComplete="off"
            size="small"
            label='По номеру'
            fullWidth
            // onChange={handleChange}
            name='number'
          // value={lead?.serviceObject?.totalAreaFrom || ''}
          />
          <TextField
            autoComplete="off"
            size="small"
            label='По адресу'
            fullWidth
            // onChange={handleChange}
            name='address'
          // value={lead?.serviceObject?.totalAreaFrom || ''}
          />
          <TextField
            autoComplete="off"
            size="small"
            label='По менеджеру'
            fullWidth
            // onChange={handleChange}
            name='manager'
          // value={lead?.serviceObject?.totalAreaFrom || ''}
          />
          <Button
            size='small'
            variant='contained'
          // onClick={onClose}
          >
            Найти
          </Button>
        </div>
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
        // onClick={handleClick}
        >
          сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
