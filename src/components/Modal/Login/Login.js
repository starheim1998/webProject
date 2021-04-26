import React from 'react';
import Modal from "../Modal";

export default function Login({open, onClose, redirect}) {
    return (
        <Modal title={"Login"}
               textUnder={"Not a member? Register now!"}
               open={open}
               onClose={onClose}
               reDirect={redirect}
        >
            <form>
                <input type={"text"} placeholder={"Your email address.."}/>
                <label>Password:</label>
                <input type={"text"} placeholder={"Your password.."}/>
                <input type={"submit"} value={"Log in!"}/>
                {/*//TODO: ONSUBMIT*/}
            </form>

            <label>Email address:</label>
        </Modal>
    )
}