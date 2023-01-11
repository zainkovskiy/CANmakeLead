import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from "moment";
import { useAllObject } from "hooks/bundleObject";
import { HistoryItem } from 'components/HistoryItem';
import { setValueLead, clearLead } from 'actions/lead';
import { clearClient } from 'actions/client';
import { clearAddress } from 'actions/address';
import './Controller.scss';

export const Controller = () => {
  const state = useSelector((state) => state);
  const lead = state.lead.toJS();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setValueLead(event))
  }
  const saveLead = () => {
    console.log(useAllObject(state));
  }
  const clearState = () => {
    dispatch(clearClient());
    dispatch(clearLead());
    dispatch(clearAddress());
  }
  return (
    <div className="controller">
      <FormControl>
        <FormLabel sx={{ color: '#fff' }} focused={false}>Результат звонка</FormLabel>
        <RadioGroup
          defaultValue="female"
          name="result"
          onChange={handleChange}
          value={lead?.result || null}
          sx={{ userSelect: 'none' }}
        >
          <FormControlLabel color="white" value="success" control={
            <Radio
              size="small"
              sx={{
                color: '#fff',
                '&.Mui-checked': {
                  color: '#fff',
                },
              }}
            />
          } label="Успешно" />
          <FormControlLabel color="white" value="noAnswer" control={
            <Radio
              size="small"
              sx={{
                color: '#fff',
                '&.Mui-checked': {
                  color: '#fff',
                },
              }}
            />
          } label="Не отвечает" />
          <FormControlLabel color="white" value="callLater" control={
            <Radio
              size="small"
              sx={{
                color: '#fff',
                '&.Mui-checked': {
                  color: '#fff',
                },
              }}
            />
          } label="Перезвонить позже" />
        </RadioGroup>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment.locale('ru')}>
        <DateTimePicker
          value={lead?.callLaterDate ? moment(lead?.callLaterDate) : null}
          onChange={(e) => handleChange({ value: moment(e).format('YYYY-MM-DD HH:mm:ss'), type: 'date', name: 'callLaterDate' })}
          name='callLaterDate'
          disabled={lead?.result !== 'callLater'}
          renderInput={(params) =>
            <TextField
              fullWidth
              autoComplete="off"
              sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
              size='small'
              {...params}
              error={lead?.callLaterDate === 'Invalid date'}
            />}
        />
      </LocalizationProvider>
      <label className="label text" style={{ color: '#fff' }}>
        Комментарий
        <textarea
          onChange={handleChange}
          className="comment"
          name='commentOperator'
          rows={5}></textarea>
      </label>
      <span className="text" style={{ marginBottom: '-0.5rem', color: '#fff' }}>History</span>
      <div className="controller__history">
        {
          history.map((item) => {
            return <HistoryItem item={item} key={item.UID}/>
          })
        }
      </div>
      <div className="controller__buttons">
        <Button
          size='small'
          variant="outlined"
          fullWidth
          onClick={saveLead}
        >
          сохранить
        </Button>
        <Button
          size='small'
          variant="outlined"
          fullWidth
          onClick={clearState}
        >
          отменить
        </Button>
      </div>
    </div>
  )
}

const history = [
  {
    "UID": 4158,
    "author": {
      "UID": 2198,
      "fullName": "Мищенко Иван"
    },
    "nTitle": "Заголовок Новости",
    "nDate": "2023-01-01 15:00:42",
    "nBody": "Текст новости",
    "nPicture": "https://w7.pngwing.com/pngs/646/159/png-transparent-computer-icons-newspaper-breaking-news-others-text-label-trademark-thumbnail.png"
  },
  {
    "UID": 4159,
    "author": {
      "UID": 2198,
      "fullName": "Мищенко Иван"
    },
    "nTitle": "Заголовок Новости",
    "nDate": "2023-01-01 15:00:42",
    "nBody": "Текст новости",
    "nPicture": "https://w7.pngwing.com/pngs/646/159/png-transparent-computer-icons-newspaper-breaking-news-others-text-label-trademark-thumbnail.png"
  }
]