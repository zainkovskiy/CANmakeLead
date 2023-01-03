import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { setValueLead } from 'actions/lead';

export const Mortgage = () => {
  const lead = useSelector((state) => state.lead).toJS();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }
  return (
    <>
      <p className="text" style={{ fontWeight: 600, textAlign: 'center', margin: 0, color: '#737373' }}>
        Ипотека
      </p>
      <div className="form__row">
        <span className="text form__title">Сумма кредита</span>
        <div className="form__inputs">
          <TextField
            autoComplete="off"
            size="small"
            fullWidth
            onChange={handleChange}
            name='mortgageSum'
            id='mortgage'
            value={lead?.mortgage?.mortgageSum || ''}
          />
        </div>
      </div>
      <div className="form__row">
        <span className="text form__title">Срок кредита</span>
        <div className="form__inputs">
          <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment.locale('ru')}>
            <DatePicker
                 value={lead?.mortgage?.builderTime ? moment(lead?.mortgage?.builderTime) : null}
                 onChange={(e) => handleChange({ 
                   value: moment(e).format('YYYY-MM-DD'), 
                   type: 'date', 
                   name: 'builderTime',
                   id: 'mortgage',
                 })}
              renderInput={(params) =>
                <TextField
                  fullWidth
                  autoComplete="off"
                  size='small'
                  {...params}
                />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="form__row">
        <span className="text form__title">Решение по кредиту</span>
        <div className="form__inputs">
        <ToggleButtonGroup
          color="primary"
          size="small"
          onChange={handleChange}
          fullWidth
          value={lead?.mortgage?.mortgageResolve}
          exclusive
        >

          <ToggleButton id='mortgage' name='mortgageResolve' value="yes">есть</ToggleButton>
          <ToggleButton id='mortgage' name='mortgageResolve' value="no">нет</ToggleButton>
        </ToggleButtonGroup>
        </div>
      </div>
    </>
  )
}