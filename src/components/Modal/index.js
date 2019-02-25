import React from 'react';
import './index.css';

export default (props) => {
    return (
        <div className="modal_bg">
            <div className="modal">
                {props.message}
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    )
}