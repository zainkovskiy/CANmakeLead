import React, { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { setValueLead } from 'actions/lead';
import { Rent } from 'components/Rent';
import { Mortgage } from 'components/Mortgage';
import { Address } from "components/Address";

export const ResidentialGet = () => {
  const lead = useSelector((state) => state.lead).toJS();
  const dispatch = useDispatch();
  useEffect(() => {
    const anchor = document.querySelector('.residential');
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [])

  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }
  return (
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
              <MenuItem value='flat'>Квартира</MenuItem>
              <MenuItem value='room'>Комната</MenuItem>
              <MenuItem value='house'>Дом, дача</MenuItem>
              <MenuItem value='ground'>Земельный участок</MenuItem>
            </Select>
          </div>
        </div>
        <div className="form__row">
          <span className="text form__title">Стоимость</span>
          <div className="form__inputs">
            <TextField
              autoComplete="off"
              size="small"
              label='От'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='priceFrom'
              value={lead?.serviceObject?.priceFrom || ''}
            />
            <TextField
              autoComplete="off"
              size="small"
              label='До'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='priceTo'
              value={lead?.serviceObject?.priceTo || ''}
            />
          </div>
        </div>
        <div className="form__row">
          <span className="text form__title">Площадь общая</span>
          <div className="form__inputs">
            <TextField
              autoComplete="off"
              size="small"
              label='От'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='totalAreaFrom'
              value={lead?.serviceObject?.totalAreaFrom || ''}
            />
            <TextField
              autoComplete="off"
              size="small"
              label='До'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='totalAreaTo'
              value={lead?.serviceObject?.totalAreaTo || ''}
            />
          </div>
        </div>
        <div className="form__row">
          <span className="text form__title">Площадь жилая</span>
          <div className="form__inputs">
            <TextField
              autoComplete="off"
              size="small"
              label='От'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='livingAreaFrom'
              value={lead?.serviceObject?.livingAreaFrom || ''}
            />
            <TextField
              autoComplete="off"
              size="small"
              label='До'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='livingAreaTo'
              value={lead?.serviceObject?.livingAreaTo || ''}
            />
          </div>
        </div>
        {
          (lead?.serviceObject?.type === 'flat' || lead?.serviceObject?.type === 'room') &&
          <div className="form__row">
            <span className="text form__title">Площадь кухни</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='От'
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='kitchenAreaFrom'
                value={lead?.serviceObject?.kitchenAreaFrom || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='До'
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='kitchenAreaTo'
                value={lead?.serviceObject?.kitchenAreaTo || ''}
              />
            </div>
          </div>
        }
        {
          (lead?.serviceObject?.type === 'house' || lead?.serviceObject?.type === 'ground') &&
          <div className="form__row">
            <span className="text form__title">Площадь участка</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='От'
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='groundAreaFrom'
                value={lead?.serviceObject?.groundAreaFrom || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='До'
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='groundAreaTo'
                value={lead?.serviceObject?.groundAreaTo || ''}
              />
            </div>
          </div>
        }
        <div className="form__row">
          <span className="text form__title">Этаж</span>
          <div className="form__inputs">
            <TextField
              autoComplete="off"
              size="small"
              label='От'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='floorFrom'
              value={lead?.serviceObject?.floorFrom || ''}
            />
            <TextField
              autoComplete="off"
              size="small"
              label='До'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='floorTo'
              value={lead?.serviceObject?.floorTo || ''}
            />
          </div>
        </div>
        {
          (lead?.serviceObject?.type === 'flat' || lead?.serviceObject?.type === 'room') &&
          <div className="form__row">
            <span className="text form__title">Этажей в здании</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='От'
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='floorCountFrom'
                value={lead?.serviceObject?.floorCountFrom || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='До'
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='floorCountTo'
                value={lead?.serviceObject?.floorCountTo || ''}
              />
            </div>
          </div>
        }
        <div className="form__row">
          <span className="text form__title">Количество комнат</span>
          <div className="form__inputs">
            <TextField
              autoComplete="off"
              size="small"
              label='От'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='countRoomFrom'
              value={lead?.serviceObject?.countRoomFrom || ''}
            />
            <TextField
              autoComplete="off"
              size="small"
              label='До'
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='countRoomTo'
              value={lead?.serviceObject?.countRoomTo || ''}
            />
          </div>
        </div>
        <div className="form__row">
          <span className="text form__title">Дата сдачи</span>
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
                    error={lead?.serviceObject?.finishBuildDate === 'Invalid date'}
                  />}
              />
            </LocalizationProvider>
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
                  defaultChecked={false}
                  id='serviceObject'
                  onChange={handleChange}
                  name='Balcon'
                  value={lead?.serviceObject?.Balcon || false}
                />
              }
              label="Балкон"
            />
            <FormControlLabel
              color="grey"
              control={
                <Checkbox
                  size="small"
                  id='serviceObject'
                  onChange={handleChange}
                  name='newHouse'
                  value={lead?.serviceObject?.newHouse || false}
                />
              }
              label="Только в новом доме"
            />
            <FormControlLabel
              color="grey"
              control={
                <Checkbox
                  size="small"
                  id='serviceObject'
                  onChange={handleChange}
                  name='needMortgage'
                  value={lead?.serviceObject?.needMortgage || false}
                />
              }
              label="Нужна ипотека"
            />
          </div>
        </div>
        {
          lead?.serviceAction === 'rent' &&
          <Rent estate='residential' />
        }
        {
          (lead?.serviceAction === 'buy' && lead?.serviceEstateType === 'residential' && lead?.serviceIsMortgage) &&
          <Mortgage />
        }
        <Address />
      </form>
    </div>
  );
};
