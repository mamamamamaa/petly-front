import React, { useState } from 'react';

import {
  Title,
  Description,
  DescList,
  Image,
  Item,
  AdressLink,
  HoursBtn,
} from './Friend.styled';

import defaultImage from '../images/defaultImage.jpg';
import HoursModal from '../Friend/HoursModal';
import { FormattedMessage } from 'react-intl';

const Friend = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const color = showModal ? '#F59256' : '#111111';
  return (
    <>
      <Title href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </Title>

      <Description>
        <Image src={imageUrl ? imageUrl : defaultImage} alt="company logo" />

        <DescList>
          <Item clr={color}>
            <FormattedMessage id="time"/>: <br />
            {!workDays || workDays.length === 0 ? (
              '--------------------'
            ) : (
              <HoursBtn type="button" onClick={toggleModal} clr={color}>
                {workDays.find(day => day.isOpen === true).from} -
                {workDays.find(day => day.isOpen === true).to}
              </HoursBtn>
            )}
            {showModal && <HoursModal timeTable={workDays} />}
          </Item>

          <Item>
             <FormattedMessage id="adress"/>: <br />
            {!addressUrl ? (
              !address ? (
                '--------------------'
              ) : (
                `${address}`
              )
            ) : (
              <AdressLink
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </AdressLink>
            )}
          </Item>

          <Item>
            <FormattedMessage id="email"/>: <br />
            {!email ? (
              '--------------------'
            ) : (
              <AdressLink href={`mailto:${email}`}>{email}</AdressLink>
            )}
          </Item>

          <Item>
            <FormattedMessage id="phone"/>: <br />
            {!phone ? (
              '--------------------'
            ) : (
              <AdressLink href={`tel:${phone}`}>{phone}0</AdressLink>
            )}
          </Item>
        </DescList>
      </Description>
    </>
  );
};

export default Friend;
