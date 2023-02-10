import React from 'react';

import {
  Title,
  Link,
  Description,
  DescList,
  Image,
  Item,
} from './Friend.styled';

const Friend = ({ friend }) => {
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  return (
    <>
      <Title>
        <Link href={url}>{title}</Link>
      </Title>

      <Description>
        <Image src={imageUrl} alt="company logo" />

        <ul>
          <Item>
            Time:
            <p></p>
          </Item>

          <Item>
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
          </Item>

          <Item>
            Email:
            <p>
              {!email ? (
                '--------------------'
              ) : (
                <a href={`mailto:${email}`}>{email}</a>
              )}
            </p>
          </Item>

          <Item>
            Phone:
            <p>
              {!phone ? (
                '--------------------'
              ) : (
                <a href={`tel:${phone}`}>{phone}0</a>
              )}
            </p>
          </Item>
        </ul>
      </Description>
    </>
  );
};

export default Friend;
