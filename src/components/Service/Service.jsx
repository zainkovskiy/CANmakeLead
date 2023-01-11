import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValueLead } from 'actions/lead';
import { ToggleButtonGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import { Title } from "components/Title";
import { Residential } from "components/Residential";
import { Commercial } from "components/Commercial";
import { useSelectionObject } from "hooks/bundleObject";
import { CustomToggleButton } from 'components/CustomToggleButton'

export const Service = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const lead = state.lead.toJS();
  useEffect(() => {
    const anchor = document.querySelector('.service');
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [])

  const handleChange = (event) => {
    dispatch(setValueLead(event));
  }

  const handleClick = () => {
    console.log(useSelectionObject(state));
  }

return (
  <>
    <Title title='Услуги' anchor='service' />
    <div className="wrapper wrap_vertical">
      <ToggleButtonGroup
        color="primary"
        size="small"
        onChange={handleChange}
        fullWidth
        value={lead?.serviceAction}
        exclusive
      >

        <CustomToggleButton name='serviceAction' value="buy">купить</CustomToggleButton>
        <CustomToggleButton name='serviceAction' value="rent">снять</CustomToggleButton>
        <CustomToggleButton name='serviceAction' value="sell">продать</CustomToggleButton>
        <CustomToggleButton name='serviceAction' value="toRent">сдать</CustomToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        color="primary"
        value={lead?.serviceEstateType || null}
        exclusive
        size="small"
        onChange={handleChange}
        fullWidth
      >

        <CustomToggleButton name='serviceEstateType' value="residential">жилая</CustomToggleButton>
        <CustomToggleButton name='serviceEstateType' value="commercial">коммерческая</CustomToggleButton>
      </ToggleButtonGroup>
      {
        (lead?.serviceAction === 'buy' && lead?.serviceEstateType === 'residential') &&
        <FormControlLabel
          color="grey"
          control={
            <Checkbox
              size="small"
              onChange={handleChange}
              name='serviceIsMortgage'
              checked={lead?.serviceIsMortgage || false}
            />
          }
          label="Ипотека"
        />
      }
    </div>
    {
      lead?.serviceEstateType === 'residential' &&
      <Residential />
    }
    {
      lead?.serviceEstateType === 'commercial' &&
      <Commercial />
    }
    {
      ((lead?.serviceAction === 'buy' || lead?.serviceAction === 'rent') && lead?.serviceEstateType) &&
      <div className="wrapper" style={{ justifyContent: 'flex-end', display: 'flex' }}>
        <Button
          size="small"
          variant="contained"
          onClick={handleClick}
        >
          Подобрать
        </Button>
      </div>
    }
  </>
)
}