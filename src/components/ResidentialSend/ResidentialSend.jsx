import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import { setValueLead } from 'actions/lead';
import { Rent } from 'components/Rent';
import { Address } from 'components/Address';

export const ResidentialSend = () => {
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
              fullWidth
              id='serviceObject'
              onChange={handleChange}
              name='price'
              value={lead?.serviceObject?.price || ''}
            />
          </div>
        </div>
        {
          (lead?.serviceObject?.type && lead?.serviceObject?.type !== 'ground') &&
          <>
            <div className="form__row">
              <span className="text form__title">Площадь общая</span>
              <div className="form__inputs">
                <TextField
                  autoComplete="off"
                  size="small"
                  fullWidth
                  id='serviceObject'
                  onChange={handleChange}
                  name='totalArea'
                  value={lead?.serviceObject?.totalArea || ''}
                />
              </div>
            </div>
            <div className="form__row">
              <span className="text form__title">Площадь жилая</span>
              <div className="form__inputs">
                <TextField
                  autoComplete="off"
                  size="small"
                  fullWidth
                  id='serviceObject'
                  onChange={handleChange}
                  name='livingArea'
                  value={lead?.serviceObject?.livingArea || ''}
                />
              </div>
            </div>
          </>
        }
        {
          (lead?.serviceObject?.type === 'flat' || lead?.serviceObject?.type === 'room') &&
          <div className="form__row">
            <span className="text form__title">Площадь кухни</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='kitchenArea'
                value={lead?.serviceObject?.kitchenArea || ''}
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
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='groundArea'
                value={lead?.serviceObject?.groundArea || ''}
              />
            </div>
          </div>
        }
        {
          (lead?.serviceObject?.type === 'flat' || lead?.serviceObject?.type === 'room') &&
          <>
            <div className="form__row">
              <span className="text form__title">Этаж</span>
              <div className="form__inputs">
                <TextField
                  autoComplete="off"
                  size="small"
                  fullWidth
                  id='serviceObject'
                  onChange={handleChange}
                  name='floor'
                  value={lead?.serviceObject?.floor || ''}
                />
              </div>
            </div>
            <div className="form__row">
              <span className="text form__title">Этажей в здании</span>
              <div className="form__inputs">
                <TextField
                  autoComplete="off"
                  size="small"
                  fullWidth
                  id='serviceObject'
                  onChange={handleChange}
                  name='floorCount'
                  value={lead?.serviceObject?.floorCount || ''}
                />
              </div>
            </div>
          </>
        }
        {
          (lead?.serviceObject?.type && lead?.serviceObject?.type !== 'ground') &&
          <div className="form__row">
            <span className="text form__title">Количество комнат</span>
            <div className="form__inputs">
              <TextField
                autoComplete="off"
                size="small"
                fullWidth
                id='serviceObject'
                onChange={handleChange}
                name='countRoom'
                value={lead?.serviceObject?.countRoom || ''}
              />
            </div>
          </div>
        }
        {
          lead?.serviceAction === 'toRent' &&
          <Rent estate='residential' />
        }
        <Address />
      </form>
    </div>
  );
};
