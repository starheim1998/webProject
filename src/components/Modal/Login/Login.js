import React, {useState} from 'react';
import Modal from "../Modal";
import {useSelector} from "react-redux";

export default function Login({open, onClose, redirect}) {
    const accounts = useSelector(state => state.accountReducer.accounts);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (accounts.find(account => account.email.toLowerCase() === email.toLowerCase()
            && account.password === password)) {
            alert("Logged in!");
            onClose();
        } else {
            alert("Login failed!");
            /*RESET FORM*/
            setEmail("");
            setPassword("");
        }
    }

    return (
        <Modal title={"Login"}
               textUnder={"Not a member? Register now!"}
               open={open}
               onClose={onClose}
               reDirect={redirect}
        >
            <form onSubmit={handleSubmit}>
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