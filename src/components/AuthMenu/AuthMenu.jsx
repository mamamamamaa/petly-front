import { Button, Sp, User, NavigLink } from "./AuthMenu.styled";


const AuthMenu = () => {
    return (
        <User>
            <Button>
                <NavigLink to="/login">
                <Sp>Login</Sp>
                </NavigLink>
            </Button>
            <Button>
                <NavigLink to="/register">
                <Sp>Registration</Sp>
                </NavigLink>
            </Button>
        </User>
    )
};

export default AuthMenu;



// import { NavLink } from "react-router-dom";


// const AuthMenu = () => {
//     return (
//         <ul>
//             <li>
//                 <NavLink to="/login">
//                     Login
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/register">
//                     Registration
//                 </NavLink>
//             </li>
//         </ul>
//     )
// };

// export default AuthMenu;