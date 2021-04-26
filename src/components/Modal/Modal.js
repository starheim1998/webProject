import React from 'react';
import ReactDom from 'react-dom'
import './Modal.css';

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
                <button onClick={onClose} id={"exitButton"}>x</button>
                <h2>{title}</h2>
                    {children}
                <p onClick={reDirect}>{textUnder}</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}