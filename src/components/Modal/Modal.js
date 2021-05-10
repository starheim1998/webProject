import React from 'react';
import ReactDom from 'react-dom'
import './Modal.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


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
                {/*<button onClick={onClose} id={"exitButton"}>x</button>*/}
                <FontAwesomeIcon icon={faTimes} onClick={onClose} id={"exitButton"}> </FontAwesomeIcon>
                <h2>{title}</h2>
                    {children}
                <p onClick={reDirect} className={"textUnder"}> {textUnder} </p>
            </div>
        </>,
        document.getElementById('portal')
    )
}