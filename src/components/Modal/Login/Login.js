import React, {useState} from 'react';
import Modal from "../Modal";
import {useDispatch} from "react-redux";
import {loginUserAction} from "../../../store/actions/userActions";

export default function Login({open, onClose, redirect}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    function handleSubmitFetch(e) {
        e.preventDefault();
        const login = {
            email: email,
            password: password,
        };
        dispatch(loginUserAction(login))
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