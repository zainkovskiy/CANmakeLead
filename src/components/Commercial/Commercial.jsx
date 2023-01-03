import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { setValueLead } from 'actions/lead';
import { Title } from "components/Title";
import { Rent } from "components/Rent";
import { Address } from "components/Address";

export const Commercial = () => {
  const lead = useSelector((state) => state.lead).toJS();
  const dispatch = useDispatch();
  useEffect(() => {
    const anchor = document.querySelector('.сommercial');
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [])
  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }
  return (
    <>
      <Title title='Коммерческая недвижимость' anchor='сommercial' />
      <div className="wrapper">
        <form className="form">
          <div className="form__row">
            <span className="text form__title">Тип объекта</span>
            <div className="form__inputs">

              <Select
                size="small"
                displayEmpty
                fullWidth
                onChange={(event) => handleChange({ ...event.target, id: 'serviceObject', type: 'autoSelect' })}
                name='type'
                value={lead?.serviceObject?.type || ''}
              >
                <MenuItem value=''>Выбрать</MenuItem>
                <MenuItem value='flat'>Торговая площадь</MenuItem>
                <MenuItem value='house'>Готовый бизнес</MenuItem>
                <MenuItem value='ground'>Земельный участок</MenuItem>
              </Select>
            </div>
          </div>
          <div className="form__row">
            <span className="text form__title">Тип здания</span>
            <div className="form__inputs">
              <Select
                size="small"
                displayEmpty
                fullWidth
                onChange={(event) => handleChange({ ...event.target, id: 'serviceObject', type: 'autoSelect' })}
                name='typeBuilding'
                value={lead?.serviceObject?.typeBuilding || ''}
              >
                <MenuItem value=''>Выбрать</MenuItem>
                <MenuItem value='MFC'>МФЦ</MenuItem>
                <MenuItem value='mall'>Площадь в ТЦ</MenuItem>
                <MenuItem value='place'>Помещение</MenuItem>
                <MenuItem value='livingBuild'>Жилое здание</MenuItem>
              </Select>
            </div>
          </div>
          <div className="form__row">
            <span className="text form__title">Цена</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='От'
                fullWidth
                onChange={handleChange}
                name='priceFrom'
                id='serviceObject'
                value={lead?.serviceObject?.priceFrom || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='До'
                fullWidth
                onChange={handleChange}
                name='priceTo'
                id='serviceObject'
                value={lead?.serviceObject?.priceTo || ''}
              />
            </div>
          </div>
          <div className="form__row">
            <span className="text form__title">Площадь</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='От'
                fullWidth
                onChange={handleChange}
                name='totalAreaFrom'
                id='serviceObject'
                value={lead?.serviceObject?.totalAreaFrom || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='До'
                fullWidth
                onChange={handleChange}
                name='totalAreaTo'
                id='serviceObject'
                value={lead?.serviceObject?.totalAreaTo || ''}
              />
            </div>
          </div>
          <div className="form__row">
            <span className="text form__title">Этаж</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='От'
                fullWidth                
                onChange={handleChange}
                name='floorFrom'
                id='serviceObject'
                value={lead?.serviceObject?.floorFrom || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='До'
                fullWidth
                onChange={handleChange}
                name='floorTo'
                id='serviceObject'
                value={lead?.serviceObject?.floorTo || ''}
              />
            </div>
          </div>
          <div className="form__row">
            <span className="text form__title">Год постройки</span>
            <div className="form__inputs">
              <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment.locale('ru')}>
                <DatePicker
                 value={lead?.serviceObject?.finishBuildDate ? moment(lead?.serviceObject?.finishBuildDate) : null}
                 onChange={(e) => handleChange({ 
                   value: moment(e).format('YYYY-MM-DD'), 
                   type: 'date', 
                   name: 'finishBuildDate',
                   id: 'serviceObject',
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
            <span className="text form__title">Вход</span>
            <div className="form__inputs">
              <ToggleButtonGroup
                color="primary"
                size="small"
                onChange={handleChange}
                value={lead?.serviceObject?.entry || null}
                exclusive
              >

                <ToggleButton id='serviceObject' name='entry' value="street">С улицы</ToggleButton>
                <ToggleButton id='serviceObject' name='entry' value="yard">Со двора</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className="form__row">
            <span className="text form__title">Отдельный вход</span>
            <div className="form__inputs">
              <ToggleButtonGroup
                color="primary"
                size="small"
                onChange={handleChange}
                value={lead?.serviceObject?.mineEntry || null}
                exclusive
              >

                <ToggleButton id='serviceObject' name='mineEntry' value="yes">да</ToggleButton>
                <ToggleButton id='serviceObject' name='mineEntry' value="no">нет</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          {
            (lead?.serviceAction === 'rent' || lead?.serviceAction === 'toRent') &&
            <Rent estate='сommercial' />
          }
          <Address />
        </form>
      </div>
    </>
  )
}