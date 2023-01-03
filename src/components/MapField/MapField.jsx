import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle } from "@mui/material";
import { DialogActions } from "@mui/material";
import { YMaps, Map, Button, Circle } from "react-yandex-maps";
import { toggleMap, addValue, editValue } from 'actions/address';
import * as MuiComponents from "@mui/material";

export const MapField = ({ open, currentArea }) => {
  const [isShowCircleEdit, setisShowCircleEdit] = useState(false);
  const [isShowCircle, setisShowCircle] = useState(true);
  const circleGeametryRef = useRef(currentArea?.value || []);
  const dispatch = useDispatch();

  const circleDraw = (ref) => {
    if (ref) {
      setisShowCircle(false);
      circleGeametryRef.current.length > 0 ? ref.editor.startEditing() : ref.editor.startDrawing();
      ref.editor.events.add("statechange", event => {
        circleGeametryRef.current = [ref.geometry.getCoordinates(), ref.geometry.getRadius()]
      });
    }
    if (!ref) {
      setisShowCircle(true);
    }
  }

  const onClose = () => {
    dispatch(toggleMap());
  }

  const onSave = () => {
    if (isShowCircleEdit) {return};
    
    if (circleGeametryRef.current?.length > 0) {
      if (currentArea) {
        dispatch(editValue({
          ...currentArea,
          value: circleGeametryRef.current
        }))
      } else {
        dispatch(addValue({
          id: Date.now(),
          value: circleGeametryRef.current,
          name: 'mapArea',
        }));
      }
    }
    dispatch(toggleMap());
  }

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth={true}
      maxWidth='md'
    >
      <DialogTitle>Карта</DialogTitle>
      <DialogContent>
        <YMaps height={400} width='100%'>
          <Map
            defaultState={{ center: [55.030204, 82.920430], zoom: 14 }}
            modules={["geoObject.addon.editor"]}
            height='50vh'
            width='100%'
          >
            {
              isShowCircleEdit &&
              <Circle
                instanceRef={(ref) => circleDraw(ref)}
                geometry={circleGeametryRef.current}
                options={{
                  editorDrawingCursor: "crosshair",
                  draggable: true,
                }}
              />
            }
            {
              isShowCircle &&
              <Circle
                geometry={circleGeametryRef.current}
              />
            }
            <Button
              data={{
                image: `${isShowCircleEdit ?
                  'https://crm.centralnoe.ru/dealincom/assets/img/remove_icon.png' :
                  'https://crm.centralnoe.ru/dealincom/assets/svg/location-pin-svgrepo-com.svg'
                  }`,
                title: `${isShowCircleEdit ? 'Очистить область' : 'Указать на карте (круг)'}`,
              }}
              options={{
                float: 'left',
                position: {
                  left: 10,
                  top: 10
                }
              }}
              onClick={() => { setisShowCircleEdit(!isShowCircleEdit) }}
            />
          </Map>
        </YMaps>
      </DialogContent>
      <DialogActions>
        <MuiComponents.Button
          size='small'
          variant='contained'
          onClick={onClose}
        >
          отменить
        </MuiComponents.Button>
        <MuiComponents.Button
          size='small'
          variant='outlined'
          onClick={onSave}
        >
          сохранить
        </MuiComponents.Button>
      </DialogActions>
    </Dialog>
  )
} 