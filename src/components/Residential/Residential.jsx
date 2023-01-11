import React from "react";
import { Title } from 'components/Title';
import { useSelector } from "react-redux";
import { ResidentialGet } from "components/ResidentialGet";
import { ResidentialSend } from "components/ResidentialSend";

export const Residential = () => {
  const serviceAction = useSelector((state) => state.lead.get('serviceAction'));

  return (
    <>
      <Title title='Жилая недвижимость' anchor='residential' />
      {
        (serviceAction === 'buy' || serviceAction === 'rent') &&
        <ResidentialGet/>
      }
      {
        (serviceAction === 'sell' || serviceAction === 'toRent') &&
        <ResidentialSend/>
      }
    </>
  )
}