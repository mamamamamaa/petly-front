import {
  ButtonContainer,
  Heading,
  Paragraph,
  VerifyButton,
  VerifyCardContainer,
  VerifyContainer,
} from './VerifyCard.styled';
import { useAuth } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { reverify } from '../../redux/auth/operations';
import { useState } from 'react';
import { Timer } from '../../utils/Timer/Timer';

export const VerifyCard = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const [start, setStart] = useState(true);

  const handleEnableVerify = () => setStart(false);

  const reverifyHandler = () => {
    dispatch(reverify());
    setStart(true);
  };

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
          <VerifyButton onClick={reverifyHandler} disabled={start}>
            re-verification
          </VerifyButton>
          {start && <Timer handleEnableVerify={handleEnableVerify} />}
        </ButtonContainer>
      </VerifyCardContainer>
    </VerifyContainer>
  );
};
