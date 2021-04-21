import React from 'react';
import ReactDom from 'react-dom'
import './Login.css';

export default function Login({open, onClose, setRegisterIsClicked}) {
    if (!open) return null /*Do nothing if not open*/

    /** Create portal makes a child component render outside of its parent by
    * creating a portal to somewhere else. Just rendering does not implement
     * event delegation.*/
    return ReactDom.createPortal(
        <>
            <div className={"overlay"}/>
            <div className={"modal-wrapper"}>
                <button onClick={onClose} id={"exitButton"}>x</button>
                <h2>Login</h2>
                <form>
                    <label>Email address:</label>
                    <input type={"text"} placeholder={"Your email address.."}/>
                    <label>Password:</label>
                    <input type={"text"} placeholder={"Your password.."}/>
                    <input type={"submit"} value={"Login"}/>
                </form>
                <p>Not a member? Register now! </p>
            </div>

        </>,
        document.getElementById('portal')
    )
}