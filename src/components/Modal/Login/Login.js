import React from 'react';
import Modal from "../Modal";

export default function Login({open, onClose, redirect}) {
    return (
        <Modal title={"Login"}
               firstInput={"Email address:"}
               placeHolderFirst={"Your email address.."}
               secondInput={"Password:"}
               placeHolderSecond={"Your password.."}
               buttonName={"Login"}
               textUnder={"Not a member? Register now!"}
               open={open}
               onClose={onClose}
               reDirect={redirect}
        />
    )
}