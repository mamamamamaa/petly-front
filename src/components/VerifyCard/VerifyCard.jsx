import {
  ButtonContainer,
  Heading,
  Paragraph,
  Timer,
  VerifyButton,
  VerifyCardContainer,
  VerifyContainer,
} from './VerifyCard.styled';
import { useAuth } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { reverify } from '../../redux/auth/operations';

export const VerifyCard = () => {
  // const { user } = useAuth();
  const dispatch = useDispatch();
  const user = { email: 'maks.denishchuk@gmail.com' };

  const reverifyHandler = () => dispatch(reverify());
  return (
    <VerifyContainer>
      <VerifyCardContainer>
        <Heading>Almost done...</Heading>
        <Paragraph>
          We'll send an email to {user.email} in 5 minutes. Open it up to
          activate your account.
        </Paragraph>
        <Paragraph>
          If you have not received our message by mail, then click on the
          "re-verification" button and we will resend the message!
        </Paragraph>
        <ButtonContainer>
          <VerifyButton onClick={reverifyHandler} disabled={false}>
            re-verification
          </VerifyButton>
          <Timer>30</Timer>
        </ButtonContainer>
      </VerifyCardContainer>
    </VerifyContainer>
  );
};
