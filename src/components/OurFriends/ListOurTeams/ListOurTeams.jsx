import {
  Container,
  Wraper,
  Title,
  TitleHi,
  Text,
  TitleBy,
  BoxVideo,
  Iframe,
  // Img,
  // Ul,
  // Li,
} from './ListOurTeams.styled';
// import poster from '../../../utils/svg/easter-egg.png';

// ======== second way for news ========= down
function ListOurTeams() {
  return (
    <Container>
      <Wraper>
        <Title>Our Team</Title>
        <TitleHi>Hello everybody !</TitleHi>
        <Text>
          We are glad to present to your attention our team, that worked on this
          project. In a short video, you can see a presentation for each
          participant.
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
    </Container>
  );
}

export default ListOurTeams;

/* <Card>
<Wraper>
  <Img src={poster} alt="egg" />
  <Ul>
    <Li>Name:</Li>
    <Li>Ivan Sirco</Li>
  </Ul>
  <Ul>
    <Li>Role:</Li>
    <Li>Team Lead, Developer</Li>
  </Ul>
</Wraper>
<Ul>
  <Li>Сontacts (link):</Li>
  <Li>Phone Mail Telegram Linkedin GitHub</Li>
</Ul>
</Card> */
