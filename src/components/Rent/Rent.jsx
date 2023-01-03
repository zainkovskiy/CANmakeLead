import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { setValueLead } from 'actions/lead';

export const Rent = ({ estate }) => {
  const lead = useSelector((state) => state.lead).toJS();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }
  return (
    <>
      <p className="text" style={{ fontWeight: 600, textAlign: 'center', margin: 0, color: '#737373' }}>
        Аренда
      </p>
      <div className="form__row">
        <span className="text form__title">Вид аренды</span>
        <div className="form__inputs">
          <Select
            size="small"
            displayEmpty
            fullWidth
            onChange={(event) => handleChange({ ...event.target, id: 'rent', type: 'typeRent' })}
            name='typeRent'
            value={lead?.rent?.typeRent || ''}
          >
            <MenuItem value=''>Выбрать</MenuItem>
            {
              listTypeRent[estate].map((menu, idx) => {
                return <MenuItem key={idx} value={menu.value}>{menu.title}</MenuItem>
              })
            }
          </Select>
        </div>
      </div>
      <div className="form__row">
        <span className="text form__title">Дополнительно</span>
        <div>
          <FormControlLabel
            color="grey"
            control={
              <Checkbox
                size="small"
                onChange={handleChange}
                name='deposit'
                id='rent'
                checked={lead?.rent?.deposit || false}
              />
            }
            label="Без залога"
          />
          <FormControlLabel
            color="grey"
            control={
              <Checkbox
                size="small"
                onChange={handleChange}
                name='withoutPrepay'
                id='rent'
                checked={lead?.rent?.withoutPrepay || false}
              />
            }
            label="Без предоплаты"
          />
        </div>
      </div>
    </>
  )
}

const listTypeRent = {
  residential: [
    {
      value: 'shot',
      title: 'Посуточная',
    },
    {
      value: 'long',
      title: 'Долгосрочная',
    },
  ],
  сommercial: [
    {
      value: 'face',
      title: 'Прямая',
    },
    {
      value: 'sub',
      title: 'Субаренда',
    },
  ],
}