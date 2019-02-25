import React from 'react';
import './index.css';
import { Link} from "react-router-dom";

export default (props) => {
    return (
        <div className="header">
            <div>{props.userName}</div>
            <button onClick={props.logOut}>
                <Link to={'/'}>Log out</Link>
            </button>
        </div>
    )
}