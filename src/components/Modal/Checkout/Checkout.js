import React from 'react';
import ReactDom from 'react-dom'
import './Checkout.css';

export default function Checkout({checkout, children}) {
    if (!checkout) return null /*Do nothing if not open*/

    /** Create portal makes a child component render outside of its parent by
     * creating a portal to somewhere else. Just rendering does not implement
     * event delegation.*/
    return ReactDom.createPortal(
        <>

        </>,
        document.getElementById('portal')
    )
}