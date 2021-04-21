import React from 'react';
import Modal from "../Modal";


export default function Register({open, onClose, redirect}){
    return(
            <Modal title={"Register"}
                   firstInput={"Email address:"}
                   placeHolderFirst={"Your email address.."}
                   secondInput={"Password:"}
                   placeHolderSecond={"Your password.."}
                   buttonName={"Register now!"}
                   textUnder={"Already a member? Log in."}
                   open={open}
                   onClose={onClose}
                   reDirect={redirect}>
                <label>Email address:</label>
                <input type={"text"} placeholder={"Your email address.."}/>
                <label>Password:</label>
                <input type={"text"} placeholder={"Your password.."}/>
                <label>Confirm Password:</label>
                <input type={"text"} placeholder={"Confirm password.."}/>
                <input type={"submit"} value={"Register now!"}/>
            </Modal>
        )
}