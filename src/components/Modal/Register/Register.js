import React from 'react';


export default function Register({open, onClose}){
    if (!open) return null /*Do nothing if not open*/

    return(
        <div>
            <button onClick={onClose}> CLOSE </button>
        </div>
        )
}