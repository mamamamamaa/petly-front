import React, { useState } from 'react';

import { StyledFriend } from './Friend.styled';
// import errorImg from '../../images/ErrorPage.jpg';
// import TimeModal from './TimeModal';

const Friend = ({ friend }) => {
  // const [showModal, setShowModal] = useState(false);
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
    friend;

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <StyledFriend>
      <h3>
        <a href={url}>{title}</a>{' '}
      </h3>

      <div>
        <img src={imageUrl} alt="company logo" />
        <dl>
          <div>
            <dt>Time:</dt>
            <dd>
              {/* {!workDays || workDays.length === 0 ? (
                '--------------------'
              ) : (
                <button type="button" onClick={toggleModal}>
                  {workDays.find(day => day.isOpen === true).from} -
                  {workDays.find(day => day.isOpen === true).to}
                </button>
              )} */}
              {/* {showModal && <TimeModal timeTable={workDays} />} */}
            </dd>
          </div>
          <div>
            {' '}
            <dt>Adress:</dt>
            <dd>
              {!addressUrl ? (
                !address ? (
                  '--------------------'
                ) : (
                  `${address}`
                )
              ) : (
                <a href={addressUrl}>{address}</a>
              )}
            </dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>
              {!email ? (
                '--------------------'
              ) : (
                <a href={`mailto:${email}`}>{email}</a>
              )}
            </dd>
          </div>
          <div>
            <dt>Phone:</dt>
            <dd>
              {!phone ? (
                '--------------------'
              ) : (
                <a href={`tel:${phone}`}>{phone}0</a>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </StyledFriend>
  );
};

export default Friend;

// ================================
// import React from 'react';
// import { FriendsCard } from '../../../utils/reusable';
// // import {
// //   Item,
// //   Heading,
// //   InfoWrapper,
// //   TextList,
// //   TextField,
// //   Contact,
// // } from './Friend.styled';

// const Friend = ({
//   address,
//   addressUrl,
//   email,
//   phone,
//   title,
//   url,
//   workDays,
//   imageUrl,
// }) => {
//   // const { address, addressUrl, email, phone, title, url, workDays, imageUrl } =
//   //   friend;

//   return (
//     <FriendsCard>
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         <h3>{title}</h3>
//       </a>

//       <div>
//         <img src={imageUrl} alt="logo" />

//         <ul>
//           <li>
//             Time: <br />
//             {/* {workDays?.length > 0 ? (
//               <WorkHours workDays={workDays} />
//             ) : (
//               <span>-------------</span>
//             )} */}
//           </li>

//           <li>
//             Address: <br />
//             <span>
//               {address ? (
//                 <a href={addressUrl} target="_blank" rel="noopener noreferrer">
//                   {address}
//                 </a>
//               ) : (
//                 <span>-------------</span>
//               )}
//             </span>
//           </li>
//           <li>
//             Email: <br />
//             <span>
//               {email ? (
//                 <a href={`mailto: ${email} `}>{email}</a>
//               ) : (
//                 <span>-------------</span>
//               )}
//             </span>
//           </li>
//           <li>
//             Phone: <br />
//             <span>
//               {phone ? (
//                 <a href={`tel: ${phone} `}>{phone}</a>
//               ) : (
//                 <span>-------------</span>
//               )}
//             </span>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <title href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </title>

//         <ul>
//           <li>
//             <img
//               href={url}
//               target="_blank"
//               rel="noreferrer noopener"
//               src={imageUrl}
//               alt="logo"
//             />
//           </li>
//           <li>
//             <title>Time:</title>
//             {workDays}
//           </li>
//           <li>
//             <title>Adress:</title>
//             {address}
//             {addressUrl}
//           </li>
//           <li>{phone}</li>
//           <li>{email}</li>
//         </ul>
//         <img src={imageUrl} alt="logo" />
//       </div>
//     </FriendsCard>
//   );
// };

// export default Friend;
