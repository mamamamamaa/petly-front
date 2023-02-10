import React from 'react';

import { StyledFriend } from './Friend.styled';

const Friend = ({ friend }) => {
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  return (
    <StyledFriend>
      <h3>
        <a href={url}>{title}</a>
      </h3>

      <div>
        <img src={imageUrl} alt="company logo" />

        <ul>
          <li>
            Time:
            <p></p>
          </li>

          <li>
            Adress:
            <p>
              {!addressUrl ? (
                !address ? (
                  '--------------------'
                ) : (
                  `${address}`
                )
              ) : (
                <a href={addressUrl}>{address}</a>
              )}
            </p>
          </li>

          <li>
            Email:
            <p>
              {!email ? (
                '--------------------'
              ) : (
                <a href={`mailto:${email}`}>{email}</a>
              )}
            </p>
          </li>

          <li>
            Phone:
            <p>
              {!phone ? (
                '--------------------'
              ) : (
                <a href={`tel:${phone}`}>{phone}0</a>
              )}
            </p>
          </li>
        </ul>
      </div>
    </StyledFriend>
  );
};

export default Friend;
