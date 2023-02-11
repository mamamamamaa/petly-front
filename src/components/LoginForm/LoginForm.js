import { Formik, ErrorMessage } from "formik"
import * as yup from "yup";
import { useDispatch } from "react-redux";

import {login}  from "../../redux/auth/operations";

import {
    Container,
    FormLogin,
    FieldLogin,
    FieldPass,
    Title,
    Input,
    Button,
    Text,
    StyledLink,
    ErrorText
    
} from "./LoginForm.styled";

const securityPassword = /^\S*$/

const loginSchema = yup.object().shape({
    email:yup.string().email("Invalid email adress").required("Required"),
   password: yup.string().min(7,"Password must be at least 7 characters").max(32,"Password must be at most 32 characters").matches(securityPassword, "Must not contain spaces").required("Required"),
})

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}            
            render={message => <ErrorText>{message}</ErrorText>}
        />
    )
}


const LoginForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        email:"",
        password:""
    }
    
    const handleSubmit = async (values, actions) => {
        const { resetForm } = actions; 
        const form = ({ 'email': values.email, 'password': values.password }); 
        const { error } = await dispatch(login(form));

        if (!error) {
        resetForm() 
        }
                               
        console.log(values)
        //  console.log(actions)
     }
        
    return (
        <Container>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
            >
                
                <FormLogin autoComplete="on">
                <Title>Login</Title>
                    <FieldLogin>
                        <label htmlFor="email">  
                            <Input id="loginEmail" type="email" name="email" placeholder="Email" />
                            <FormError name="email" />
                        </label>
                        
                    </FieldLogin>

                    <FieldPass>
                        <label htmlFor="password">
                            <Input id="password" type="password" name="password" placeholder="Password" />
                            <FormError name="password" />
                        </label>
                    </FieldPass>
                                  
                    <Button type="submit">Login</Button>
                    <Text>
                        <span>Don't have an account?</span>{' '}
                        <StyledLink to='/register'>Register</StyledLink>                
                    </Text>
                </FormLogin>
            </Formik>
        </Container>
    )
 }


export default LoginForm 