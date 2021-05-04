import React, {useState} from 'react';
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {loginUserAction} from "../../../store/actions/loginUserAction";

export default function Login({setLoggedIn, setName, open, onClose, redirect}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    // const loginReducer = useSelector((state) => state.registerReducer.currentUser);
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (accounts.find(account => account.email.toLowerCase() === email.toLowerCase()
    //         && account.password === password)) {
    //         alert("Logged in!");
    //         setLoggedIn(true);
    //         setName(email);
    //         onClose();
    //     } else {
    //         alert("Login failed!");
    //         /*RESET FORM*/
    //         setEmail("");
    //         setPassword("");
    //     }
    // }

    function handleSubmitFetch(e) {
        e.preventDefault();
        const login = {
            email: email,
            password: password,
        };
        // if(!loginReducer.find(user => user.email === email)) {
        //     console.log("no user found");
        //     return null;
        // }
        dispatch(loginUserAction(login));
        alert("logged in!");
        setEmail("");
        setPassword("");
        onClose();
    }
        return (
        <Modal title={"Login"}
               textUnder={"Not a member? Register now!"}
               open={open}
               onClose={onClose}
               reDirect={redirect}
        >
            <form onSubmit={handleSubmitFetch}>
                <label>Email address:</label>
                <input type={"text"} placeholder={"Your email address.."} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type={"password"} placeholder={"Your password.."} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <input type={"submit"} value={"Log in!"}/>
            </form>
        </Modal>
    )
}