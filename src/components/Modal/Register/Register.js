//Components
import Modal from "../Modal";
//React
import React, {useState} from 'react';
//Actions
import {registerUserAction} from "../../../store/actions/userActions";

/**
 * Register modal component - takes user input and uses redux state to send registration request to the database.
 * @param reDirect redirects to login modal.
 * @param open useState in Header.js to indicate if the modal is open or not.
 * @param onClose closes the modal.
 * @returns {JSX.Element} register modal.
 */
export default function Register({open, onClose, redirect}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmitFetch(e){
        e.preventDefault();
        if (confirmPassword !== password) {
            alert("Passwords did not match!");
            setPassword("");
            setConfirmPassword(""); //Password fields are reset and the user can try again.
            return null;
        }
        const newAccount = {
            name: name,
            email: email,
            password: password,
        };
        registerUserAction(newAccount); //Try to register user with newAccount object.
        onClose(); // close modal.
    }

    /*** All input values are required. Submit is handled by the handleSubmitFetch(e) method.*/
    return (
        <Modal title={"Register"}
               textUnder={"Already a member? Log in."}
               open={open}
               onClose={onClose}
               reDirect={redirect}>
            <form onSubmit={handleSubmitFetch} className={"formModal"}>
                <label>Name:</label>
                <input type={"text"} placeholder={"Your name here.."} value={name}
                       onChange={(e) => setName(e.target.value)} required/>
                <label>Email address:</label>
                <input type={"text"} placeholder={"Your email address.."} value={email}
                       onChange={(e) => setEmail(e.target.value)} required/>
                <label>Password:</label>
                <input type={"password"} placeholder={"Your password.."} value={password}
                       onChange={(e) => setPassword(e.target.value)} required/>
                <label>Confirm Password:</label>
                <input type={"password"} placeholder={"Confirm password.."}
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)} required/>
                <input type={"submit"} value={"Register now!"} className={"submitButton"}/>
            </form>
        </Modal>
    )
}
