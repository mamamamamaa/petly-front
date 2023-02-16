import {
  Heading,
  Paragraph,
  VerifyCardContainer,
  VerifyContainer,
} from './VerifyCard.styled';
import { useAuth } from '../../redux/hooks';

export const VerifyCard = () => {
  // const { user } = useAuth();
  const user = { email: 'maks.denishchuk@gmail.com' };
  return (
    <VerifyContainer>
      <VerifyCardContainer>
        <Heading>Almost done...</Heading>
        <Paragraph>
          We'll send an email to {user.email} in 5 minutes. Open it up to
          activate your account.
        </Paragraph>
        <p>
          If you have not received our message by mail, then click on the
          "re-verification" button and we will resend the message!
        </p>
      </VerifyCardContainer>
    </VerifyContainer>
  );
};
