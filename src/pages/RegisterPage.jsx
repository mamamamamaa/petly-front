import RegisterForm from '../components/RegisterForm';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../redux/hooks';
import { VerifyCard } from '../components/VerifyCard/VerifyCard';
const RegisterPage = () => {
  const { verifyPart } = useAuth();
  return (
    <>
      <Toaster />
      {/*{!verifyPart && <RegisterForm />}*/}
      {/*{verifyPart && <VerifyCard />}*/}
      <VerifyCard />
    </>
  );
};

export default RegisterPage;
