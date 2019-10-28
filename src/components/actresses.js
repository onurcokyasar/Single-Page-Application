import React from 'react';
import { ActressList } from '../data/actresses';
import { Link } from "react-router-dom";

const Actresses = (props) => {

    let actresses = ActressList.map((person) => {
        return (
            <div className="actor-container">
                <Link to={`/actresses/${person.url}`}>
                    <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}></div>
                </Link>
                <h3>{person.name}</h3>
            </div>
        );
    });

    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                {actresses}
            </div>
        </div>
    );
};

export default Actresses;