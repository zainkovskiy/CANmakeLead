import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PolylineIcon from '@mui/icons-material/Polyline';
import { MapField } from "components/MapField";
import { DadataField } from "components/DadataField";
import { toggleMap, toggleDadata, removeValue } from 'actions/address';
import './Address.scss';

export const Address = () => {
  const firstLoading = useRef(true);
  const address = useSelector((state) => state.address).toJS();
  const [currentArea, setCurrentArea] = useState(null)
  useEffect(() => {
    if (firstLoading.current) { firstLoading.current = false; return }
    if (!address.isShowMap) {
      setCurrentArea(null);
    }
  }, [address.isShowMap])
  useEffect(() => {
    if (firstLoading.current) { firstLoading.current = false; return }
    if (!address.isShowDadata) {
      setCurrentArea(null);
    }
  }, [address.isShowDadata])
  const dispatch = useDispatch();
  const handlerClick = (event) => {
    const name = event.target.name;
    if (name === 'map') {
      dispatch(toggleMap());
      return
    }
    if (name === 'dadata') {
      dispatch(toggleDadata());
      return
    }
  }
  const removeArea = (area) => {
    dispatch(removeValue(area));
  }
  const editArea = (area) => {
    setCurrentArea(area);
    if (area.name === 'mapArea') {
      dispatch(toggleMap());
      return
    }
    if (area.name === 'dadata') {
      dispatch(toggleDadata());
      return
    }
  }
  return (
    <>
      <p className="text address__title" style={{ fontWeight: 600, textAlign: 'center' }}>
        Локация
      </p>
      <div className="address">
        <div className="address__buttons">
          <Button
            size="small"
            variant="contained"
            startIcon={<LocationOnIcon />}
            fullWidth
            onClick={handlerClick}
            name='dadata'
          >
            добавить адресс
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={<PolylineIcon />}
            fullWidth
            onClick={handlerClick}
            name='map'
          >
            добавить область на карте
          </Button>
        </div>
        {
          address?.mapArea?.length > 0 &&
          <div className="address__pin">
            <p className="text address__title">Место на карте</p>
            {
              address.mapArea.map((area, idx) => {
                return (
                  <Chip
                    key={idx}
                    label={`Место на карте ${idx + 1}`}
                    variant="outlined"
                    onClick={() => { editArea(area) }}
                    onDelete={() => { removeArea(area) }}
                  />
                )
              })
            }
          </div>
        }
        {
          address?.dadata?.length > 0 &&
          <div className="address__pin">
            <p className="text address__title">Адреса</p>
            {
              address.dadata.map((area, idx) => {
                return (
                  <Chip
                    key={idx}
                    label={area.value.value}
                    variant="outlined"
                    onClick={() => { editArea(area) }}
                    onDelete={() => { removeArea(area) }}
                  />
                )
              })
            }
          </div>
        }
      </div>
      {
        address?.isShowMap &&
        <MapField
          currentArea={currentArea}
          open={address?.isShowMap} />
      }
      {
        address?.isShowDadata &&
        <DadataField
          currentArea={currentArea}
          open={address?.isShowDadata} />
      }
    </>
  )
}