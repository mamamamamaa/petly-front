import {
  Container,
  Title,
  TitleHi,
  Text,
  TitleBy,
  BoxVideo,
  Iframe,
  // Card,
  // Wraper,
  // Img,
  // Ul,
  // Li,
} from './ListOurTeams.styled';
// import poster from '../../../utils/svg/easter-egg.png';

// ======== second way for news ========= down
function ListOurTeams() {
  return (
    <Container>
      <Title>Our Team</Title>
      <TitleHi>Hello everybody!</TitleHi>
      <Text>
        We are glad to present to your attention our team, that worked on this
        project. In a short video, you can see a presentation for each
        participant.
      </Text>
      <TitleBy>We wish successful projects and peace to everyone!</TitleBy>
      <BoxVideo>
        <Iframe
          video
          src="https://www.youtube.com/embed/qgnsmJCy9FQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      </BoxVideo>
    </Container>
  );
}

export default ListOurTeams;

{
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
}
