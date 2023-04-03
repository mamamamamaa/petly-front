import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import friendsSelectors from '../../../redux/friends/selectors';
import { fetchTeam } from '../../../redux/friends/operations';
import {
  Container,
  Wraper,
  Title,
  TitleHi,
  Text,
  TitleBy,
  BoxVideo,
  Iframe,
  BoxInsert,
} from './ListOurTeams.styled';
import ListTeam from '../ListTeam/ListTeam';
import { useFriends } from '../../../redux/hooks';
// import teamData from '../ListOurTeams/teamData.json';

const { selectTeam } = friendsSelectors;

function ListOurTeams() {
  const dispatch = useDispatch();

  const team = useSelector(selectTeam);
  const sortTeam = [...team].sort((e1, e2) => e1.id - e2.id);

  useEffect(() => {
    if (team.length === 0) {
      dispatch(fetchTeam());
    }
  }, [dispatch]);

  return (
    <Container>
      <Wraper>
        <Title>Our Team</Title>
        <TitleHi>Hello everybody !</TitleHi>
        <Text>
          We are glad to present to your attention our team, that worked on this
          project. In a short video, you can see a presentation for each
          participant. <br />
          Under the video, you can find our roles and contacts.
        </Text>
        <TitleBy>We wish successful projects and peace to everyone !</TitleBy>
      </Wraper>
      <BoxVideo>
        <Iframe
          src="https://www.youtube.com/embed/zrCgBxfB5jQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Iframe>
      </BoxVideo>
      <ListTeam team={sortTeam} />
      <BoxInsert></BoxInsert>
    </Container>
  );
}

export default ListOurTeams;
