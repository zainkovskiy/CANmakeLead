import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { setValueLead } from 'actions/lead';
import { Title } from 'components/Title';

export const Review = () => {
  const location = useLocation();
  const name = location.state;
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead).toJS();
  useEffect(() => {
    const anchor = document.querySelector(`.${name}`);
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [])
  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }
  const getTitle = () => {
    if (name === 'complaint') {
      return 'Жалоба'
    }
    if (name === 'thank') {
      return 'Благодарность'
    }
    if (name === 'another') {
      return 'Иное'
    }
  }
  return (
    <>
      <Title title={getTitle()} anchor={name} />
      <div className="wrapper">
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Autocomplete
            disablePortal
            options={employe}
            sx={{ width: 330 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Сотрудник" size="small" />}
            onChange={(event, newValue) => handleChange({ value: newValue, id: `${name}Object`, type: 'autoSelect', name: 'employe' })}
            value={lead[`${name}Object`]?.employe || null}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            disabled={!lead[`${name}Object`]?.isEmploye}
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                onChange={handleChange}
                name='isEmploye'
                id={`${name}Object`}
                checked={lead[`${name}Object`]?.isEmploye || false}
              />
            }
            label="На сотрудника"
          />
        </div>
        <label className="label text" style={{ marginTop: '0.5rem' }}>
          Текст обращения:
          <textarea
            name="comment"
            cols="30"
            rows="10"
            className="comment"
            id={`${name}Object`}
            onChange={handleChange}
            value={lead[`${name}Object`]?.comment || ''}
          ></textarea>
        </label>
      </div>
    </>
  )
}

const employe = [
  {
    name: 'Заинковский Антон'
  },
  {
    name: 'Мищенко Иван'
  },
  {
    name: 'Мищенко Ольга'
  },
  {
    name: 'Черникова Мария'
  },
]