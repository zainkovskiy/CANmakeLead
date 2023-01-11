import React, { useEffect, useState } from 'react';
import './SliderFrame.scss';
export const SliderFrame = (props) => {
  const [top, setTop] = useState(0);
  useEffect(() => {
    console.log('slider')
    setTimeout(() => {
      if (props.url) {
        // document.body.setAttribute('style', 'overflow: hidden; pointer-events: none;');
        // document.body.insertAdjacentHTML('beforeend', '<div>ghbdtn</div>')
        setTop(window.pageYOffset);
      }
    }, 1500)
    return () => {
      console.log('exit');
      document.body.removeAttribute("style");
    }

  })
  return (
    <>
      {
        props.url &&
        <div className='slider' style={{ width: `${props.width}`, top: `${top}px` }}>
          <button
            onClick={props.onClose}
          >закрыть</button>
          {/* <iframe
            width='100%'
            height='100%'
            // src={src}
            className="slider__frame"
            src='https://www.radiorecord.ru'>
          </iframe> */}
        </div>
      }
    </>
  );
};
