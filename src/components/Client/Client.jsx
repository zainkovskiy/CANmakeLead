import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValueClient } from 'actions/client';

import { Title } from "components/Title";
import { TextField } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Client.scss';

const ClientMemo = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client).toJS();
  const handleChange = (event) => {
    dispatch(setValueClient(event));
  }
  return (
    <>
      <Title
        title='Клиент'
      />
      <div className="wrapper">
        <div className="client wrap_vertical">
          <ToggleButtonGroup
            color="primary"
            exclusive
            size="small"
            value={client?.clientType || null}
            onChange={handleChange}
            sx={{ justifySelf: 'flex-end' }}
            fullWidth
          >
            <ToggleButton name='clientType' value="private">физ. лицо</ToggleButton>
            <ToggleButton name='clientType' value="legal">юр. лицо</ToggleButton>
            <ToggleButton name='clientType' value="spam">спам</ToggleButton>
          </ToggleButtonGroup>
          <div className="client__wrap">
            <div className="client__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='Фамилия'
                name="secondName"
                fullWidth
                onChange={handleChange}
                value={client?.secondName || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='Имя'
                name="name"
                fullWidth
                onChange={handleChange}
                value={client?.name || ''}
              />
              <TextField
                autoComplete="off"
                size="small"
                label='Отчество'
                name="lastName"
                fullWidth
                onChange={handleChange}
                value={client?.lastName || ''}
              />
            </div>
            <div className="client__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='email'
                name="email"
                fullWidth
                onChange={handleChange}
                value={client?.email || ''}
              />
              <div>
                <TextField
                  autoComplete="off"
                  size="small"
                  label='Номер телефона'
                  name="phone"
                  fullWidth
                  onChange={handleChange}
                  value={client?.phone || ''}
                />
                <FormControlLabel
                  color="grey"
                  control={
                    <Checkbox
                      size="small"
                      onChange={handleChange}
                      name='changePhone'
                      checked={client?.changePhone || false}
                    />
                  }
                  label="Подменный номер"
                />
              </div>
            </div>
            <div className="client__inputs">
              <TextField
                autoComplete="off"
                size="small"
                label='Компания'
                name="company"
                fullWidth
                onChange={handleChange}
                value={client?.company || ''}
                disabled={client?.clientType !== 'legal'}
              />
              <div>
                <TextField
                  autoComplete="off"
                  size="small"
                  label='Агентство'
                  name="estateCompany"
                  fullWidth
                  onChange={handleChange}
                  value={client?.estateCompany || ''}
                  disabled={!client?.isRealtor}
                />
                <FormControlLabel
                  color="grey"
                  control={
                    <Checkbox
                      size="small"
                      onChange={handleChange}
                      name='isRealtor'
                      checked={client?.isRealtor || false}
                    />
                  }
                  label="Риелтор"
                />
              </div>
            </div>
          </div>
          какая то карточка отвтсвенного
        </div>
      </div>
    </>
  )
}

export const Client = memo(ClientMemo);