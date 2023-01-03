import React, { useEffect } from "react";
import { Title } from "components/Title";
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import './HR.scss';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setValueLead } from 'actions/lead';

export const HR = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead).toJS();
  useEffect(() => {
    const anchor = document.querySelector(`.${location.state}`);
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [])
  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }
  return (
    <>
      <Title title='Отдел персонала' anchor='hr' />
      <form className="wrapper hr">
        <div className='hr__inputs'>
          <Autocomplete
            disablePortal
            options={vacancy}
            getOptionLabel={(option) => option}
            renderInput={(params) => <TextField {...params} label="Вакансия" size="small" />}
            onChange={(event, newValue) => handleChange({ value: newValue, id: 'hrObject', type: 'autoSelect', name: 'vakancy' })}
            fullWidth
            value={lead?.hrObject?.vakancy || null}
            isOptionEqualToValue={(option, value) => option === value}
          />
          <Autocomplete
            fullWidth
            disablePortal
            options={employe}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Ответственный менеджер" size="small" />}
            onChange={(event, newValue) => handleChange({ value: newValue, id: 'hrObject', type: 'autoSelect', name: 'hr' })}
            value={lead?.hrObject?.hr || null}
            isOptionEqualToValue={(option, value) => option.name === value.name}
          />
        </div>
        <label className="label text" style={{ marginTop: '0.5rem' }}>
          Опишите тему обращения:
          <textarea
            name="comment"
            cols="30"
            rows="10"
            className="comment"
            id='hrObject'
            onChange={handleChange}
            value={lead?.hrObject?.comment || ''}
          ></textarea>
        </label>
      </form>
    </>
  )
}

const employe = [
  {
    name: 'Заинковский Антон',
  },
  {
    name: 'Мищенко Иван',
  },
  {
    name: 'Мищенко Ольга',
  },
  {
    name: 'Черникова Мария',
  },
]
const vacancy = [
  'Вакансия 1',
  'Вакансия 2',
  'Вакансия 3',
  'Вакансия 4',
]