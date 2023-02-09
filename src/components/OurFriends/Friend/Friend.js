import React from 'react';

const Friend = friend => {
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  return (
    <div>
      <title href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </title>

      <ul>
        <li>
          <img
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            src={imageUrl}
            alt="logo"
          />
        </li>
        <li>
          <title>Time:</title>
          {workDays}
        </li>
        <li>
          <title>Adress:</title>
          {address}
          {addressUrl}
        </li>
        <li>{phone}</li>
        <li>{email}</li>
      </ul>
      <img src={imageUrl} alt="logo" />
    </div>
  );
};

export default Friend;
