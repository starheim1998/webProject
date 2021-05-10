//React
import React, {useState} from 'react';
//Components
import Modal from "../Modal";
//Redux
import {useDispatch} from "react-redux";
//Actions
import {loginUserAction} from "../../../store/actions/userActions";

/**
 * Login modal component - takes user input and uses redux state to send login request to the database.
 * @param reDirect redirects to register modal.
 * @param open useState in Header.js to indicate if the modal is open or not.
 * @param onClose closes the modal.
 * @returns {JSX.Element} login modal.
 */
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
        dispatch(loginUserAction(login)) //Try to login using login email & password provided.
        setEmail("");
        setPassword(""); // Reset form on submit.
        onClose(); // Close modal on login.
    }

    /**All input values are required. Submit is handled by the handleSubmitFetch(e) method.*/
    return (
        <Modal title={"Login"}
               textUnder={"Not a member? Register now!"}
               open={open}
               onClose={onClose}
               reDirect={redirect}
        >
            <form onSubmit={handleSubmitFetch} className={"formModal"}>
                <label>Email address:</label>
                <input type={"text"} placeholder={"Your email address.."} value={email}
                       onChange={(e) => setEmail(e.target.value)} required/>
                <label>Password:</label>
                <input type={"password"} placeholder={"Your password.."} value={password}
                       onChange={(e) => setPassword(e.target.value)} required/>
                <input type={"submit"} value={"Log in!"} className={"submitButton"}/>
            </form>
        </Modal>
    )
}