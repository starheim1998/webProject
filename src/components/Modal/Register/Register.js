import Modal from "../Modal";
import React, {useState} from 'react';
import {registerUserAction} from "../../../store/actions/userActions";

export default function Register({open, onClose, redirect}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmitFetch(e){
        e.preventDefault();
        if (confirmPassword !== password){
            alert("Passwords did not match!");
            setPassword("");
            setConfirmPassword("");
            return null;
        }
        const newAccount = {
            name: name,
            email: email,
            password: password,
        };
        registerUserAction(newAccount);
        onClose();
    }

    return(
            <Modal title={"Register"}
                   textUnder={"Already a member? Log in."}
                   open={open}
                   onClose={onClose}
                   reDirect={redirect}>
                <form onSubmit={handleSubmitFetch}>
                    <label>Name:</label>
                    <input type={"text"} placeholder={"Your name here.."} value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <label>Email address:</label>
                    <input type={"text"} placeholder={"Your email address.."} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password:</label>
                    <input type={"password"} placeholder={"Your password.."} value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label>Confirm Password:</label>
                    <input type={"password"} placeholder={"Confirm password.."}
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <input type={"submit"} value={"Register now!"}/>
                </form>
            </Modal>
        )
}
