import {
  BsFillEnvelopeFill,
  BsTelegram,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
import DefaultPhoto from '../images/defaultPhoto.png';

import {
  Card,
  WraperContact,
  Img,
  Ul,
  Li,
  Span,
  Link,
} from './ListTeam.styled';

function ListTeam({ team }) {
  return (
    <ul>
      {team.map(item => (
        <li key={item.id}>
          <Card>
            {item.photo ? (
              <Img src={item.photo} alt="team's member" />
            ) : (
              <Img src={DefaultPhoto} alt="team's member" />
            )}
            <WraperContact>
              <Ul>
                <Li>Name:</Li>
                <Li>Role:</Li>
                <Li>Сontacts:</Li>
              </Ul>
              <Ul>
                <Li>{item.name}</Li>
                <Li>{item.role}</Li>
                <Li>
                  {item.mail && (
                    <Span>
                      <Link href={item.mail}>
                        <BsFillEnvelopeFill color="#e9a46c" size="22px" />
                      </Link>
                    </Span>
                  )}
                  {item.telegram && (
                    <Span>
                      <Link
                        href={item.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsTelegram color="#229ED9" size="22px" />
                      </Link>
                    </Span>
                  )}

                  {item.linkedin && (
                    <Span>
                      <Link
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin color="#0e76a8" size="22px" />
                      </Link>
                    </Span>
                  )}
                  {item.github && (
                    <Span>
                      <Link
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" size="22px" />
                      </Link>
                    </Span>
                  )}
                </Li>
              </Ul>
            </WraperContact>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default ListTeam;
