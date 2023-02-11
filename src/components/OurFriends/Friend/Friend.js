import React from 'react';

import {
  Title,
  Link,
  Description,
  DescList,
  Image,
  Item,
  AdressLink,
} from './Friend.styled';

import defaultImage from '../images/defaultImage.jpg';

const Friend = ({ friend }) => {
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  return (
    <>
      <Title>
        <Link href={url}>{title}</Link>
      </Title>

      <Description>
        <Image src={imageUrl ? imageUrl : defaultImage} alt="company logo" />

        <DescList>
          <Item>
            Time:
            <p></p>
          </Item>

          <Item>
            Adress: <br />
            {!addressUrl ? (
              !address ? (
                '--------------------'
              ) : (
                `${address}`
              )
            ) : (
              <AdressLink href={addressUrl}>{address}</AdressLink>
            )}
          </Item>

          <Item>
            Email: <br />
            {!email ? (
              '--------------------'
            ) : (
              <AdressLink href={`mailto:${email}`}>{email}</AdressLink>
            )}
          </Item>

          <Item>
            Phone: <br />
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
