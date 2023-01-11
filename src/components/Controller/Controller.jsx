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
          sx={{userSelect: 'none'}}
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
        <span style={{ color: "#737373" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea laboriosam quae quibusdam exercitationem iste, sequi ut ducimus perferendis. Perspiciatis odit aliquam temporibus maxime culpa odio reiciendis, ratione provident. Animi.
          Itaque quaerat tenetur repudiandae voluptatum, veritatis nobis ratione obcaecati sapiente cumque aspernatur omnis ea odio corrupti ipsum maxime esse voluptatibus a aperiam. Perferendis animi nisi nostrum aperiam possimus necessitatibus ipsa!
          Alias veniam dicta quaerat nihil, voluptates, eos saepe porro iste eius, pariatur ab. Quia minus, tempore minima et iure nisi blanditiis iste atque quos consequuntur, facilis eveniet cumque quis suscipit?
          Fugiat explicabo inventore itaque tempore sed aperiam cumque voluptatum doloribus illum asperiores architecto hic, iure aspernatur eius? Tempora ut ipsum dolores accusamus ducimus, quas repudiandae. Facilis ratione quas ab quidem.
          Cumque eos vero quibusdam laborum soluta laboriosam. Necessitatibus explicabo quidem iure odio, ducimus aliquam unde voluptatum. Nesciunt ratione nobis, nemo at aut dolores optio, quasi provident delectus incidunt quisquam soluta?
          Voluptatem quasi quisquam labore non minus nihil omnis, cum consequatur maxime enim necessitatibus odit odio? Obcaecati libero autem quae ullam at iure expedita hic illum similique? Et minus ea laboriosam!
          Debitis velit, modi, iure id exercitationem quasi esse quas sequi officia, quis atque corrupti iste asperiores magnam cumque quod maiores perspiciatis ipsum cupiditate sit corporis ex eaque qui. Numquam, ab.
          Earum, numquam! Enim eius temporibus deleniti laudantium excepturi sint illum ab adipisci obcaecati totam numquam, nulla in facere dolor ad sunt repellendus odit repudiandae cum voluptas eaque animi similique! Suscipit!</span>
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
