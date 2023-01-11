import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Title } from "components/Title";
import { SelectObject } from "components/SelectObject";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { CustomToggleButton } from 'components/CustomToggleButton'

import { setValueLead } from 'actions/lead';

export const Communication = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lead = useSelector((state) => state.lead).toJS();
  const handleChange = (event) => {
    dispatch(setValueLead(event))
  }
  const handleNavigate = (source) => {
    navigate(source, { state: source })
  }
  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }
  return (
    <>
      <Title
        title='Коммуникация'
      />
      <div className="wrapper">
        <div className="communication wrap_vertical">
          <div>
            <span className="text">Тип обращения</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <ToggleButtonGroup
                color="primary"
                exclusive
                size="small"
                value={lead?.callType || null}
                onChange={handleChange}
                fullWidth
              >
                <CustomToggleButton name='callType' value="callIn">вх. звонок</CustomToggleButton>
                <CustomToggleButton name='callType' value="callOut">иск. звонок</CustomToggleButton>
                <CustomToggleButton name='callType' value="callMiss">пропущенный</CustomToggleButton>
              </ToggleButtonGroup>
              <Autocomplete
                sx={{ width: '50%' }}
                disablePortal
                options={source}
                getOptionLabel={(option) => option}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={(event, newValue) => handleChange({ value: newValue, type: 'autoSelect', name: 'callSource' })}
                value={lead?.callSource || null}
                renderInput={(params) => <TextField {...params} label="Источник" size="small" />}
              />
            </div>
          </div>
          <div>
            <span className="text">Цель обращения</span>
            <div>
              <ToggleButtonGroup
                color="primary"
                exclusive
                size="small"
                onChange={(event) => { handleChange(event); handleNavigate(event.target.value) }}
                value={lead?.callTarget || null}
                fullWidth
              >
                <CustomToggleButton name='callTarget' value="service">услуги</CustomToggleButton>
                <CustomToggleButton name='callTarget' value="complaint">жалоба</CustomToggleButton>
                <CustomToggleButton name='callTarget' value="thank">благодарность</CustomToggleButton>
                <CustomToggleButton name='callTarget' value="hr">персонал</CustomToggleButton>
                <CustomToggleButton name='callTarget' value="another">иное</CustomToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          {
            lead?.callTarget !== 'hr' &&
            <div>
              <FormControlLabel
                color="grey"
                control={
                  <Checkbox
                    size="small"
                    name='callIsObject'
                    onChange={handleChange}
                    checked={lead?.callIsObject || false}
                  />
                }
                label="Обращение по объекту"
              />
              {
                lead?.callIsObject &&
                <Button
                  size='small'
                  variant='text'
                  onClick={onOpen}
                >
                  Выбрать
                </Button>
              }
            </div>
          }
        </div>
      </div>
      <Outlet />
      {
        open &&
        <SelectObject
          open={open}
          onClose={onClose}
        />
      }
    </>
  )
}

const source = [
  'vacancy 1',
  'vacancy 2',
  'vacancy 3',
  'vacancy 4',
]