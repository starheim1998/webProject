//React
import React from 'react';
import ReactDom from 'react-dom'

//Styling
import './Modal.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

/**
 * Modal is the 'parent' or functional component(?) of login, register and checkout, and is expandable.
 * @param reDirect redirects from login to register and back in Header.js.
 * @param open useState in Header.js to indicate if the modal is open or not.
 * @param onClose closes the modal.
 * @param title main title of the modal.
 * @param textUnder text at the bottom of the modal. Used as onClick redirect.
 * @param children can be anything. In this application it is used for the different forms of the modals.
 * @returns {React.ReactPortal|null} modal.
 */
export default function Modal({reDirect,
                                  open,
                                  onClose,
                                  title,
                                  textUnder,
                                  children}) {
    if (!open) return null /*Do nothing if not open*/

    /** Create portal makes a child component render outside of its parent by
     * creating a portal to somewhere else. Just rendering does not implement
     * event delegation.*/
    return ReactDom.createPortal(
        <>
            <div className={"overlay"} onClick={onClose}/>
            <div className={"modal-wrapper"}>
                <FontAwesomeIcon icon={faTimes} onClick={onClose} id={"exitButton"}> </FontAwesomeIcon>
                <h2>{title}</h2>
                {children}
                <p onClick={reDirect} className={"textUnder"}> {textUnder} </p>
            </div>
        </>,
        document.getElementById('portal')
    )
}