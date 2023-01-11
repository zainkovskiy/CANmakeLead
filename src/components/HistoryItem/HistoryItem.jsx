import React from 'react';
import moment from 'moment/moment';
import './HistoryItem.scss';

export const HistoryItem = ({ item }) => {
  return (
    <div className='history'>
      <p className='history__title text'>{moment(item.nDate).locale('ru').format('DD MMMM YYYY')}<span>{item.nTitle}</span></p>
      <p className='history__body text'>{item.nBody}</p>
    </div>
  );
};
