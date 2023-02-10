// import React from 'react';

// import FriendsList from '../components/OurFriends/FriendsList/FriendList';

// const OurFriendsPage = () => {
//   return (
//     <div>
//       <title>Our Friends</title>
//       <FriendsList />
//     </div>
//   );
// };

// export default OurFriendsPage;

import React from 'react';
import FriendsContainer from '../components/OurFriends/FriendsContainer/FriendsContainer';
import FriendsList from '../components/OurFriends/FriendsList/FriendList';

const FriendsPage = () => {
  return (
    <FriendsContainer>
      <FriendsList />
    </FriendsContainer>
  );
};

export default FriendsPage;
